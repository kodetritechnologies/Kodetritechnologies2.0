import React from 'react';
import CategoryFilter from '../../components/Shop/Filters/CategoryFilter';
import PriceFilter from '../../components/Shop/Filters/PriceFilter';
import SizeFilter from '../../components/Shop/Filters/SizeFilter';
import ColorFilter from '../../components/Shop/Filters/ColorFilter';
import AvailabilityFilter from '../../components/Shop/Filters/AvailabilityFilter';
import BrandFilter from '../../components/Shop/Filters/BrandFilter';
import ProductCard from '../../components/Shop/ProductCard';
import Pagination from '../../components/Pagination';
import ShopControl from '../../components/Shop/ShopControl';
import ActiveFilters from '../../components/Shop/ActiveFilters';
import { serviceProvider } from "@/utils/serviceProvider";

async function page({ searchParams }) {
  const resolvedParams = await searchParams;
  const pageNumber = resolvedParams?.page || 1;
  const searchParamsString = new URLSearchParams(resolvedParams).toString();

  const serverProvider = await serviceProvider();
  
  const fetchCategory = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/categories/product",
      );
      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  let products = [];
  let productsData = {};
  let categories = [];
  try {
    const query = searchParamsString ? `&${searchParamsString}` : `&page=${pageNumber}`;
    const [response, categoryData] = await Promise.all([
      serverProvider.getMethod(`public/ecommerce/item/all?count=20${query}`),
      fetchCategory()
    ]);
    productsData = response?.data || {};
    products = response?.data?.data || [];
    categories = categoryData;
  } catch (error) {
    console.error(error);
  }

  // Extract dynamic filters from products
  const uniqueBrands = new Map();
  const uniqueColors = new Map();
  const uniqueSizes = new Set();
  const usedCategorySlugs = new Set();

  products.forEach(product => {
    // category
    if (product.category) {
      if (Array.isArray(product.category)) {
        product.category.forEach(c => usedCategorySlugs.add(c?.slug || c?._id || c));
      } else {
        usedCategorySlugs.add(product.category?.slug || product.category?._id || product.category);
      }
    }

    // brand
    if (product.brand) {
      const bId = product.brand?._id || product.brand?.slug || product.brand;
      const bName = product.brand?.name || product.brand;
      if (!uniqueBrands.has(bId)) {
        uniqueBrands.set(bId, { id: bId, name: bName, count: 0 });
      }
      uniqueBrands.get(bId).count += 1;
    }

    const extractSizeColor = (item) => {
      if (item?.size) {
        const sName = item.size?.name || item.size?.id || item.size;
        uniqueSizes.add(String(sName));
      }
      if (item?.color) {
        const cId = item.color?.id || item.color?.name || item.color;
        const cName = item.color?.name || item.color;
        const cClass = item.color?.class || "";
        if (!uniqueColors.has(cId)) {
          uniqueColors.set(cId, { id: cId, name: cName, class: cClass, count: 0 });
        }
        uniqueColors.get(cId).count += 1;
      }
    };

    extractSizeColor(product);
    if (product.varients && Array.isArray(product.varients)) {
      product.varients.forEach(extractSizeColor);
    }
  });

  const dynamicBrands = Array.from(uniqueBrands.values());
  const dynamicColors = Array.from(uniqueColors.values());
  const dynamicSizes = Array.from(uniqueSizes);
  const dynamicCategories = categories.filter(c => usedCategorySlugs.has(c?.slug || c?._id || c));
  return (
    <main id="wrapper">
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="canvas-sidebar sidebar-filter canvas-filter left">
                <div className="canvas-wrapper">
                  <div className="canvas-header">
                    <h4 className="title d-none d-xl-block">Filters</h4>
                    <h5 className="title d-xl-none">Filters</h5>
                    <span className="icon-X2 fs-24 close-filter d-xl-none"></span>
                  </div>
                  <div className="canvas-body">
                    <CategoryFilter categories={dynamicCategories.length > 0 ? dynamicCategories : categories} searchParams={resolvedParams} />
                    <div className="br-line"></div>
                    <PriceFilter searchParams={resolvedParams} />
                    <div className="br-line"></div>
                    <SizeFilter searchParams={resolvedParams} sizes={dynamicSizes} />
                    <div className="br-line"></div>
                    <ColorFilter searchParams={resolvedParams} colors={dynamicColors} />
                    <div className="br-line"></div>
                    <AvailabilityFilter searchParams={resolvedParams} />
                    <div className="br-line"></div>
                    <BrandFilter searchParams={resolvedParams} brands={dynamicBrands} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <ShopControl searchParams={resolvedParams} />
              <div className="wrapper-control-shop gridLayout-wrapper">
                <ActiveFilters searchParams={resolvedParams} productCount={productsData.total || products.length} />
                <div
                  className={`wrapper-shop ${(!resolvedParams?.layout || resolvedParams.layout !== 'list') ? `tf-grid-layout ${resolvedParams?.layout || 'tf-col-3'}` : 'tf-list-layout'}`}
                  id="listLayout"
                >
                  {products?.map((product, index) => (
                    <ProductCard key={product?._id || index} product={product} layout={resolvedParams?.layout || 'tf-col-3'} />
                  ))}
                  
                  <div className="wd-full">
                    <Pagination data={productsData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;

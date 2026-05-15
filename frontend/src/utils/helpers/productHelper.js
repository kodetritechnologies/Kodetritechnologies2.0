export function priceHelper(product, variant = null) {
  const price = variant?.price || product?.price;
  const sale_price = variant?.sale_price || product?.sale_price;

  if (variant) {
    return { price, sale_price };
  }

  if (product?.type == "simple") {
    return {
      price: product?.price,
      sale_price: product?.sale_price,
    };
  } else {
    // For variable products without a specific variant selected, show the first variant's price
    return {
      price: product?.varients?.[0]?.price || product?.price,
      sale_price: product?.varients?.[0]?.sale_price || product?.sale_price,
    };
  }
}

export function productUrl(product, variant = null) {
  if (!product) return "#";
  
  if (product.type == "simple") {
    return `/shop/${product.slug}`;
  } else {
    // If we have a specific variant, link to it if the route supports it, 
    // or just link to the product. For now, following existing pattern.
    const variantSlug = variant?.slug || product.varients?.[0]?.slug;
    return `/shop/${product.slug}/${variantSlug}`;
  }
}


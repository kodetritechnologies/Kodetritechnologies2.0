export function priceHelper(product) {
  if (product?.type == "simple") {
    return {
      price: product?.price,
      sale_price: product?.sale_price,
    };
  } else {
    return {
      price: product?.varients[0]?.price,
      sale_price: product?.varients[0]?.sale_price,
    };
  }
}

export function productUrl(product) {
  if (product?.type == "simple") {
    return `/shop/${product?.slug}` || "";
  } else {
    return `/shop/${product?.slug}/${product?.varients[0]?.slug}` || "";
  }
}

"use client";
import { useCurrency } from "@/utils/context/CurrencyContext";

/**
 * Price - renders a formatted price string using the active default currency.
 *
 * Usage:
 *   <Price amount={product.price} />
 *   <Price amount={product.sale_price} className="price-old" />
 *
 * Props:
 *   amount   {number}  - the raw numeric price value
 *   className {string} - optional CSS class on the wrapping <span>
 */
export default function Price({ amount, className = "" }) {
  const { formatPrice } = useCurrency();

  if (amount === null || amount === undefined || amount === "") return null;

  return (
    <span className={className}>{formatPrice(amount)}</span>
  );
}

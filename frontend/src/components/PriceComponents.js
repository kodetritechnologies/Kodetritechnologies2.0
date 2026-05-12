"use client"

import { useMemo } from "react"
import { useParams } from "next/navigation"

export default function PriceComponents({ data }) {

    const { id } = useParams()

    const variants = data?.varients || []

    const selectedVariant = useMemo(() => {
        return variants.find(v => v.slug === id) || variants[0]
    }, [id, variants])

    const salePrice = selectedVariant?.sale_price
    const regularPrice = selectedVariant?.price

    const finalPrice = salePrice ?? regularPrice ?? 0

    const discount = salePrice && regularPrice
        ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
        : 0

    if (!selectedVariant) return null

    return (
        <div className="product-infor-price mb-12">

            <h4 className="price-on-sale">
                ₹{finalPrice}
            </h4>

            {salePrice && (
                <>
                    <div className="br-line type-vertical"></div>

                    <p className="cl-text-3 text-decoration-line-through">
                        ₹{regularPrice}
                    </p>

                    <span className="badge-sale text-white fw-semibold text-caption-02">
                        -{discount}%
                    </span>
                </>
            )}

        </div>
    )
}
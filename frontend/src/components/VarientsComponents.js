"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function VarientsComponents({ data, initialVariantSlug }) {

    const router = useRouter()
    const variants = data?.varients || []

    const { colors, sizesMap } = useMemo(() => {
        const colorSet = new Set()
        const sizeMap = {}

        variants.forEach(v => {
            const [color, size] = v.name.split(" / ")

            colorSet.add(color)

            if (!sizeMap[color]) sizeMap[color] = new Set()
            sizeMap[color].add(size)
        })

        return {
            colors: Array.from(colorSet),
            sizesMap: Object.fromEntries(
                Object.entries(sizeMap).map(([k, v]) => [k, Array.from(v)])
            )
        }
    }, [variants])

    const initialVariant = useMemo(() => {
        return variants.find(v => v.slug === initialVariantSlug) || variants[0]
    }, [initialVariantSlug, variants])

    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (!initialVariant) return

        const [color, size] = initialVariant.name.split(" / ")
        setSelectedColor(color)
        setSelectedSize(size)

    }, [initialVariant])

    const selectedVariant = useMemo(() => {
        if (!selectedColor || !selectedSize) return null

        return variants.find(
            v => v.name === `${selectedColor} / ${selectedSize}`
        )
    }, [selectedColor, selectedSize, variants])

    useEffect(() => {
        if (!selectedVariant) return

        router.replace(
            `/shop/${data.slug}/${selectedVariant.slug}`,
            { scroll: false }
        )
    }, [selectedVariant])

    // Unbind jQuery events from main.js to prevent conflicts with React state
    useEffect(() => {
        if (typeof window !== "undefined" && window.jQuery) {
            const $ = window.jQuery;
            setTimeout(() => {
                const $wrap = $(".tf-product-variant").closest(".tf-product-info-wrap");
                $wrap.find(".size-btn").off("click");
                $wrap.find(".btn-increase").off("click");
                $wrap.find(".btn-decrease").off("click");
            }, 500);
        }
    }, []);

    const price = useMemo(() => {
        const salePrice = selectedVariant?.sale_price || data?.sale_price;
        const regularPrice = selectedVariant?.price || data?.price;

        const sale = Number(salePrice);
        const regular = Number(regularPrice);

        if (!isNaN(sale) && sale > 0) return sale;
        if (!isNaN(regular) && regular > 0) return regular;

        return 0;
    }, [selectedVariant, data])

    if (!selectedVariant) return null

    return (
        <div className="tf-product-variant">

            <div className="variant-picker-item variant-color">
                <div className="variant-picker-label">
                    Colors:
                    <span className="fw-medium text-capitalize">
                        {selectedColor}
                    </span>
                </div>

                <div className="variant-picker-values">
                    {colors.map(color => {

                        const variantWithImage = variants.find(v =>
                            v.name.startsWith(color) && v.gallery?.length > 0
                        )

                        const img =
                            variantWithImage?.gallery?.[0]?.url ||
                            data?.featured_image?.url

                        return (
                            <div
                                key={color}
                                onClick={() => {
                                    setSelectedColor(color)
                                    setSelectedSize(sizesMap[color][0])
                                }}
                                className={`hover-tooltip tooltip-bot color-btn style-image ${selectedColor === color ? "active" : ""
                                    }`}
                            >
                                <div className="img">
                                    <img src={img} alt={color} />
                                </div>
                                <span className="tooltip">{color}</span>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className="variant-picker-item variant-size">
                <div className="variant-picker-label">
                    Size:
                    <span className="fw-medium">{selectedSize}</span>
                </div>

                <div className="variant-picker-values">
                    {sizesMap[selectedColor]?.map(size => {

                        const variantExists = variants.find(
                            v => v.name === `${selectedColor} / ${size}`
                        )

                        return (
                            <span
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`size-btn ${selectedSize === size ? "active" : ""
                                    } ${!variantExists ? "disabled" : ""}`}
                            >
                                {size}
                            </span>
                        )
                    })}
                </div>
            </div>


            <div className="tf-product-total-quantity">
                <p>Quantity:</p>

                <div className="group-action">
                    <div className="wg-quantity">
                        <button
                            className="btn-quantity btn-decrease"
                            onClick={() =>
                                setQuantity(q => Math.max(1, q - 1))
                            }
                        >
                            -
                        </button>

                        <input
                            className="quantity-product"
                            value={quantity}
                            readOnly
                        />

                        <button
                            className="btn-quantity btn-increase"
                            onClick={() => setQuantity(q => q + 1)}
                        >
                            +
                        </button>
                    </div>
                    <button className="btn-action-price tf-btn type-xl w-100">
                        Add To Cart
                        <span className="custom-price-add">
                            ₹{price * quantity}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
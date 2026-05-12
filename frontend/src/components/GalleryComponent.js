"use client"
import { useEffect, useState, useMemo } from "react"
import { useParams } from "next/navigation"
import Swiper from "swiper"
import { Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/thumbs"

export default function GalleryComponent({ data }) {

  const { id } = useParams()
  const [gallery, setGallery] = useState([])
  const variant = id
  const variants = data?.varients || []

  const selectedVariant = useMemo(() => {
    return variants.find(v => v.slug === variant)
  }, [variant, variants])

  useEffect(() => {
    if (!data) return

    if (data.type === "simple") {
      setGallery([
        data?.featured_image?.url,
        ...(data?.gallery?.map((img) => img?.url) || [])
      ])
    } else {
      const images =
        selectedVariant?.gallery?.map((g) => g?.url) || []

      if (images.length > 0) {
        setGallery(images)
      } else {
        setGallery([
          data?.featured_image?.url
        ])
      }
    }
  }, [data, selectedVariant])

  useEffect(() => {
    if (!gallery.length) return

    const thumbs = new Swiper(".tf-product-media-thumbs", {
      modules: [Thumbs],
      spaceBetween: 10,
      slidesPerView: 5,
      direction: "vertical",
      watchSlidesProgress: true,
    })

    const main = new Swiper(".tf-product-media-main", {
      modules: [Thumbs],
      spaceBetween: 10,
      thumbs: {
        swiper: thumbs,
      },
    })

    return () => {
      main.destroy(true, true)
      thumbs.destroy(true, true)
    }
  }, [gallery])

  return (
    <div className="tf-product-media-wrap sticky-top">
      <div className="product-thumbs-slider style-row">
        <div className="flat-wrap-media-product">

          <div className="swiper tf-product-media-main">
            <div className="swiper-wrapper">
              {gallery?.map((img, i) => (
                <div className="swiper-slide" key={i}>
                  <a href={img} target="_blank" className="item">
                    <img
                      className="tf-image-zoom"
                      src={img}
                      alt="img-product"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="swiper tf-product-media-thumbs other-image-zoom">
          <div className="swiper-wrapper stagger-wrap">
            {gallery?.map((img, i) => (
              <div className="swiper-slide stagger-item" key={i}>
                <div className="item">
                  <img src={img} alt="thumb" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
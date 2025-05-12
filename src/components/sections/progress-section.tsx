'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Info, ChevronDown } from 'lucide-react'

const projectImages = [
  {
    id: 1,
    src: '/images/mb-ch/1pn/1.jpg',
    alt: 'Hình ảnh căn hộ 1PN',
    caption: 'Mặt bằng căn hộ 1PN',
  },
  {
    id: 2,
    src: '/images/mb-ch/2pn/1.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 3,
    src: '/images/mb-ch/2pn/2.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 4,
    src: '/images/mb-ch/2pn/3.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 5,
    src: '/images/mb-ch/2pn/4.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 6,
    src: '/images/mb-ch/2pn/5.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 7,
    src: '/images/mb-ch/2pn/6.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 8,
    src: '/images/mb-ch/2pn/7.jpg',
    alt: 'Hình ảnh căn hộ 2PN',
    caption: 'Mặt bằng căn hộ 2PN',
  },
  {
    id: 9,
    src: '/images/mb-ch/3pn/1.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 10,
    src: '/images/mb-ch/3pn/2.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 11,
    src: '/images/mb-ch/3pn/3.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 12,
    src: '/images/mb-ch/3pn/4.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 13,
    src: '/images/mb-ch/3pn/5.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 14,
    src: '/images/mb-ch/3pn/6.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 15,
    src: '/images/mb-ch/3pn/7.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
  {
    id: 16,
    src: '/images/mb-ch/3pn/8.jpg',
    alt: 'Hình ảnh căn hộ 3PN',
    caption: 'Mặt bằng căn hộ 3PN',
  },
]

const ProgressSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [visibleImages, setVisibleImages] = useState(4)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const openLightbox = useCallback((index: number) => {
    setIsLoading(true)
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'

    projectImages.forEach((img, idx) => {
      if (idx !== index) {
        const preloadImg = document.createElement('img')
        preloadImg.src = img.src
      }
    })
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }, [])

  const navigateImage = useCallback(
    (direction: 'prev' | 'next') => {
      if (selectedImage === null) return
      setIsLoading(true)

      if (direction === 'prev') {
        setSelectedImage((prev) =>
          prev === null || prev === 0 ? projectImages.length - 1 : prev - 1
        )
      } else {
        setSelectedImage((prev) =>
          prev === null || prev === projectImages.length - 1 ? 0 : prev + 1
        )
      }
    },
    [selectedImage]
  )

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      navigateImage('next')
    }

    if (touchStart - touchEnd < -100) {
      navigateImage('prev')
    }
  }

  const loadMoreImages = () => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setVisibleImages(projectImages.length)
      setIsLoadingMore(false)
    }, 500)
  }

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (selectedImage === null) return

      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, closeLightbox, navigateImage])

  const ImageThumbnail = ({ src, alt, index, caption }: any) => (
    <div
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg"
      onClick={() => openLightbox(index)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
      {caption && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 p-2 text-white transition-transform duration-300 group-hover:translate-y-0">
          <p className="flex items-center gap-1 text-sm">
            <Info className="size-4" />
            {caption}
          </p>
        </div>
      )}
    </div>
  )

  return (
    <section
      id="tiến-độ"
      className="bg-gradient-to-b from-white to-emerald-50 py-16 md:py-10"
    >
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Mặt bằng
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Mặt bằng <span className="text-emerald-600">căn hộ</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            Thiết kế căn hộ thông minh - Tối ưu công năng - Tầm nhìn không giới
            hạn
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {projectImages.slice(0, visibleImages).map((image, index) => (
            <ImageThumbnail
              key={image.id}
              src={image.src}
              alt={image.alt}
              index={index}
              caption={image.caption}
            />
          ))}
        </div>

        {visibleImages < projectImages.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMoreImages}
              disabled={isLoadingMore}
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2 text-white transition-all duration-300 hover:bg-emerald-700 disabled:opacity-50"
            >
              {isLoadingMore ? (
                <>
                  <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  <span>Đang tải...</span>
                </>
              ) : (
                <>
                  <span>Xem thêm</span>
                  <ChevronDown className="size-5" />
                </>
              )}
            </button>
          </div>
        )}

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col items-center">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
                  </div>
                )}
                <div className="relative size-full overflow-hidden rounded-lg bg-gray-900">
                  <Image
                    src={projectImages[selectedImage].src || '/placeholder.svg'}
                    alt={projectImages[selectedImage].alt}
                    width={800}
                    height={800}
                    className="mx-auto max-h-[70vh] w-auto object-contain transition-opacity duration-300"
                    onLoad={() => setIsLoading(false)}
                  />
                </div>

                <div className="mt-4 w-full rounded-lg bg-black/50 px-4 py-2 text-center text-white backdrop-blur-sm">
                  <p className="text-lg font-medium">
                    {projectImages[selectedImage].caption}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    {selectedImage + 1} / {projectImages.length}
                  </p>
                </div>
              </div>

              <div className="mt-4 hidden items-center justify-center gap-2 overflow-x-auto pb-2 md:flex">
                {projectImages.map((image, index) => (
                  <div
                    key={`thumb-${image.id}`}
                    className={`relative size-16 cursor-pointer overflow-hidden rounded ${
                      selectedImage === index
                        ? 'ring-2 ring-emerald-500 ring-offset-2'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(index)
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-all duration-300 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white md:p-4"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                aria-label="Hình ảnh trước"
              >
                <ChevronLeft className="size-6 md:size-8" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-all duration-300 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white md:p-4"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                aria-label="Hình ảnh tiếp theo"
              >
                <ChevronRight className="size-6 md:size-8" />
              </button>

              <button
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition-all duration-300 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white md:p-3"
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                aria-label="Đóng"
              >
                <X className="size-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProgressSection

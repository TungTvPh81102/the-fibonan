import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { X } from 'lucide-react'

interface Amenities {
  name: string
  image: string
}

const AmenitiesSection = () => {
  const [selectedImage, setSelectedImage] = useState<Amenities | null>(null)

  const amenities: Amenities[] = [
    {
      name: 'Mặt bằng điển hình nội khu',
      image: '/images/mb-dh/dh-1.jpg',
    },
    {
      name: 'Măt bằng điển hình nội khu',
      image: '/images/mb-dh/dh-2.jpg',
    },
    {
      name: 'Khu vui chơi trẻ em',
      image: '/images/mb-dh/dh-3.jpg',
    },
    {
      name: 'Mặt bằng diện tích nội khu',
      image: '/images/mb-dh/dh-4.jpg',
    },
    {
      name: 'Mặt bằng diện tích nội khu',
      image: '/images/mb-dh/dh-5.jpg',
    },
    {
      name: 'Mặt bằng diện tích',
      image: '/images/mb-dh/dh-6.png',
    },
  ]

  const openModal = (image: Amenities) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="tiện-ích" className="py-16 md:py-10">
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Điển hình
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Mặt bằng điển hình
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            Thiết kế thông minh - Tối ưu công năng - Tầm nhìn không giới hạn
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openModal(item)}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/30 p-2 backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zoom-in"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                        <line x1="11" x2="11" y1="8" y2="14"></line>
                        <line x1="8" x2="14" y1="11" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="h-0 overflow-hidden transition-all duration-300 group-hover:mt-2 group-hover:h-auto">
                      <p className="text-sm text-white/80">
                        Tiện ích đẳng cấp dành cho cư dân THE FIBONAN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="relative max-h-screen max-w-6xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            <div className="relative size-full max-h-[80vh]">
              <Image
                src={selectedImage.image || '/placeholder.svg'}
                alt={selectedImage.name}
                className="rounded-lg object-contain shadow-2xl"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', maxHeight: '80vh' }}
              />
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{selectedImage.name}</h3>
              <p className="mt-2 text-white/80">
                Tiện ích đẳng cấp dành cho cư dân THE FIBONAN
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AmenitiesSection

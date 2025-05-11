import React from 'react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const AmenitiesSection = () => {
  return (
    <section id="tiện-ích" className="py-16 md:py-10">
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Tiện ích
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Tiện ích <span className="text-emerald-600">đẳng cấp 5 sao</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            THE FIBONAN mang đến hệ thống tiện ích đẳng cấp 5 sao, đáp ứng mọi
            nhu cầu của cư dân
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: 'Hồ bơi vô cực',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Phòng gym hiện đại',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Khu vui chơi trẻ em',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Công viên nội khu',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Nhà hàng cao cấp',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Spa & Massage',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Phòng sinh hoạt cộng đồng',
              image: '/placeholder.svg?height=300&width=400',
            },
            {
              name: 'Bảo vệ 24/7',
              image: '/placeholder.svg?height=300&width=400',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="h-0 overflow-hidden transition-all duration-300 group-hover:mt-2 group-hover:h-auto">
                    <p className="text-sm text-white/80">
                      Tiện ích đẳng cấp dành cho cư dân Green Residence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection

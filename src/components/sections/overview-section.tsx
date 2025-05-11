import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const OverviewSection = () => {
  return (
    <section
      id="tổng-quan"
      className="md:py-22 bg-gradient-to-b from-white to-emerald-50 py-16"
    >
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Tổng quan
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Kiệt tác kiến trúc{' '}
            <span className="text-emerald-600">xanh bền vững</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <p className="leading-relaxed text-gray-700">
              <span className="text-xl font-bold">The Fibonan</span> là dự án
              chung cư chung cư cao cấp được phát triển trong lòng thành phố
              triệu cây xanh Ecopark. Sở hữu vị trí đắc địa bên bờ sông Bắc Hưng
              Hải, ngay sát khu biệt thự vườn Mai, lại được bao quanh bởi bộ 3
              công viên Mùa Xuân, công viên Mùa Thu và công viên Mùa Hạ, có thể
              nói The Fibonan là dự án chung cư sở hữu tầm view Panorama hoàn
              hảo, cùng môi trường sống sinh thái và trong lành hiếm có cho cư
              dân.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <h4 className="mb-1 font-semibold text-emerald-600">
                  Chủ đầu tư
                </h4>
                <p className="font-medium">
                  Công ty TNHH đầu tư phát triển An Phú
                </p>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <h4 className="mb-1 font-semibold text-emerald-600">Quy mô</h4>
                <p className="font-medium">20.992m2</p>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <h4 className="mb-1 font-semibold text-emerald-600">
                  Số căn hộ
                </h4>
                <p className="font-medium">656 căn</p>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <h4 className="mb-1 font-semibold text-emerald-600">
                  Mật độ xây dựng
                </h4>
                <p className="font-medium">33%</p>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                'Thiết kế theo tiêu chuẩn công trình xanh EDGE',
                'Hệ thống điều hòa không khí trung tâm tiết kiệm năng lượng',
                'Vật liệu xây dựng thân thiện với môi trường',
                'Hệ thống thu gom và tái sử dụng nước mưa',
                'Tường kính hai lớp cách nhiệt, cách âm cao cấp',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-md hover:from-emerald-700 hover:to-emerald-600">
              Tải brochure dự án
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/DXM00007.jpg"
                alt="The Fibonan"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 size-32 rounded-2xl bg-emerald-500"></div>
            <div className="absolute -right-6 -top-6 -z-10 size-32 rounded-2xl bg-emerald-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSection

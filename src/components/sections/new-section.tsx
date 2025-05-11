import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const NewSection = () => {
  return (
    <section id="tin-tức" className="py-16 md:py-10">
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Tin tức
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Tin tức & <span className="text-emerald-600">Sự kiện</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            Cập nhật những tin tức mới nhất về dự án Green Residence và thị
            trường bất động sản
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Lễ cất nóc dự án THE FIBONAN thành công tốt đẹp',
              date: '15/04/2024',
              excerpt:
                'Dự án THE FIBONAN đã tổ chức lễ cất nóc thành công, đánh dấu một cột mốc quan trọng trong tiến độ xây dựng...',
            },
            {
              title:
                'THE FIBONAN nhận giải thưởng Công trình xanh tiêu biểu 2024',
              date: '02/03/2024',
              excerpt:
                'Dự án THE FIBONAN vinh dự nhận giải thưởng Công trình xanh tiêu biểu năm 2024 do Hội Kiến trúc sư Việt Nam trao tặng...',
            },
            {
              title: 'Mở bán đợt cuối các căn hộ đẹp nhất dự án THE FIBONAN',
              date: '20/02/2024',
              excerpt:
                'THE FIBONAN chính thức mở bán đợt cuối với những căn hộ có vị trí đẹp nhất dự án, hứa hẹn mang đến cơ hội đầu tư hấp dẫn...',
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="https://res.cloudinary.com/dvrexlsgx/image/upload/v1746986649/9A_ppx2ft.png"
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <div className="mb-3">
                  <Badge
                    variant="outline"
                    className="border-emerald-200 bg-emerald-50 text-emerald-700"
                  >
                    {item.date}
                  </Badge>
                </div>
                <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-gray-600">
                  {item.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  Đọc thêm
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            Xem tất cả tin tức
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewSection

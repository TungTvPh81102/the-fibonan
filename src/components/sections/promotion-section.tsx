import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Clock, Home as HomeIcon, Shield, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const PromotionSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-600 py-16 text-white md:py-24">
      <div className="absolute left-0 top-0 size-full overflow-hidden opacity-20">
        <div className="absolute left-10 top-10 size-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-10 right-10 size-60 rounded-full bg-white/10"></div>
        <div className="absolute right-1/4 top-1/3 size-20 rounded-full bg-white/10"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              Ưu đãi đặc biệt
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">
              Chính sách ưu đãi <br />
              chưa từng có
            </h2>
            <p className="text-white/80">
              Chỉ trong tháng này, THE FIBONAN mang đến cho khách hàng những ưu
              đãi đặc biệt khi mua căn hộ.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Chiết khấu thanh toán sớm',
                  description:
                    'Chiết khấu lên đến 8% khi thanh toán sớm 95% giá trị căn hộ',
                  icon: <Sparkles className="size-6 text-amber-300" />,
                },
                {
                  title: 'Hỗ trợ lãi suất 0%',
                  description: 'Hỗ trợ lãi suất 0% trong 24 tháng đầu tiên',
                  icon: <Zap className="size-6 text-amber-300" />,
                },
                {
                  title: 'Quà tặng nội thất',
                  description:
                    'Tặng gói nội thất cao cấp trị giá 200 triệu đồng',
                  icon: <HomeIcon className="size-6 text-amber-300" />,
                },
                {
                  title: 'Miễn phí quản lý 2 năm',
                  description: 'Miễn phí dịch vụ quản lý trong 2 năm đầu tiên',
                  icon: <Shield className="size-6 text-amber-300" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="mb-1 font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <Clock className="size-5 shrink-0 text-amber-300" />
              <p className="text-sm">
                Thời gian áp dụng:{' '}
                <span className="font-semibold">01/05/2024 - 31/05/2024</span>
              </p>
            </div>

            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-white/90"
            >
              Nhận tư vấn ngay
            </Button>
          </div>

          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/sale.jpg"
                alt="Promotion"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -left-6 -top-6 -z-10 size-32 rounded-xl bg-emerald-300/30 backdrop-blur-md"></div>
            <div className="absolute -bottom-6 -right-6 -z-10 size-32 rounded-xl bg-emerald-300/30 backdrop-blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionSection

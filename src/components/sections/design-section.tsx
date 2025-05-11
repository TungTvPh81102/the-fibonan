import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const DesignSection = () => {
  return (
    <section
      id="thiết-kế"
      className="bg-gradient-to-b from-white to-emerald-50 py-16 md:py-10"
    >
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Thiết kế
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Thiết kế <span className="text-emerald-600">thông minh</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            Thiết kế thông minh, tối ưu công năng sử dụng với các loại căn hộ đa
            dạng từ 1-3 phòng ngủ
          </p>
        </div>

        <Tabs defaultValue="type1" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3 bg-emerald-50 p-1">
            <TabsTrigger
              value="type1"
              className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
            >
              Căn hộ 1A
            </TabsTrigger>
            <TabsTrigger
              value="type2"
              className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
            >
              Căn hộ 2A
            </TabsTrigger>
            <TabsTrigger
              value="type3"
              className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
            >
              Căn hộ 3A
            </TabsTrigger>
          </TabsList>

          <TabsContent value="type1">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="relative">
                <div className="relative h-[400px] overflow-hidden rounded-xl border-8 border-white shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dvrexlsgx/image/upload/v1746986593/1a_zp0td4.png"
                    alt="Floor Plan 1PN"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 size-24 rounded-xl bg-emerald-100"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-700">
                  Căn hộ 1 Phòng ngủ
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Diện tích</p>
                    <p className="text-xl font-bold">50 - 55m²</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Phòng ngủ</p>
                    <p className="text-xl font-bold">1 PN</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Phòng tắm</p>
                    <p className="text-xl font-bold">1 WC</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Ban công</p>
                    <p className="text-xl font-bold">Có</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Căn hộ 1 phòng ngủ được thiết kế thông minh, tối ưu công năng
                  sử dụng, phù hợp với các cặp vợ chồng trẻ hoặc người độc thân.
                  Không gian mở tạo cảm giác rộng rãi, thoáng đãng.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Phòng khách',
                    'Phòng ngủ',
                    'Nhà bếp',
                    'Phòng tắm',
                    'Ban công',
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-emerald-200 bg-emerald-50"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="type2">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="relative">
                <div className="relative h-[400px] overflow-hidden rounded-xl border-8 border-white shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dvrexlsgx/image/upload/v1746986593/2a_lb6bo6.png"
                    alt="Floor Plan 2PN"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 size-24 rounded-xl bg-emerald-100"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-700">
                  Căn hộ 2 Phòng ngủ
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Diện tích</p>
                    <p className="text-xl font-bold">70 - 80m²</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Phòng ngủ</p>
                    <p className="text-xl font-bold">2 PN</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Phòng tắm</p>
                    <p className="text-xl font-bold">2 WC</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Ban công</p>
                    <p className="text-xl font-bold">Có</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Căn hộ 2 phòng ngủ với không gian rộng rãi, thiết kế hợp lý,
                  phù hợp với gia đình có 3-4 thành viên. Phòng khách và bếp
                  được thiết kế liên thông, tạo không gian sinh hoạt chung rộng
                  rãi.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Phòng khách',
                    '2 Phòng ngủ',
                    'Nhà bếp',
                    '2 Phòng tắm',
                    'Ban công',
                    'Phòng giặt',
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-emerald-200 bg-emerald-50"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="type3">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="relative">
                <div className="relative h-[400px] overflow-hidden rounded-xl border-8 border-white shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dvrexlsgx/image/upload/v1746986594/3A_e8pee0.png"
                    alt="Floor Plan 3PN"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 size-24 rounded-xl bg-emerald-100"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-700">
                  Căn hộ 3 Phòng ngủ
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Diện tích</p>
                    <p className="text-xl font-bold">100 - 120m²</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Phòng ngủ</p>
                    <p className="text-xl font-bold">3 PN</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Phòng tắm</p>
                    <p className="text-xl font-bold">2 WC</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Ban công</p>
                    <p className="text-xl font-bold">Có</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Căn hộ 3 phòng ngủ với không gian rộng rãi, sang trọng, phù
                  hợp với gia đình đa thế hệ hoặc gia đình có nhiều thành viên.
                  Thiết kế thông minh giúp tối ưu hóa không gian sống.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Phòng khách',
                    '3 Phòng ngủ',
                    'Nhà bếp',
                    '2 Phòng tắm',
                    'Ban công',
                    'Phòng giặt',
                    'Phòng đa năng',
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-emerald-200 bg-emerald-50"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default DesignSection

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { ArrowRight, Square, Bed, Bath } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { apartmentData } from '@/data/apartment-data'

// Define interfaces for proper typing
interface Apartment {
  title: string
  type: string
  area: string
  image: string
}

interface ApartmentDetails extends Apartment {
  price: string
  bedrooms: number
  bathrooms: number
  description: string
  features: string[]
}

const ApartmentSection = () => {
  const [selectedApartment, setSelectedApartment] =
    useState<ApartmentDetails | null>(null)

  const getApartmentDetails = (apartment: Apartment): ApartmentDetails => {
    return {
      ...apartment,
      price:
        apartment.type === 'Sky Villa'
          ? '12.5 - 15.8 tỷ'
          : apartment.type === 'Penthouse'
            ? '9.8 - 12.2 tỷ'
            : apartment.type === 'Căn hộ hạng sang'
              ? '7.5 - 9.2 tỷ'
              : '3.8 - 6.5 tỷ',
      bedrooms: apartment.area.includes('180')
        ? 4
        : apartment.area.includes('150')
          ? 3
          : apartment.area.includes('110')
            ? 3
            : apartment.area.includes('95')
              ? 3
              : apartment.area.includes('85')
                ? 2
                : apartment.area.includes('75')
                  ? 2
                  : apartment.area.includes('50')
                    ? 1
                    : 1,
      bathrooms: apartment.area.includes('180')
        ? 3
        : apartment.area.includes('150')
          ? 3
          : apartment.area.includes('110')
            ? 2
            : apartment.area.includes('95')
              ? 2
              : apartment.area.includes('85')
                ? 2
                : apartment.area.includes('75')
                  ? 2
                  : apartment.area.includes('50')
                    ? 1
                    : 1,
      description: `${apartment.title} ${apartment.type} là lựa chọn tuyệt vời cho không gian sống hiện đại. Với diện tích ${apartment.area}, căn hộ được thiết kế tối ưu mang đến không gian sống sang trọng và tiện nghi.`,
      features: [
        'Ban công rộng',
        'Tầm nhìn panorama',
        'Nội thất cao cấp',
        'Hệ thống an ninh 24/7',
        'Thiết kế thông minh',
      ],
    }
  }

  const handleOpenDialog = (apartment: Apartment) => {
    setSelectedApartment(getApartmentDetails(apartment))
  }

  return (
    <section id="căn-hộ" className="py-16 md:py-10">
      <div className="container">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Căn hộ
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Căn hộ <span className="text-emerald-600">nổi bật</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-3xl text-center text-gray-700">
            Khám phá các căn hộ đẳng cấp với thiết kế hiện đại, tiện nghi và
            không gian sống lý tưởng
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {apartmentData.map((apartment: Apartment, index: number) => (
              <CarouselItem
                key={index}
                className="p-2 md:basis-1/2 lg:basis-1/3"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card
                      className="h-full cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                      onClick={() => handleOpenDialog(apartment)}
                    >
                      <div className="relative h-48 sm:h-60 md:h-72 lg:h-[500px]">
                        <Image
                          src={apartment.image}
                          alt={apartment.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <Badge className="absolute left-3 top-3 bg-emerald-600">
                          {apartment.type}
                        </Badge>
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="text-xl font-semibold">
                            {apartment.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <Square className="mr-1 size-4 text-emerald-600" />
                            <span className="text-sm">{apartment.area}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-emerald-600 hover:bg-transparent hover:text-emerald-700"
                          >
                            Chi tiết
                            <ArrowRight className="ml-1 size-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  {selectedApartment &&
                    selectedApartment.title === apartment.title && (
                      <DialogContent className="mx-auto w-11/12 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
                        <DialogHeader>
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                            <DialogTitle className="text-xl sm:text-2xl">
                              {selectedApartment.title}
                            </DialogTitle>
                            <Badge className="w-fit bg-emerald-600">
                              {selectedApartment.type}
                            </Badge>
                          </div>
                          <DialogDescription className="font-medium text-emerald-600">
                            Giá từ: {selectedApartment.price}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                            <div className="flex flex-col items-center justify-center rounded-lg bg-emerald-50 p-3 sm:p-4">
                              <Square className="mb-1 size-5 text-emerald-600 sm:mb-2 sm:size-6" />
                              <span className="text-sm font-medium sm:text-base">
                                Diện tích
                              </span>
                              <span className="text-base font-semibold text-emerald-600 sm:text-lg">
                                {selectedApartment.area}
                              </span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-emerald-50 p-3 sm:p-4">
                              <Bed className="mb-1 size-5 text-emerald-600 sm:mb-2 sm:size-6" />
                              <span className="text-sm font-medium sm:text-base">
                                Phòng ngủ
                              </span>
                              <span className="text-base font-semibold text-emerald-600 sm:text-lg">
                                {selectedApartment.bedrooms}
                              </span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg bg-emerald-50 p-3 sm:p-4">
                              <Bath className="mb-1 size-5 text-emerald-600 sm:mb-2 sm:size-6" />
                              <span className="text-sm font-medium sm:text-base">
                                Phòng tắm
                              </span>
                              <span className="text-base font-semibold text-emerald-600 sm:text-lg">
                                {selectedApartment.bathrooms}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 sm:mt-6">
                            <h4 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg">
                              Mô tả
                            </h4>
                            <p className="text-sm text-gray-700 sm:text-base">
                              {selectedApartment.description}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-6">
                            <h4 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg">
                              Tiện ích
                            </h4>
                            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2">
                              {selectedApartment.features.map(
                                (feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center text-sm sm:text-base"
                                  >
                                    <div className="mr-2 size-2 rounded-full bg-emerald-500"></div>
                                    {feature}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div className="mt-6 flex justify-center">
                            <Button className="bg-emerald-600 text-sm hover:bg-emerald-700 sm:text-base">
                              Đặt lịch xem căn hộ
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center">
            <CarouselPrevious className="static mr-2 translate-y-0" />
            <CarouselNext className="static ml-2 translate-y-0" />
          </div>
        </Carousel>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            Xem tất cả căn hộ
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ApartmentSection

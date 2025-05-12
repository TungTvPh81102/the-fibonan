'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  ChevronLeft,
  ChevronRight,
  FastForwardIcon,
  Play,
  PlayIcon,
  RewindIcon,
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const projectsData = [
  {
    id: 1,
    name: 'The Fibonan',
    tagline: 'Sống xanh, Sống đẳng cấp',
    description:
      'Khu căn hộ cao cấp The Fibonan - Nơi thiên nhiên hòa quyện với kiến trúc hiện đại, mang đến không gian sống lý tưởng.',
    badge: 'Dự án cao cấp 2025',
    image: '/images/image-feature.jpg',
    features: [
      { label: 'Diện tích', value: '50-120m²' },
      { label: 'Phòng ngủ', value: '1-3 PN' },
      { label: 'Bàn giao', value: 'Q4/2024' },
      { label: 'Giá từ', value: '2.5 tỷ' },
    ],
    promotions: [
      {
        type: 'Ưu đãi',
        description: 'Chiết khấu lên đến 8%',
        color: 'bg-emerald-500',
      },
      {
        type: 'Quà tặng',
        description: 'Gói nội thất 200 triệu',
        color: 'bg-amber-500',
      },
    ],
  },
  {
    id: 2,
    name: 'Green Valley',
    tagline: 'Thiên đường xanh giữa lòng phố thị',
    description:
      'Tổ hợp căn hộ sinh thái Green Valley - Không gian sống xanh với tiện ích đẳng cấp 5 sao, mang đến cuộc sống viên mãn.',
    badge: 'Dự án sinh thái 2025',
    image: '/images/image-feature.jpg',
    features: [
      { label: 'Diện tích', value: '60-150m²' },
      { label: 'Phòng ngủ', value: '2-4 PN' },
      { label: 'Bàn giao', value: 'Q2/2025' },
      { label: 'Giá từ', value: '3.2 tỷ' },
    ],
    promotions: [
      {
        type: 'Ưu đãi',
        description: 'Lãi suất 0% trong 24 tháng',
        color: 'bg-emerald-500',
      },
      {
        type: 'Quà tặng',
        description: 'Voucher nội thất 300 triệu',
        color: 'bg-amber-500',
      },
    ],
  },
  {
    id: 3,
    name: 'Sky Garden',
    tagline: 'Chạm tới bầu trời, gần gũi thiên nhiên',
    description:
      'Khu phức hợp Sky Garden - Nơi mỗi căn hộ là một khu vườn trên cao, mang đến trải nghiệm sống độc đáo giữa lòng thành phố.',
    badge: 'Dự án độc đáo 2025',
    image: '/images/image-feature.jpg',
    features: [
      { label: 'Diện tích', value: '70-200m²' },
      { label: 'Phòng ngủ', value: '2-5 PN' },
      { label: 'Bàn giao', value: 'Q3/2025' },
      { label: 'Giá từ', value: '4.5 tỷ' },
    ],
    promotions: [
      {
        type: 'Ưu đãi',
        description: 'Chiết khấu 10% khi thanh toán sớm',
        color: 'bg-emerald-500',
      },
      {
        type: 'Quà tặng',
        description: 'Gói smart home cao cấp',
        color: 'bg-amber-500',
      },
    ],
  },
  {
    id: 4,
    name: 'Riverside Residence',
    tagline: 'Cuộc sống thịnh vượng bên dòng sông',
    description:
      'Khu đô thị ven sông Riverside Residence - Tận hưởng không gian sống đẳng cấp với tầm nhìn panorama ra dòng sông thơ mộng.',
    badge: 'Dự án ven sông 2025',
    image: '/images/image-feature.jpg',
    features: [
      { label: 'Diện tích', value: '80-250m²' },
      { label: 'Phòng ngủ', value: '2-5 PN' },
      { label: 'Bàn giao', value: 'Q1/2025' },
      { label: 'Giá từ', value: '5.8 tỷ' },
    ],
    promotions: [
      {
        type: 'Ưu đãi',
        description: 'Miễn phí 3 năm phí quản lý',
        color: 'bg-emerald-500',
      },
      {
        type: 'Quà tặng',
        description: 'Xe Mercedes C-Class',
        color: 'bg-amber-500',
      },
    ],
  },
]

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === projectsData.length - 1 ? 0 : current + 1
    )
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? projectsData.length - 1 : current - 1
    )
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoplay, nextSlide])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoplay(false)
  }

  const currentProject = projectsData[activeIndex]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="absolute left-0 top-0 size-full overflow-hidden opacity-20">
        <div className="absolute left-10 top-10 size-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-10 right-10 size-60 rounded-full bg-white/10"></div>
        <div className="absolute right-1/4 top-1/3 size-20 rounded-full bg-white/10"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Dự án nổi bật</h2>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              onClick={prevSlide}
            >
              <ChevronLeft className="size-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              onClick={nextSlide}
            >
              <ChevronRight className="size-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <Badge className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
              {currentProject.badge}
            </Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {currentProject.name} <br />
              <span className="text-emerald-300">{currentProject.tagline}</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/80 md:text-xl lg:mx-0">
              {currentProject.description}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-white/90"
              >
                Xem căn hộ mẫu
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-white text-black hover:bg-white/20"
                  >
                    <Play className="size-4 fill-current" />
                    Xem video
                  </Button>
                </DialogTrigger>
                <DialogContent className="overflow-hidden bg-black p-0 sm:max-w-[800px]">
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-xl">
                      <video className="aspect-video w-full" controls>
                        <source src="/videos/video1.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 items-center gap-4">
                        <Button variant="ghost" size="icon">
                          <PlayIcon className="size-4" />
                          <span className="sr-only">Play</span>
                        </Button>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="icon">
                            <RewindIcon className="size-4" />
                            <span className="sr-only">Rewind</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FastForwardIcon className="size-4" />
                            <span className="sr-only">Fast forward</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
              {currentProject.features.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/20 bg-white/10 p-3 text-center backdrop-blur-sm"
                >
                  <p className="text-xs text-white/70">{item.label}</p>
                  <p className="text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-2xl md:h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent"></div>
            <Image
              src={currentProject.image || '/placeholder.svg'}
              alt={`${currentProject.name} Building`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 p-6">
              <div className="flex flex-col gap-2">
                {currentProject.promotions.map((promo, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge className={promo.color}>{promo.type}</Badge>
                    <span className="text-sm text-white">
                      {promo.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                'h-2 w-8 rounded-full transition-all',
                index === activeIndex
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

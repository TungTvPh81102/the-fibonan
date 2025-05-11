'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { FastForwardIcon, Play, PlayIcon, RewindIcon } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white">
      <div className="absolute left-0 top-0 size-full overflow-hidden opacity-20">
        <div className="absolute left-10 top-10 size-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-10 right-10 size-60 rounded-full bg-white/10"></div>
        <div className="absolute right-1/4 top-1/3 size-20 rounded-full bg-white/10"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <Badge className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
              Dự án cao cấp 2025
            </Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Sống xanh <br />
              <span className="text-emerald-300">Sống đẳng cấp</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/80 md:text-xl lg:mx-0">
              Khu căn hộ cao cấp The Fibonan - Nơi thiên nhiên hòa quyện với
              kiến trúc hiện đại, mang đến không gian sống lý tưởng.
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
              {[
                { label: 'Diện tích', value: '50-120m²' },
                { label: 'Phòng ngủ', value: '1-3 PN' },
                { label: 'Bàn giao', value: 'Q4/2024' },
                { label: 'Giá từ', value: '2.5 tỷ' },
              ].map((item, index) => (
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
              src="/images/image-feature.jpg"
              alt="Green Residence Building"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-500">Ưu đãi</Badge>
                  <span className="text-sm text-white">
                    Chiết khấu lên đến 8%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-500">Quà tặng</Badge>
                  <span className="text-sm text-white">
                    Gói nội thất 200 triệu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

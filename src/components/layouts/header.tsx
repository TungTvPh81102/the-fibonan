'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Phone, Mail, Menu } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'TỔNG QUAN', href: '#tổng-quan' },
    { name: 'VỊ TRÍ', href: '#vị-trí' },
    { name: 'THIẾT KẾ', href: '#thiết-kế' },
    { name: 'CĂN HỘ', href: '#căn-hộ' },
    { name: 'TIỆN ÍCH', href: '#tiện-ích' },
    { name: 'TIẾN ĐỘ', href: '#tiến-độ' },
    { name: 'TIN TỨC', href: '#tin-tức' },
    { name: 'LIÊN HỆ', href: '#liên-hệ' },
  ]

  return (
    <>
      <div className="hidden bg-gradient-to-r from-emerald-800 to-emerald-600 py-2 text-white md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span className="text-sm">Hotline: 0123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span className="text-sm">Email: info@thefibonan.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="link" className="h-auto p-0 text-sm text-white">
              Đăng nhập
            </Button>
            <span className="text-white/50">|</span>
            <Button variant="link" className="h-auto p-0 text-sm text-white">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md'
            : 'bg-transparent md:bg-white/80 md:backdrop-blur-sm'
        )}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link href="/">
            <Image width="120" height="120" src="/images/logo.png" alt="" />
          </Link>

          <nav className="hidden gap-1 md:flex lg:gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md p-2 text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-600 lg:px-3"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="flex h-full flex-col">
                  <Link className="border-b pl-4" href="/">
                    <Image
                      width="100"
                      height="100"
                      src="/images/logo.png"
                      alt=""
                    />
                  </Link>
                  <ScrollArea className="flex-1">
                    <div className="space-y-1 p-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center rounded-md px-4 py-3 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="border-t p-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Phone className="size-4 text-emerald-600" />
                        <span className="text-sm">Hotline: 0123 456 789</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="size-4 text-emerald-600" />
                        <span className="text-sm">
                          Email: info@thefibonan.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button className="hidden bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-md hover:from-emerald-700 hover:to-emerald-600 md:flex">
            Liên hệ ngay
          </Button>
        </div>
      </header>
    </>
  )
}

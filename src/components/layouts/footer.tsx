import Link from 'next/link'
import Image from 'next/image'
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-emerald-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <Link href="/">
            <Image
              width="150"
              height="150"
              src="/images/logo.png"
              alt="THE FIBONAN"
              className="mb-4"
            />
          </Link>
          <p className="max-w-2xl text-white/80">
            Dự án căn hộ cao cấp THE FIBONAN - Nơi cuộc sống thăng hoa với không
            gian sống xanh, đẳng cấp và tiện nghi hiện đại.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Facebook className="size-5" />
            </Link>
            <Link
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Youtube className="size-5" />
            </Link>
            <Link
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Instagram className="size-5" />
            </Link>
            <Link
              href="#"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Liên kết nhanh</h3>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Tổng quan', href: '#tổng-quan' },
                  { name: 'Vị trí', href: '#vị-trí' },
                  { name: 'Thiết kế', href: '#thiết-kế' },
                  { name: 'Căn hộ', href: '#căn-hộ' },
                  { name: 'Tiện ích', href: '#tiện-ích' },
                  { name: 'Tiến độ', href: '#tiến-độ' },
                  { name: 'Tin tức', href: '#tin-tức' },
                  { name: 'Liên hệ', href: '#liên-hệ' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-white/80 hover:text-white"
                    >
                      <ChevronRight className="size-4" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Chính sách</h3>
              <ul className="space-y-2">
                {[
                  'Chính sách bán hàng',
                  'Chính sách bảo mật',
                  'Điều khoản sử dụng',
                  'Câu hỏi thường gặp',
                  'Hỗ trợ khách hàng',
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-1 text-white/80 hover:text-white"
                    >
                      <ChevronRight className="size-4" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Đăng ký nhận tin</h3>
              <p className="mb-4 text-white/80">
                Đăng ký để nhận thông tin mới nhất về dự án và ưu đãi đặc biệt.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  className="border-white/30 bg-white/20"
                />
                <Button className="whitespace-nowrap bg-white text-emerald-700 hover:bg-white/90">
                  Gửi
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-white/80">
          <p>
            © {new Date().getFullYear()} THE FIBONAN. Tất cả quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}

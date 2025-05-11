import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CardContent, CardHeader } from '@/components/ui/card'
import {
  Building2,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactSection = () => {
  return (
    <section id="liên-hệ" className="bg-gray-50 py-16 md:py-10">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            Liên hệ
          </Badge>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Liên hệ <span className="text-emerald-600">với chúng tôi</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-emerald-500"></div>
          <p className="mt-6 max-w-2xl text-center text-gray-700">
            Hãy liên hệ với chúng tôi để được tư vấn chi tiết về dự án Green
            Residence
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="h-full rounded-lg shadow-md">
              <CardHeader className="bg-emerald-50 pb-2 pt-6">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Thông tin liên hệ
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100">
                      <Building2 className="size-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">Văn phòng dự án</p>
                      <p className="text-gray-700">
                        Phố Cúc, KĐT Ecopark, Văn Giang, Hưng Yên
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100">
                      <Phone className="size-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">Hotline</p>
                      <p className="text-gray-700">0901 234 567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100">
                      <Mail className="size-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-700">info@thefibonan.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100">
                      <Clock className="size-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium">Giờ làm việc</p>
                      <p className="text-gray-700">
                        Thứ 2 - Thứ 7: 8:00 - 18:00
                      </p>
                      <p className="text-gray-700">Chủ nhật: 8:00 - 12:00</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="mb-4 font-medium text-emerald-700">
                    Kết nối với chúng tôi
                  </h4>
                  <div className="flex gap-3">
                    <Link
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors hover:bg-emerald-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="size-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors hover:bg-emerald-200"
                      aria-label="Youtube"
                    >
                      <Youtube className="size-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors hover:bg-emerald-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </Link>
                    <Link
                      href="#"
                      className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors hover:bg-emerald-200"
                      aria-label="Zalo"
                    >
                      <MessageCircle className="size-5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="h-full rounded-lg shadow-md">
              <CardHeader className="bg-emerald-50 pb-2 pt-6">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Gửi yêu cầu tư vấn
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullname"
                        className="mb-1 block text-sm font-medium"
                      >
                        Họ và tên
                      </label>
                      <Input
                        id="fullname"
                        type="text"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Nhập email" />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium"
                      >
                        Số điện thoại
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="needs"
                        className="mb-1 block text-sm font-medium"
                      >
                        Nhu cầu
                      </label>
                      <Select>
                        <SelectTrigger id="needs">
                          <SelectValue placeholder="Chọn nhu cầu" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buy">Mua căn hộ</SelectItem>
                          <SelectItem value="invest">Đầu tư</SelectItem>
                          <SelectItem value="visit">
                            Tham quan căn hộ mẫu
                          </SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium"
                    >
                      Nội dung yêu cầu
                    </label>
                    <Textarea
                      id="message"
                      className="min-h-32"
                      placeholder="Nhập nội dung yêu cầu của bạn..."
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 sm:w-auto"
                    >
                      Gửi yêu cầu
                    </Button>
                  </div>
                </form>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'THE FIBONAN - Căn hộ cao cấp xanh giữa lòng thành phố',
  description:
    'THE FIBONAN - Dự án chung cư cao cấp hiện đại, tích hợp không gian sống xanh, tiện ích đẳng cấp và vị trí trung tâm. Lựa chọn hoàn hảo cho cuộc sống bền vững và thịnh vượng.',
  keywords: [
    'căn hộ cao cấp',
    'dự án chung cư cao cấp',
    'căn hộ xanh',
    'dự án bất động sản',
    'chung cư cao cấp tại Hà Nội',
    'không gian sống xanh',
    'căn hộ thông minh',
    'đầu tư bất động sản',
    'THE FIBONAN',
    'chung cư FIBONAN',
  ],
  openGraph: {
    title: 'THE FIBONAN - Căn hộ cao cấp xanh giữa lòng thành phố',
    description:
      'Khám phá THE FIBONAN - Dự án căn hộ cao cấp với thiết kế hiện đại, không gian sống xanh, đầy đủ tiện ích và kết nối thuận tiện. Sống đẳng cấp, sống FIBONAN.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'THE FIBONAN - Căn hộ cao cấp xanh giữa lòng thành phố',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE FIBONAN - Căn hộ cao cấp xanh giữa lòng thành phố',
    description:
      'THE FIBONAN mang đến giải pháp sống hiện đại, tiện nghi và gần gũi với thiên nhiên. Không gian sống lý tưởng cho gia đình bạn.',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-quicksand antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

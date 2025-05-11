import React, { ReactNode } from 'react'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

interface LayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react'
import RootLayout from '@/components/layouts/root-layout'
import HeroSection from '@/components/sections/hero-section'
import OverviewSection from '@/components/sections/overview-section'
import LocationSection from '@/components/sections/location-section'
import DesignSection from '@/components/sections/design-section'
import ApartmentSection from '@/components/sections/apartment-section'
import PromotionSection from '@/components/sections/promotion-section'
import NewSection from '@/components/sections/new-section'
import CtaSection from '@/components/sections/cta-section'
import ContactSection from '@/components/sections/contact-section'
import ProgressSection from '@/components/sections/progress-section'
import AmenitiesSection from '@/components/sections/amenities-section'

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <RootLayout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <HeroSection />

          <OverviewSection />

          <LocationSection />

          <DesignSection />

          <ApartmentSection />

          <PromotionSection />

          <AmenitiesSection />

          <ProgressSection />

          <NewSection />

          <CtaSection />

          <ContactSection />
        </main>

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <Link
            href="tel:0901234567"
            className="flex size-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-colors hover:bg-emerald-700"
          >
            <Phone className="size-5" />
          </Link>
          <Link
            href="#"
            className="flex size-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-colors hover:bg-emerald-700"
          >
            <Mail className="size-5" />
          </Link>
          <Link
            href="#"
            className="flex size-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="size-5" />
          </Link>
        </div>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 flex size-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-colors hover:bg-emerald-700"
          >
            <ArrowUp className="size-5" />
          </button>
        )}
      </div>
    </RootLayout>
  )
}

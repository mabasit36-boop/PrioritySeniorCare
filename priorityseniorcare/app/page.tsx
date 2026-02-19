'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutSection from '@/components/AboutSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Priority Senior Care LLC - Home Care, Transportation & Tech Training in Elgin',
  description: 'Professional senior care services in Elgin and surrounding areas. Offering home care, transportation services, and technical training for seniors.',
  keywords: 'senior care, home care, elderly transportation, tech training for seniors, Elgin senior services, assisted living, caregiver services',
  authors: [{ name: 'Priority Senior Care LLC' }],
  openGraph: {
    title: 'Priority Senior Care LLC - Compassionate Care for Seniors',
    description: 'Professional senior care services in Elgin and surrounding areas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

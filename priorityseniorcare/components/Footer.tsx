'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Home Care', href: '#services' },
      { label: 'Transportation', href: '#services' },
      { label: 'Tech Training', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Service Areas', href: '#areas' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Accessibility', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PSC</span>
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg">
                  Priority Senior Care
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Providing compassionate, professional care services to seniors in Elgin 
              and surrounding communities since 2020.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <FaPhone className="text-primary-600" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@priorityseniorcare.com" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <FaEnvelope className="text-primary-600" />
                <span>info@priorityseniorcare.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                <span>Elgin, IL 60123</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates and senior care tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Priority Senior Care LLC. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Priority Senior Care is a licensed and insured senior care provider serving Elgin and surrounding communities.
              <br />
              Available 24/7 for your care needs. Emergency? Call 911 or our hotline at (123) 456-7890.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

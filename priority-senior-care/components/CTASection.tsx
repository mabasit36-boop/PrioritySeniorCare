'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Ready to Get Started?
            </span>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Let's Discuss How We Can Help Your Family
            </h2>
            
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
              Schedule a free, no-obligation consultation to learn more about our services 
              and how we can create a personalized care plan for your loved one.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FaCalendarAlt />
                <span>Schedule Consultation</span>
              </a>
              
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg border-2 border-white hover:bg-primary-800 transition-all duration-300"
              >
                <FaPhone />
                <span>Call Now: (123) 456-7890</span>
              </a>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <FaPhone className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-primary-100 text-sm mb-3">
                  Speak with our care coordinators
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-white font-semibold hover:text-primary-200 transition-colors"
                >
                  (123) 456-7890
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <FaEnvelope className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-primary-100 text-sm mb-3">
                  Get a response within 24 hours
                </p>
                <a
                  href="mailto:info@priorityseniorcare.com"
                  className="text-white font-semibold hover:text-primary-200 transition-colors break-all"
                >
                  info@priorityseniorcare.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <FaCalendarAlt className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Schedule Online</h3>
                <p className="text-primary-100 text-sm mb-3">
                  Book a consultation instantly
                </p>
                <a
                  href="#contact"
                  className="text-white font-semibold hover:text-primary-200 transition-colors"
                >
                  Fill Out Form Below
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}

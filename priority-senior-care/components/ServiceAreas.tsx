'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function ServiceAreas() {
  const areas = [
    'Elgin',
    'South Elgin',
    'Bartlett',
    'Streamwood',
    'Hanover Park',
    'Hoffman Estates',
    'Schaumburg',
    'Carol Stream',
    'West Dundee',
    'Carpentersville',
    'Algonquin',
    'St. Charles'
  ]

  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Service Areas
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            Proudly Serving Elgin & Surrounding Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring professional senior care services to your doorstep across the greater Elgin area.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Placeholder - Replace with actual embedded map */}
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <FaMapMarkerAlt className="text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Service Area Map</h3>
                  <p className="text-primary-100">
                    Covering Elgin and surrounding communities
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="font-semibold">Primary Area</p>
                      <p className="text-primary-100">Elgin, IL</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="font-semibold">Coverage</p>
                      <p className="text-primary-100">12+ Cities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Areas List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Communities We Serve
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <FaMapMarkerAlt className="text-primary-600 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="card bg-primary-50 border-l-4 border-primary-600">
              <h4 className="font-bold text-lg text-gray-900 mb-3">
                Don't See Your Area?
              </h4>
              <p className="text-gray-700 mb-4">
                We're constantly expanding our service area. If you don't see your community listed, 
                give us a call — we may still be able to help!
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <FaPhone />
                <span>Call (123) 456-7890</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-600 mb-1">30min</p>
                <p className="text-sm text-gray-600">Average Response Time</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary-600 mb-1">100%</p>
                <p className="text-sm text-gray-600">Coverage Reliability</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional: Embed real Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                [Google Maps iframe can be embedded here with your business address]
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 font-medium">Priority Senior Care LLC</p>
              <p className="text-gray-600">Elgin, IL 60123</p>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

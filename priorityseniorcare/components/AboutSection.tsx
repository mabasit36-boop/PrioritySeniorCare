'use client'

import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaHandHoldingHeart, FaStar } from 'react-icons/fa'

export default function AboutSection() {
  const stats = [
    { icon: FaUsers, value: '500+', label: 'Families Served' },
    { icon: FaAward, value: '15+', label: 'Years Combined Experience' },
    { icon: FaStar, value: '98%', label: 'Client Satisfaction' },
    { icon: FaHandHoldingHeart, value: '24/7', label: 'Care Available' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            
            <h2 className="heading-lg text-gray-900 mb-6">
              Dedicated to Enhancing Senior Lives
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At <span className="font-semibold text-gray-900">Priority Senior Care LLC</span>, we 
                understand that choosing care for your loved ones is one of the most important decisions 
                you'll ever make. That's why we're committed to providing compassionate, professional, 
                and personalized care services that prioritize dignity, independence, and quality of life.
              </p>
              
              <p>
                Founded with a mission to serve the senior community in Elgin and surrounding areas, 
                we bring together experienced caregivers, trained professionals, and state-of-the-art 
                resources to deliver exceptional home care, transportation, and technology training services.
              </p>
              
              <p>
                Our team believes in treating every client like family. We take the time to understand 
                unique needs, preferences, and goals to create customized care plans that truly make 
                a difference in daily life.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-primary-50 border-l-4 border-primary-600 rounded-r-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To empower seniors to live with dignity, independence, and joy by providing 
                comprehensive care services that exceed expectations and build lasting relationships.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">💙</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compassion</h4>
                  <p className="text-sm text-gray-600">Care with heart</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trust</h4>
                  <p className="text-sm text-gray-600">Reliable partners</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">⭐</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Excellence</h4>
                  <p className="text-sm text-gray-600">Quality service</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Respect</h4>
                  <p className="text-sm text-gray-600">Dignity first</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card text-center"
                >
                  <stat.icon className="text-4xl text-primary-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Certification/Accreditation Placeholder */}
            <div className="card bg-gradient-to-br from-primary-50 to-primary-100">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Certified & Accredited
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <span className="text-gray-700">Licensed Home Care Provider</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <span className="text-gray-700">Background-Checked Staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <span className="text-gray-700">Insured & Bonded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary-600">✓</span>
                  </div>
                  <span className="text-gray-700">CPR & First Aid Certified</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="card gradient-primary text-white">
              <h3 className="font-bold text-xl mb-3">
                Ready to Get Started?
              </h3>
              <p className="mb-4 text-primary-100">
                Contact us today for a free consultation and learn how we can help 
                your family.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

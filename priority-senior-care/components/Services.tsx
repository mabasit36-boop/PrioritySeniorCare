'use client'

import { motion } from 'framer-motion'
import { FaHome, FaCar, FaLaptop, FaHeart, FaClock, FaShieldAlt } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: FaHome,
      title: 'Home Care Services',
      description: 'Personalized in-home care tailored to your loved one\'s unique needs and preferences.',
      features: [
        'Personal care & assistance',
        'Medication management',
        'Meal preparation & nutrition',
        'Light housekeeping',
        'Companionship & emotional support',
        'Alzheimer\'s & dementia care'
      ],
      color: 'primary'
    },
    {
      icon: FaCar,
      title: 'Transportation Services',
      description: 'Safe and reliable transportation for medical appointments, shopping, and social activities.',
      features: [
        'Medical appointment rides',
        'Grocery shopping assistance',
        'Social event transportation',
        'Wheelchair accessible vehicles',
        'Professional & courteous drivers',
        'Door-to-door service'
      ],
      color: 'secondary'
    },
    {
      icon: FaLaptop,
      title: 'Technical Training',
      description: 'Empowering seniors with technology skills to stay connected with family and friends.',
      features: [
        'Smartphone & tablet basics',
        'Video calling tutorials',
        'Social media guidance',
        'Email & messaging',
        'Online safety education',
        'One-on-one personalized training'
      ],
      color: 'primary'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            Comprehensive Care Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a full range of services designed to enhance the quality of life 
            for seniors and give families peace of mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`text-3xl text-${service.color}-600`} />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className={`text-${service.color}-600 mt-1`}>✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`inline-block w-full text-center px-6 py-3 bg-${service.color}-600 text-white font-semibold rounded-lg hover:bg-${service.color}-700 transition-all duration-300`}
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <FaHeart className="text-4xl text-primary-600 mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Compassionate Care</h4>
            <p className="text-gray-600 text-sm">
              Every team member is trained in empathy and professional caregiving
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <FaClock className="text-4xl text-primary-600 mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Flexible Scheduling</h4>
            <p className="text-gray-600 text-sm">
              Available 24/7 with customizable care plans to fit your needs
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <FaShieldAlt className="text-4xl text-primary-600 mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2">Licensed & Insured</h4>
            <p className="text-gray-600 text-sm">
              Fully certified caregivers with comprehensive background checks
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

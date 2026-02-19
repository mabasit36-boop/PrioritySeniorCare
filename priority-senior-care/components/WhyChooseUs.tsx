'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Experienced & Trained Caregivers',
      description: 'Our team consists of certified professionals with extensive training in senior care, ensuring your loved ones receive the highest quality service.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Personalized Care Plans',
      description: 'We don\'t believe in one-size-fits-all. Each client receives a customized care plan designed around their unique needs, preferences, and lifestyle.',
      icon: '📋'
    },
    {
      title: 'Family-Centered Approach',
      description: 'We involve family members in every step, maintaining open communication and providing regular updates on your loved one\'s wellbeing.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Affordable & Transparent Pricing',
      description: 'No hidden fees or surprises. We offer competitive rates with clear, upfront pricing so you know exactly what to expect.',
      icon: '💰'
    },
    {
      title: 'Local & Community-Focused',
      description: 'As a locally-owned business serving Elgin and surrounding areas, we understand the unique needs of our community and are committed to serving it.',
      icon: '🏘️'
    },
    {
      title: 'Available When You Need Us',
      description: 'With 24/7 availability and flexible scheduling, we\'re here whenever you need support, day or night, weekday or weekend.',
      icon: '🕐'
    }
  ]

  return (
    <section className="py-20 bg-white">
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
            Why Choose Us
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            The Priority Senior Care Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a care provider — we're your partner in ensuring 
            the best quality of life for your loved ones.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="card h-full">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Experience the difference compassionate care makes
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of families who trust Priority Senior Care for their loved ones' wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get Started Today
              </a>
              <a href="tel:+1234567890" className="btn-secondary">
                Call (123) 456-7890
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

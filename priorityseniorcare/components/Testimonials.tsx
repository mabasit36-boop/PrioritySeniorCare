'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Margaret Thompson',
      role: 'Daughter of Client',
      rating: 5,
      text: 'Priority Senior Care has been a blessing for our family. The caregivers are professional, compassionate, and truly care about my mother\'s wellbeing. We finally have peace of mind knowing she\'s in good hands.',
      service: 'Home Care'
    },
    {
      name: 'Robert Chen',
      role: 'Son of Client',
      rating: 5,
      text: 'The transportation service has been incredible. My father can now attend all his doctor appointments and social activities without worry. The drivers are always on time, courteous, and incredibly patient.',
      service: 'Transportation'
    },
    {
      name: 'Linda Martinez',
      role: 'Client',
      rating: 5,
      text: 'I never thought I could learn to use an iPad at my age, but the tech training sessions were patient and easy to follow. Now I video call my grandchildren every week! Thank you for helping me stay connected.',
      service: 'Tech Training'
    },
    {
      name: 'James Wilson',
      role: 'Family Member',
      rating: 5,
      text: 'Outstanding service from start to finish. The team took time to understand our needs and created a personalized care plan that works perfectly for our family. Highly recommend!',
      service: 'Home Care'
    },
    {
      name: 'Patricia Anderson',
      role: 'Daughter of Client',
      rating: 5,
      text: 'We\'ve tried other care services before, but Priority Senior Care stands out. They treat my mom with dignity and respect, and the quality of care is consistently excellent. Worth every penny.',
      service: 'Home Care'
    },
    {
      name: 'Michael Brown',
      role: 'Son of Client',
      rating: 5,
      text: 'The combination of home care and transportation services has been perfect for Dad. He gets the support he needs at home and can still maintain his independence. Couldn\'t ask for more.',
      service: 'Multiple Services'
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
            Testimonials
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            What Our Families Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from the families we've had the privilege to serve.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-primary-200 absolute top-4 right-4" />

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600 mb-2">4.9/5.0</p>
              <div className="flex space-x-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-300"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600 mb-2">200+</p>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-300"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600 mb-2">98%</p>
              <p className="text-gray-600">Would Recommend</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

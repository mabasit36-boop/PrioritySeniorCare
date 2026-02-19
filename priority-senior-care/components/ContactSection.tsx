'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
  preferredContact: string
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Elgin, IL 60123',
      link: null
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@priorityseniorcare.com',
      link: 'mailto:info@priorityseniorcare.com'
    },
    {
      icon: FaClock,
      title: 'Hours',
      content: '24/7 Available',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Contact Us
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to learn more? Fill out the form below or contact us directly. 
            We're here to answer your questions and help you get started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Free Consultation
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="input-field"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="input-field"
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className="input-field"
                  >
                    <option value="">Select a service...</option>
                    <option value="home-care">Home Care Services</option>
                    <option value="transportation">Transportation Services</option>
                    <option value="tech-training">Technical Training</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="phone"
                        {...register('preferredContact', { required: 'Please select a contact method' })}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="email"
                        {...register('preferredContact')}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Email</span>
                    </label>
                  </div>
                  {errors.preferredContact && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredContact.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="textarea-field"
                    placeholder="Tell us about your needs or ask any questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <p className="font-semibold">Thank you for contacting us!</p>
                    <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm mt-1">Please try again or call us directly at (123) 456-7890.</p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-2xl text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Emergency Notice */}
            <div className="card bg-red-50 border-l-4 border-red-600">
              <h4 className="font-bold text-lg text-red-900 mb-2">
                Emergency?
              </h4>
              <p className="text-red-800 mb-3">
                If you have a medical emergency, please call 911 immediately.
              </p>
              <p className="text-sm text-red-700">
                For urgent non-emergency care needs, call our 24/7 hotline:
              </p>
              <a
                href="tel:+1234567890"
                className="inline-block mt-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                (123) 456-7890
              </a>
            </div>

            {/* Additional Info */}
            <div className="card gradient-primary text-white">
              <h4 className="font-bold text-xl mb-3">
                What Happens Next?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="font-semibold">We'll Contact You</p>
                    <p className="text-sm text-primary-100">Within 24 hours via your preferred method</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="font-semibold">Free Consultation</p>
                    <p className="text-sm text-primary-100">Discuss your needs and answer questions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="font-semibold">Custom Care Plan</p>
                    <p className="text-sm text-primary-100">Tailored to your family's unique situation</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

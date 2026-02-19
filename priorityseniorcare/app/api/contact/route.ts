import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, preferredContact } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !preferredContact) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email transporter
    // NOTE: Replace these with your actual email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    })

    // Email to business owner
    const ownerMailOptions = {
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: process.env.CONTACT_EMAIL || 'info@priorityseniorcare.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #0ea5e9; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${phone}" style="color: #0ea5e9;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Service Interest:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Preferred Contact:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${preferredContact}</td>
              </tr>
            </table>
            
            ${message ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #1f2937;">Message:</h3>
                <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #0ea5e9; margin: 0;">${message}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p style="margin: 0;">This form was submitted from the Priority Senior Care website.</p>
              <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Confirmation email to customer
    const customerMailOptions = {
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank You for Contacting Priority Senior Care',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #0ea5e9; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="font-size: 16px; color: #1f2937; line-height: 1.6;">Dear ${name},</p>
            
            <p style="font-size: 16px; color: #1f2937; line-height: 1.6;">
              Thank you for contacting Priority Senior Care. We've received your inquiry about our <strong>${service}</strong> services and will respond within 24 hours.
            </p>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
              <h3 style="color: #0369a1; margin-top: 0;">What Happens Next?</h3>
              <ol style="color: #1f2937; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li>One of our care coordinators will review your information</li>
                <li>We'll contact you via ${preferredContact} within 24 hours</li>
                <li>We'll schedule a free consultation to discuss your needs</li>
              </ol>
            </div>
            
            <p style="font-size: 16px; color: #1f2937; line-height: 1.6;">
              If you have an urgent need, please call us directly at <a href="tel:+1234567890" style="color: #0ea5e9; text-decoration: none; font-weight: bold;">(123) 456-7890</a>. We're available 24/7.
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                <strong>Priority Senior Care LLC</strong><br>
                Elgin, IL 60123<br>
                Phone: (123) 456-7890<br>
                Email: info@priorityseniorcare.com
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(ownerMailOptions)
    await transporter.sendMail(customerMailOptions)

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}

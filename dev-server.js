// Development server setup for API routes
// This is a simple Express server for local development

import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const app = express()
const PORT = 3001

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Middleware
app.use(cors())
app.use(express.json())

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Log the submission
    console.log('📧 Contact Form Submission (Development):')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('---')

    // Send email using Resend (if API key is available)
    if (process.env.RESEND_API_KEY) {
      try {
        const emailData = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['mohamedali200bu@gmail.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #334155; border-bottom: 2px solid #334155; padding-bottom: 10px;">
                New Contact Form Submission (Development)
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #475569; margin-top: 0;">Contact Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #334155;">${email}</a></p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 style="color: #475569; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; color: #334155;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  This message was sent from your portfolio contact form (Development Mode).
                </p>
              </div>
            </div>
          `,
          text: `
            New Contact Form Submission (Development)
            
            Name: ${name}
            Email: ${email}
            Submitted: ${new Date().toLocaleString()}
            
            Message:
            ${message}
            
            ---
            This message was sent from your portfolio contact form (Development Mode).
          `
        })

        console.log('✅ Email sent successfully:', emailData.data?.id)
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError)
      }
    } else {
      console.log('⚠️ RESEND_API_KEY not found, skipping email send')
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500))

    return res.status(200).json({ 
      message: 'Thank you for your message! I will get back to you soon.',
      success: true 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      message: 'Something went wrong. Please try again later.',
      success: false 
    })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`)
  console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/contact`)
  console.log(`🔑 Resend API Key: ${process.env.RESEND_API_KEY ? '✅ Set' : '❌ Not set'}`)
})

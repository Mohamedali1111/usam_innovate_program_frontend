// Simple Email Sender - Run this to send emails manually
// Usage: node send-email.js "Name" "email@example.com" "Message content"

import { Resend } from 'resend'

const resend = new Resend('re_PcoP8wwz_NLRPur7RNYF4eRqRpjMzdXgJ')

async function sendEmail(name, email, message) {
  try {
    console.log('📧 Sending email...')
    console.log('📧 From:', name, email)
    console.log('📧 Message:', message)
    
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mohamedali200bu@gmail.com'],
      subject: `Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #334155; border-bottom: 2px solid #334155; padding-bottom: 10px;">
            New Contact Form Submission
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
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Submitted: ${new Date().toLocaleString()}
        
        Message:
        ${message}
        
        ---
        This message was sent from your portfolio contact form.
      `
    })
    
    console.log('✅ Email sent successfully!')
    console.log('📧 Email ID:', result.data?.id)
    console.log('📧 Sent to: mohamedali200bu@gmail.com')
    console.log('📧 Check your inbox!')
    
  } catch (error) {
    console.error('❌ Error sending email:', error)
  }
}

// Get command line arguments
const args = process.argv.slice(2)
if (args.length >= 3) {
  const [name, email, message] = args
  sendEmail(name, email, message)
} else {
  console.log('Usage: node send-email.js "Name" "email@example.com" "Message content"')
  console.log('Example: node send-email.js "John Doe" "john@example.com" "Hello, I would like to work with you!"')
}

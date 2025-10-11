const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

module.exports = async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

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
    console.log('📧 Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    })

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const emailData = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>', // You'll need to verify this domain
          to: ['mohamedali200bu@gmail.com'], // Your email address
          subject: `New Contact Form Submission from ${name}`,
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

        console.log('✅ Email sent successfully:', emailData.data?.id)
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError)
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.log('⚠️ RESEND_API_KEY not found, skipping email send')
    }

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
}

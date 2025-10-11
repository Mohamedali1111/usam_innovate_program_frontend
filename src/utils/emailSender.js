// Email Sender Utility - Use this to manually send emails
import { Resend } from 'resend'

const resend = new Resend('re_PcoP8wwz_NLRPur7RNYF4eRqRpjMzdXgJ')

export async function sendContactEmail(formData) {
  try {
    console.log('📧 Sending contact form email...')
    
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mohamedali200bu@gmail.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #334155; border-bottom: 2px solid #334155; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #334155;">${formData.email}</a></p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #475569; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #334155;">${formData.message.replace(/\n/g, '<br>')}</p>
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
        
        Name: ${formData.name}
        Email: ${formData.email}
        Submitted: ${new Date().toLocaleString()}
        
        Message:
        ${formData.message}
        
        ---
        This message was sent from your portfolio contact form.
      `
    })

    console.log('✅ Email sent successfully!')
    console.log('📧 Email ID:', result.data?.id)
    console.log('📧 Sent to: mohamedali200bu@gmail.com')
    
    return { success: true, emailId: result.data?.id }
    
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return { success: false, error: error.message }
  }
}

// Test function
export async function testEmail() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the contact form utility.'
  }
  
  return await sendContactEmail(testData)
}

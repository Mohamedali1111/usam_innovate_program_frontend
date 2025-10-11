// Manual Email Test Script
// Run this with: node manual-email-test.js

import { Resend } from 'resend'

const resend = new Resend('re_PcoP8wwz_NLRPur7RNYF4eRqRpjMzdXgJ')

async function sendTestEmail() {
  try {
    console.log('🧪 Sending manual test email...')
    
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mohamedali200bu@gmail.com'],
      subject: 'Manual Test - Portfolio Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #334155; border-bottom: 2px solid #334155; padding-bottom: 10px;">
            Manual Test Email
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #475569; margin-top: 0;">✅ Email System Working!</h3>
            <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Status:</strong> Email sending is functional</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #475569; margin-top: 0;">📧 Contact Form Status:</h3>
            <p style="line-height: 1.6; color: #334155;">
              Your portfolio contact form is working! In development mode, it shows success notifications 
              and logs form submissions to the console. In production (Vercel), it will send real emails.
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              🚀 Ready for production deployment!
            </p>
          </div>
        </div>
      `,
      text: `
        Manual Test Email
        
        ✅ Email System Working!
        Test Time: ${new Date().toLocaleString()}
        Status: Email sending is functional
        
        📧 Contact Form Status:
        
        Your portfolio contact form is working! In development mode, it shows success notifications 
        and logs form submissions to the console. In production (Vercel), it will send real emails.
        
        🚀 Ready for production deployment!
      `
    })
    
    console.log('✅ Manual test email sent successfully!')
    console.log('📧 Email ID:', result.data?.id)
    console.log('📧 Sent to: mohamedali200bu@gmail.com')
    console.log('📧 Check your inbox!')
    
  } catch (error) {
    console.error('❌ Error sending manual test email:', error)
  }
}

sendTestEmail()

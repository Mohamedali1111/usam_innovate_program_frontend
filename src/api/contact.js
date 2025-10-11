// Development API endpoint for local testing
// This file is only used in development mode

export default async function handler(req, res) {
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

    // Log the submission for development
    console.log('📧 Contact Form Submission (Development):')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('---')

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
}

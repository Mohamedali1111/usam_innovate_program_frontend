export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

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

    // For now, just return success without sending email
    // This will help us test if the API endpoint works
    return res.status(200).json({ 
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
      debug: {
        receivedData: { name, email, message },
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ 
      message: 'Something went wrong. Please try again later.',
      success: false,
      error: error.message
    })
  }
}

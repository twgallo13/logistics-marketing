// Mock API handler for contact form submissions
// In a real Next.js application, this would be an actual API route

// Simulate API endpoint
const contactApiHandler = async (request: any) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Log the submission (in a real app, this would save to database)
  console.log('Contact form submission:', request)
  
  // Simulate successful response
  return {
    ok: true,
    status: 200,
    json: async () => ({
      success: true,
      message: 'Contact form submitted successfully'
    })
  }
}

// Mock fetch override for /api/contact endpoint
const originalFetch = window.fetch

window.fetch = async (url: any, options: any) => {
  if (typeof url === 'string' && url.includes('/api/contact')) {
    return contactApiHandler(options)
  }
  
  // For all other requests, use original fetch
  return originalFetch(url, options)
}

export { contactApiHandler }
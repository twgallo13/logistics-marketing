import React from 'react'

const AccessibilityStatementPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Accessibility 
              <span className="text-primary"> Statement</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We are committed to ensuring our website is accessible to everyone, 
              regardless of ability or technology.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: March 1, 2024
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Our Commitment</h2>
            <p className="mb-6">
              LogiFlow is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the 
              relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Conformance Status</h2>
            <p className="mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers 
              and developers to improve accessibility for people with disabilities. It defines 
              three levels of conformance: Level A, Level AA, and Level AAA. This website is 
              partially conformant with WCAG 2.1 level AA. Partially conformant means that some 
              parts of the content do not fully conform to the accessibility standard.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Accessibility Features</h2>
            <p className="mb-6">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Keyboard navigation support for all interactive elements</li>
              <li>Screen reader compatibility with proper heading structure</li>
              <li>High contrast color schemes that meet WCAG standards</li>
              <li>Alternative text for all informative images</li>
              <li>Clear and consistent navigation throughout the site</li>
              <li>Resizable text up to 200% without loss of functionality</li>
              <li>Focus indicators for keyboard navigation</li>
              <li>Descriptive link text and button labels</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Known Issues</h2>
            <p className="mb-6">
              We are actively working to address the following known accessibility issues:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Some third-party embedded content may not be fully accessible</li>
              <li>Certain complex data visualizations are being improved for screen readers</li>
              <li>Mobile navigation is being enhanced for better touch accessibility</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Assistive Technologies</h2>
            <p className="mb-6">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Keyboard-only navigation</li>
              <li>Voice recognition software</li>
              <li>Screen magnification software</li>
              <li>Switch navigation devices</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Testing and Evaluation</h2>
            <p className="mb-6">
              We regularly test our website using:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Automated accessibility testing tools</li>
              <li>Manual testing with various assistive technologies</li>
              <li>User testing with people with disabilities</li>
              <li>Regular accessibility audits by third-party experts</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Feedback and Support</h2>
            <p className="mb-6">
              We welcome your feedback on the accessibility of our website. If you encounter 
              any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg mb-6">
              <p><strong>Accessibility Team</strong></p>
              <p>Email: accessibility@logiflow.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Logistics Drive, Commerce City, CO 80022</p>
            </div>
            <p className="mb-6">
              We aim to respond to accessibility feedback within 2 business days.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Ongoing Efforts</h2>
            <p className="mb-6">
              We are continuously working to improve accessibility through:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Regular accessibility training for our development team</li>
              <li>Incorporating accessibility considerations into our design process</li>
              <li>Staying current with accessibility best practices and standards</li>
              <li>Conducting periodic accessibility audits</li>
              <li>Engaging with the disability community for feedback and insights</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Alternative Formats</h2>
            <p className="mb-6">
              If you need information from our website in an alternative format, such as 
              large print, Braille, or audio, please contact us and we will work to 
              accommodate your needs.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Legal Requirements</h2>
            <p className="mb-6">
              This accessibility statement is in accordance with applicable federal and 
              state accessibility laws and regulations, including the Americans with 
              Disabilities Act (ADA) and Section 508 of the Rehabilitation Act.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Updates to This Statement</h2>
            <p className="mb-6">
              This accessibility statement will be updated as we make improvements to 
              our website and as accessibility standards evolve. The last update was 
              made on the date indicated at the top of this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccessibilityStatementPage
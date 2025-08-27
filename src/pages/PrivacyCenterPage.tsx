import React from 'react'

const PrivacyCenterPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Privacy 
              <span className="text-primary"> Center</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: March 1, 2024
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, address, industry)</li>
              <li>Account credentials and preferences</li>
              <li>Communication records and support requests</li>
              <li>Order and shipment information</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, maintain, and improve our fulfillment services</li>
              <li>Process orders and manage inventory</li>
              <li>Communicate with you about our services</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send administrative information and service updates</li>
              <li>Analyze usage patterns to improve our platform</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Information Sharing</h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To shipping carriers for delivery purposes</li>
              <li>To service providers who assist us in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection</li>
              <li>Secure data centers with physical access controls</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Your Rights</h2>
            <p className="mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Object to certain processing activities</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Cookies and Tracking</h2>
            <p className="mb-6">
              We use cookies and similar tracking technologies to improve your experience 
              on our website. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">International Transfers</h2>
            <p className="mb-6">
              Your information may be transferred to and processed in countries other than 
              your own. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Children's Privacy</h2>
            <p className="mb-6">
              Our services are not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify you of 
              any material changes by posting the new policy on this page and updating 
              the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this privacy policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-card p-6 rounded-lg">
              <p><strong>LogiFlow Privacy Team</strong></p>
              <p>Email: privacy@logiflow.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Logistics Drive, Commerce City, CO 80022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyCenterPage
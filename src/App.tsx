import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

// Import mock API handler
import '@/lib/mock-api'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import HomePage from '@/pages/HomePage'
import WhyUsPage from '@/pages/WhyUsPage'
import ServicesPage from '@/pages/ServicesPage'
import FulfillmentPage from '@/pages/services/FulfillmentPage'
import ReturnsRMAPage from '@/pages/services/ReturnsRMAPage'
import CustomerServicePage from '@/pages/services/CustomerServicePage'
import BillingRatecardsPage from '@/pages/services/BillingRatecardsPage'
import UPCLabelingPage from '@/pages/services/UPCLabelingPage'
import PricingPage from '@/pages/PricingPage'
import CaseStudiesPage from '@/pages/CaseStudiesPage'
import KnowledgeHubPage from '@/pages/KnowledgeHubPage'
import AboutPage from '@/pages/AboutPage'
import PrivacyCenterPage from '@/pages/PrivacyCenterPage'
import AccessibilityStatementPage from '@/pages/AccessibilityStatementPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/fulfillment" element={<FulfillmentPage />} />
            <Route path="/services/returns-rma" element={<ReturnsRMAPage />} />
            <Route path="/services/customer-service" element={<CustomerServicePage />} />
            <Route path="/services/billing-ratecards" element={<BillingRatecardsPage />} />
            <Route path="/services/upc-labeling" element={<UPCLabelingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-center" element={<PrivacyCenterPage />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatementPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  )
}

export default App
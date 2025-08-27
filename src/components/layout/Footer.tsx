import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">LF</span>
              </div>
              <span className="font-bold text-xl">LogiFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete fulfillment solutions for modern e-commerce businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/fulfillment" className="text-muted-foreground hover:text-foreground">
                  Fulfillment
                </Link>
              </li>
              <li>
                <Link to="/services/returns-rma" className="text-muted-foreground hover:text-foreground">
                  Returns & RMA
                </Link>
              </li>
              <li>
                <Link to="/services/customer-service" className="text-muted-foreground hover:text-foreground">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/services/billing-ratecards" className="text-muted-foreground hover:text-foreground">
                  Billing & Rate Cards
                </Link>
              </li>
              <li>
                <Link to="/services/upc-labeling" className="text-muted-foreground hover:text-foreground">
                  UPC Labeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/why-us" className="text-muted-foreground hover:text-foreground">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/knowledge-hub" className="text-muted-foreground hover:text-foreground">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-center" className="text-muted-foreground hover:text-foreground">
                  Privacy Center
                </Link>
              </li>
              <li>
                <Link to="/accessibility-statement" className="text-muted-foreground hover:text-foreground">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 LogiFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
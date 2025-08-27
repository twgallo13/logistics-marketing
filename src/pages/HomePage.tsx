import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Truck, Package, Users, BarChart3, ArrowRight } from '@phosphor-icons/react'
import ContactDialog from '@/components/ContactDialog'

const HomePage = () => {
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [contactType, setContactType] = useState<'demo' | 'quote'>('demo')

  const handleContactClick = (type: 'demo' | 'quote') => {
    setContactType(type)
    setShowContactDialog(true)
  }

  const features = [
    {
      icon: <Truck size={32} className="text-primary" />,
      title: 'Fast Fulfillment',
      description: 'Same-day processing with 99.8% accuracy rate'
    },
    {
      icon: <Package size={32} className="text-primary" />,
      title: 'Smart Inventory',
      description: 'Real-time tracking and automated reorder points'
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Dedicated Support',
      description: '24/7 customer service with dedicated account managers'
    },
    {
      icon: <BarChart3 size={32} className="text-primary" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and performance insights'
    }
  ]

  const services = [
    {
      title: 'Fulfillment',
      description: 'End-to-end order fulfillment with lightning-fast processing',
      link: '/services/fulfillment'
    },
    {
      title: 'Returns & RMA',
      description: 'Streamlined return processing and inventory management',
      link: '/services/returns-rma'
    },
    {
      title: 'Customer Service',
      description: '24/7 multilingual support for your customers',
      link: '/services/customer-service'
    },
    {
      title: 'UPC Labeling',
      description: 'Professional labeling and barcoding services',
      link: '/services/upc-labeling'
    }
  ]

  const stats = [
    { value: '99.8%', label: 'Order Accuracy' },
    { value: '24hrs', label: 'Processing Time' },
    { value: '500+', label: 'Happy Clients' },
    { value: '10M+', label: 'Orders Processed' }
  ]

  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-background to-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-5xl font-bold tracking-tight">
                Complete Fulfillment Solutions for 
                <span className="text-primary"> Modern E-commerce</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Scale your business with our comprehensive fulfillment services. From warehousing to shipping, 
                we handle it all so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => handleContactClick('demo')}>
                  Book Free Demo
                </Button>
                <Button size="lg" variant="outline" onClick={() => handleContactClick('quote')}>
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Why Choose LogiFlow?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge technology with expert logistics knowledge to deliver 
                unparalleled fulfillment services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive fulfillment solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {service.title}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Focus on Growth, We'll Handle the Rest
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our comprehensive fulfillment platform integrates seamlessly with your existing 
                    systems, providing real-time visibility and control over your entire supply chain.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    'Seamless integration with 50+ platforms',
                    'Real-time inventory tracking',
                    'Automated shipping and tracking',
                    'Dedicated account management',
                    'Advanced analytics and reporting'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <Button onClick={() => handleContactClick('demo')}>
                    Schedule Demo
                  </Button>
                  <Link to="/case-studies">
                    <Button variant="outline">View Case Studies</Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                  <p className="text-muted-foreground">
                    Join hundreds of businesses that trust LogiFlow with their fulfillment needs.
                  </p>
                  <Button size="lg" onClick={() => handleContactClick('quote')}>
                    Get Your Quote Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactDialog
        isOpen={showContactDialog}
        onClose={() => setShowContactDialog(false)}
        type={contactType}
      />
    </>
  )
}

export default HomePage
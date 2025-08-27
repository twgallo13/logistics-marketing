import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Truck, Clock, BarChart3 } from '@phosphor-icons/react'

const FulfillmentPage = () => {
  const features = [
    {
      icon: <Clock size={32} className="text-primary" />,
      title: 'Same-Day Processing',
      description: 'Orders received by 2 PM are processed and shipped the same day.'
    },
    {
      icon: <Truck size={32} className="text-primary" />,
      title: 'Multi-Carrier Shipping',
      description: 'Access to all major carriers with automatic rate shopping.'
    },
    {
      icon: <BarChart3 size={32} className="text-primary" />,
      title: 'Real-Time Tracking',
      description: 'Full visibility from order to delivery with live updates.'
    }
  ]

  const processSteps = [
    'Order received from your store',
    'Inventory automatically allocated',
    'Items picked and quality checked',
    'Custom packaging applied',
    'Shipped with tracking information',
    'Delivery confirmation sent'
  ]

  const benefits = [
    'Reduce fulfillment costs by up to 30%',
    'Scale operations without infrastructure investment',
    'Focus on marketing and product development',
    'Improve customer satisfaction with faster shipping',
    'Access advanced fulfillment technology',
    'Benefit from our carrier relationships'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge className="mb-4">Most Popular Service</Badge>
            <h1 className="text-5xl font-bold tracking-tight">
              E-commerce 
              <span className="text-primary"> Fulfillment</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              End-to-end order fulfillment with lightning-fast processing, 
              99.8% accuracy, and seamless integration with your store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Started Today</Button>
              <Button size="lg" variant="outline">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Fulfillment Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fulfillment service combines speed, accuracy, and technology to deliver 
              exceptional customer experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Fulfillment Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From order to doorstep in 6 simple, automated steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-background rounded-lg border">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Our Fulfillment Service?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transform your business operations with professional fulfillment that scales 
                  with your growth.
                </p>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">99.8%</div>
                    <div className="text-sm text-muted-foreground">Order Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24hrs</div>
                    <div className="text-sm text-muted-foreground">Processing Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Integrations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Platform Integrations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly connect your existing store with our fulfillment platform.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 
              'Amazon', 'eBay', 'Etsy', 'Walmart', 'Square', 
              'WIX', 'Squarespace', 'Custom API'
            ].map((platform, index) => (
              <div key={index} className="text-center p-4 bg-background rounded-lg border">
                <span className="font-medium text-sm">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FulfillmentPage
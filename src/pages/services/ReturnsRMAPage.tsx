import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowLeft, Package, Clock } from '@phosphor-icons/react'

const ReturnsRMAPage = () => {
  const features = [
    {
      icon: <Package size={32} className="text-primary" />,
      title: 'Automated Processing',
      description: 'Streamlined return processing with automatic inspection and sorting.'
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: 'Fast Turnaround',
      description: 'Returns processed within 24-48 hours of receipt.'
    },
    {
      icon: <ArrowLeft size={32} className="text-primary" />,
      title: 'Customer Communication',
      description: 'Automated updates keep customers informed throughout the process.'
    }
  ]

  const processSteps = [
    'Customer initiates return request',
    'Return authorization generated',
    'Return shipped to our facility',
    'Items inspected and categorized',
    'Inventory updated in real-time',
    'Customer refunded or exchanged'
  ]

  const benefits = [
    'Reduce return processing time by 60%',
    'Improve customer satisfaction with clear communication',
    'Maximize recoverable value from returned items',
    'Automate refund and exchange processes',
    'Detailed reporting on return reasons',
    'Seamless integration with your store'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Returns & 
              <span className="text-primary"> RMA Management</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Turn returns from a cost center into a customer satisfaction opportunity 
              with our streamlined return processing system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Learn More</Button>
              <Button size="lg" variant="outline">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Streamlined Returns Processing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our returns management system is designed to maximize efficiency while 
              maintaining excellent customer experience.
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
            <h2 className="text-3xl font-bold">Returns Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent returns process that works for both you and your customers.
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
                  Transform Your Returns Experience
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our comprehensive returns management system helps you retain customers 
                  while recovering maximum value from returned merchandise.
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
                <h3 className="text-2xl font-bold">Returns Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24-48hrs</div>
                    <div className="text-sm text-muted-foreground">Processing Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">85%</div>
                    <div className="text-sm text-muted-foreground">Items Restocked</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">60%</div>
                    <div className="text-sm text-muted-foreground">Time Savings</div>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Categories */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Return Categories We Handle</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive processing for all types of returns with appropriate handling for each category.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Defective Items',
                description: 'Quality control inspection and proper disposal or refurbishment',
                action: 'Inspect & Categorize'
              },
              {
                category: 'Wrong Size/Color',
                description: 'Quick processing back to inventory for immediate resale',
                action: 'Restock Immediately'
              },
              {
                category: 'Customer Remorse',
                description: 'Standard return processing with condition assessment',
                action: 'Inspect & Restock'
              },
              {
                category: 'Damaged in Transit',
                description: 'Insurance claims processing and carrier notifications',
                action: 'File Claims'
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{item.description}</CardDescription>
                  <div className="text-center">
                    <Button variant="outline" size="sm">{item.action}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReturnsRMAPage
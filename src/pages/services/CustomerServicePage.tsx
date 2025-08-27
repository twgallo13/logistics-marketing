import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Clock, Globe } from '@phosphor-icons/react'

const CustomerServicePage = () => {
  const features = [
    {
      icon: <Clock size={32} className="text-primary" />,
      title: '24/7 Availability',
      description: 'Round-the-clock support to ensure your customers are never left waiting.'
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: 'Multilingual Support',
      description: 'Support in English, Spanish, French, and other major languages.'
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Dedicated Team',
      description: 'Trained representatives who understand your brand and products.'
    }
  ]

  const services = [
    'Order status inquiries and tracking updates',
    'Return and exchange assistance',
    'Product information and recommendations',
    'Shipping and delivery questions',
    'Account management and billing support',
    'Technical support for online orders',
    'Escalation to specialized departments',
    'Customer feedback collection and reporting'
  ]

  const channels = [
    { name: 'Phone Support', description: 'Direct phone line with average wait time under 2 minutes' },
    { name: 'Live Chat', description: 'Real-time chat support integrated with your website' },
    { name: 'Email Support', description: 'Comprehensive email support with 4-hour response time' },
    { name: 'Social Media', description: 'Monitor and respond to customer inquiries on social platforms' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Customer 
              <span className="text-primary"> Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional customer support that represents your brand with excellence, 
              available 24/7 to keep your customers happy and loyal.
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
            <h2 className="text-3xl font-bold">World-Class Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our customer service team becomes an extension of your brand, providing 
              consistent, professional support across all channels.
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

      {/* Support Channels */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Multi-Channel Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet your customers where they are with comprehensive support across all communication channels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{channel.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{channel.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Complete Customer Support Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  From pre-sale inquiries to post-purchase support, we handle every 
                  customer interaction with professionalism and care.
                </p>
              </div>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Support Metrics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">&lt;2min</div>
                    <div className="text-sm text-muted-foreground">Average Wait Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4hrs</div>
                    <div className="text-sm text-muted-foreground">Email Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
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

      {/* Training & Quality */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Training & Quality Assurance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our representatives undergo comprehensive training to represent your brand effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Brand Training',
                description: 'Comprehensive training on your products, policies, and brand voice',
                badge: 'Essential'
              },
              {
                title: 'Product Knowledge',
                description: 'Deep understanding of your product catalog and specifications',
                badge: 'Required'
              },
              {
                title: 'Quality Monitoring',
                description: 'Regular call monitoring and feedback for continuous improvement',
                badge: 'Ongoing'
              },
              {
                title: 'Performance Metrics',
                description: 'Detailed reporting on response times, resolution rates, and satisfaction',
                badge: 'Monthly'
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerServicePage
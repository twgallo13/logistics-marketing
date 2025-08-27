import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Award, Clock } from '@phosphor-icons/react'

const WhyUsPage = () => {
  const advantages = [
    {
      icon: <Award size={32} className="text-primary" />,
      title: 'Industry Expertise',
      description: 'Over 15 years of experience in e-commerce fulfillment',
      details: [
        'Served 500+ businesses across various industries',
        'Deep understanding of seasonal fluctuations',
        'Proven track record of scaling with growing businesses'
      ]
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Dedicated Support',
      description: 'Personal account managers and 24/7 customer support',
      details: [
        'Dedicated account manager for each client',
        'Multilingual support team',
        'Average response time under 2 hours'
      ]
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: 'Speed & Accuracy',
      description: 'Same-day processing with 99.8% accuracy rate',
      details: [
        'Orders processed within 24 hours',
        'Real-time inventory updates',
        'Advanced quality control processes'
      ]
    }
  ]

  const stats = [
    { value: '99.8%', label: 'Order Accuracy', description: 'Industry leading precision' },
    { value: '24hrs', label: 'Processing Time', description: 'Same-day fulfillment' },
    { value: '50+', label: 'Integrations', description: 'Seamless platform connections' },
    { value: '15', label: 'Years Experience', description: 'Proven industry expertise' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Why Leading Brands Choose 
              <span className="text-primary"> LogiFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We don't just fulfill orders – we become an extension of your team, dedicated to 
              your success and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Competitive Advantages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the crowded fulfillment industry.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{advantage.icon}</div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {advantage.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Cutting-Edge Technology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proprietary technology stack ensures efficiency, accuracy, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Real-time Inventory', status: 'Advanced' },
              { name: 'AI-Powered Routing', status: 'Proprietary' },
              { name: 'Automated QC', status: 'Industry Leading' },
              { name: 'Predictive Analytics', status: 'Machine Learning' },
              { name: 'API Integration', status: '50+ Platforms' },
              { name: 'Mobile Dashboard', status: 'Real-time' }
            ].map((tech, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                <span className="font-medium">{tech.name}</span>
                <Badge variant="secondary">{tech.status}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from businesses that have transformed 
              their operations with LogiFlow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "LogiFlow reduced our fulfillment costs by 30% while improving delivery times. Their team truly cares about our success.",
                author: "Sarah Chen",
                title: "CEO, EcoHome Products",
                company: "Growing 200% YoY"
              },
              {
                quote: "The real-time analytics and reporting have given us insights we never had before. Game-changing for our inventory management.",
                author: "Mike Rodriguez",
                title: "Operations Director, TechGear",
                company: "$2M+ Annual Revenue"
              },
              {
                quote: "Switching to LogiFlow was the best decision we made. Our customer satisfaction scores have never been higher.",
                author: "Emily Thompson",
                title: "Founder, Artisan Crafts",
                company: "500% Growth in 2 Years"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <blockquote className="text-sm italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <Badge variant="outline" className="text-xs">{testimonial.company}</Badge>
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

export default WhyUsPage
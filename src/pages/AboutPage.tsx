import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Award, MapPin, Calendar } from '@phosphor-icons/react'

const AboutPage = () => {
  const stats = [
    { value: '15+', label: 'Years in Business' },
    { value: '500+', label: 'Happy Clients' },
    { value: '10M+', label: 'Orders Processed' },
    { value: '50+', label: 'Team Members' }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP of Operations at major e-commerce company with 20+ years in logistics.',
      image: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      bio: 'Technology leader with expertise in automation and warehouse management systems.',
      image: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      bio: 'International logistics expert specializing in global fulfillment strategies.',
      image: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'VP of Customer Success',
      bio: 'Customer experience specialist focused on building long-term partnerships.',
      image: 'DT'
    }
  ]

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started as a small fulfillment center serving local e-commerce businesses.'
    },
    {
      year: '2012',
      title: 'First Major Platform Integration',
      description: 'Launched our first API integration with Shopify, revolutionizing order processing.'
    },
    {
      year: '2015',
      title: 'National Expansion',
      description: 'Opened our second facility and began serving customers nationwide.'
    },
    {
      year: '2018',
      title: 'International Shipping',
      description: 'Launched comprehensive international shipping capabilities.'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Implemented AI-powered inventory management and predictive analytics.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as one of the top fulfillment providers with 500+ clients served.'
    }
  ]

  const values = [
    {
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers and their success.'
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in technology and processes to stay ahead of industry trends.'
    },
    {
      title: 'Reliability',
      description: 'Our clients depend on us, and we take that responsibility seriously every single day.'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest pricing with no hidden fees or surprises.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              About 
              <span className="text-primary"> LogiFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              For over 15 years, we've been helping businesses scale their operations 
              with reliable, innovative fulfillment solutions.
            </p>
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower businesses of all sizes with world-class fulfillment solutions that 
                  scale seamlessly, reduce complexity, and drive growth. We believe that exceptional 
                  logistics should be accessible to every entrepreneur and business owner.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted fulfillment partner for growing businesses worldwide, 
                  known for our innovation, reliability, and unwavering commitment to customer success.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Why We Started LogiFlow</h3>
              <p className="text-muted-foreground mb-6">
                After experiencing firsthand the frustrations of unreliable fulfillment partners, 
                our founder Sarah Johnson set out to create a different kind of company—one that 
                truly partners with its clients for long-term success.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve over 500 businesses, from startups to established 
                brands, helping them focus on what they do best while we handle the logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small local operation to a nationally recognized fulfillment leader.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((milestone, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-primary text-primary-foreground">{milestone.year}</Badge>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced leaders driving innovation in fulfillment technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {member.image}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically located fulfillment centers to serve customers nationwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'West Coast Hub',
                address: '123 Logistics Drive\nCommerce City, CO 80022',
                features: ['Primary Hub', '200,000 sq ft', '24/7 Operations']
              },
              {
                name: 'East Coast Hub',
                address: '456 Distribution Way\nNewark, NJ 07102',
                features: ['Secondary Hub', '150,000 sq ft', 'Same-day Shipping']
              },
              {
                name: 'Central Hub',
                address: '789 Supply Chain Blvd\nDallas, TX 75201',
                features: ['Returns Center', '100,000 sq ft', 'Specialized Processing']
              }
            ].map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin size={24} className="text-primary" />
                    <CardTitle className="text-lg">{location.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground whitespace-pre-line">
                    {location.address}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Partner With Us?</h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of businesses that trust LogiFlow with their fulfillment operations. 
              Let's discuss how we can support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule a Tour</Button>
              <Button size="lg" variant="outline">Contact Our Team</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
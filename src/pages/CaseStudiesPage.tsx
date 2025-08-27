import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendUp, Clock, DollarSign, Users } from '@phosphor-icons/react'

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      company: 'EcoHome Products',
      industry: 'Home & Garden',
      logo: 'EH',
      challenge: 'Struggling with 3-day fulfillment times and 15% shipping errors during seasonal peaks',
      solution: 'Implemented automated picking system and dedicated seasonal workforce scaling',
      results: [
        { metric: '85%', label: 'Faster Fulfillment', icon: <Clock size={20} /> },
        { metric: '30%', label: 'Cost Reduction', icon: <DollarSign size={20} /> },
        { metric: '99.5%', label: 'Order Accuracy', icon: <TrendUp size={20} /> },
        { metric: '200%', label: 'Growth Supported', icon: <Users size={20} /> }
      ],
      testimonial: {
        quote: "LogiFlow transformed our operations. We went from dreading peak season to looking forward to the growth opportunities it brings.",
        author: "Sarah Chen",
        title: "CEO & Founder"
      },
      tags: ['B2C', 'Seasonal Business', 'High Volume']
    },
    {
      company: 'TechGear Pro',
      industry: 'Electronics',
      logo: 'TG',
      challenge: 'Complex product configurations and need for specialized packaging for fragile electronics',
      solution: 'Custom kitting services and specialized packaging protocols for electronic components',
      results: [
        { metric: '95%', label: 'Damage Reduction', icon: <TrendUp size={20} /> },
        { metric: '60%', label: 'Faster Assembly', icon: <Clock size={20} /> },
        { metric: '40%', label: 'Packaging Savings', icon: <DollarSign size={20} /> },
        { metric: '500%', label: 'Scale Increase', icon: <Users size={20} /> }
      ],
      testimonial: {
        quote: "The specialized handling of our electronic components has reduced damage claims to virtually zero. Their kitting service is exceptional.",
        author: "Mike Rodriguez",
        title: "Operations Director"
      },
      tags: ['B2B', 'Electronics', 'Kitting']
    },
    {
      company: 'Artisan Crafts Co',
      industry: 'Handmade Goods',
      logo: 'AC',
      challenge: 'Unique packaging requirements for handmade items and international shipping complexity',
      solution: 'Custom packaging solutions and streamlined international shipping with compliance handling',
      results: [
        { metric: '150%', label: 'International Sales', icon: <TrendUp size={20} /> },
        { metric: '25%', label: 'Packaging Cost Reduction', icon: <DollarSign size={20} /> },
        { metric: '48hrs', label: 'Processing Time', icon: <Clock size={20} /> },
        { metric: '45', label: 'Countries Reached', icon: <Users size={20} /> }
      ],
      testimonial: {
        quote: "Their attention to our unique packaging needs and international expertise opened up global markets we never thought possible.",
        author: "Emily Thompson",
        title: "Founder"
      },
      tags: ['International', 'Custom Packaging', 'Artisan']
    }
  ]

  const industries = [
    'E-commerce', 'Electronics', 'Fashion', 'Health & Beauty', 
    'Home & Garden', 'Sports & Outdoors', 'Books & Media', 'Automotive'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Success 
              <span className="text-primary"> Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how businesses like yours have transformed their operations and 
              achieved remarkable growth with LogiFlow.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="space-y-8">
                {/* Company Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-xl font-bold">
                    {study.logo}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{study.company}</h2>
                    <p className="text-muted-foreground">{study.industry}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-auto">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-destructive">The Challenge</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{study.challenge}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">Our Solution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{study.solution}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Client Testimonial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="italic mb-4">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm">
                          <div className="font-semibold">{study.testimonial.author}</div>
                          <div className="text-muted-foreground">{study.testimonial.title}, {study.company}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Results Achieved</h3>
                    {study.results.map((result, resultIndex) => (
                      <Card key={resultIndex}>
                        <CardContent className="pt-6">
                          <div className="flex items-center space-x-3">
                            <div className="text-primary">{result.icon}</div>
                            <div>
                              <div className="text-2xl font-bold text-primary">{result.metric}</div>
                              <div className="text-sm text-muted-foreground">{result.label}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {index < caseStudies.length - 1 && (
                  <div className="border-b border-border pt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our flexible platform adapts to the unique needs of various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-4 bg-background rounded-lg border">
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join these successful businesses and discover how LogiFlow can transform 
              your fulfillment operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule Your Demo</Button>
              <Button size="lg" variant="outline">Download Case Studies</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from '@phosphor-icons/react'
import { toast } from 'sonner'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: 'general_inquiry'
        })
      })

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Visit Us',
      details: ['123 Logistics Drive', 'Commerce City, CO 80022', 'United States']
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Toll-free: 1-800-LOGIFLOW', 'International: +1 (555) 123-4568']
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email Us',
      details: ['sales@logiflow.com', 'support@logiflow.com', 'partnerships@logiflow.com']
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM PST', 'Saturday: 9:00 AM - 2:00 PM PST', 'Sunday: Closed (Emergency support available)']
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Get In 
              <span className="text-primary"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your fulfillment operations? Let's discuss how LogiFlow 
              can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-4 mb-8">
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select onValueChange={(value) => handleChange('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="quote">Request Quote</SelectItem>
                      <SelectItem value="demo">Schedule Demo</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your fulfillment needs, current challenges, or any questions you have..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here are all the ways you can contact us.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        {info.icon}
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardHeader>
                  <CardTitle>Need Immediate Assistance?</CardTitle>
                  <CardDescription>
                    For urgent matters or existing customers, use these quick contact options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="tel:+15551234567">Call Now: (555) 123-4567</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:support@logiflow.com">Email Support</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How quickly can I get started?',
                answer: 'Most clients can begin fulfillment within 2-3 weeks of signing up, including inventory transfer and system integration.'
              },
              {
                question: 'What platforms do you integrate with?',
                answer: 'We integrate with 50+ platforms including Shopify, WooCommerce, Amazon, eBay, and custom APIs.'
              },
              {
                question: 'Do you handle international shipping?',
                answer: 'Yes, we ship to over 200 countries worldwide with competitive rates and full tracking.'
              },
              {
                question: 'What are your minimum volume requirements?',
                answer: 'We work with businesses of all sizes, from startups to enterprises. No minimum volume requirements.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Truck, Package, Users, CreditCard, Tag, ArrowRight } from '@phosphor-icons/react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Truck size={40} className="text-primary" />,
      title: 'Fulfillment',
      description: 'End-to-end order fulfillment with lightning-fast processing and 99.8% accuracy.',
      features: ['Same-day processing', 'Multi-channel integration', 'Real-time tracking', 'Custom packaging'],
      link: '/services/fulfillment',
      badge: 'Most Popular'
    },
    {
      icon: <Package size={40} className="text-primary" />,
      title: 'Returns & RMA',
      description: 'Streamlined return processing that turns potential losses into customer loyalty.',
      features: ['Automated processing', 'Quality inspection', 'Inventory restocking', 'Customer communication'],
      link: '/services/returns-rma',
      badge: null
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: 'Customer Service',
      description: '24/7 multilingual support that represents your brand with excellence.',
      features: ['24/7 availability', 'Multilingual support', 'Brand training', 'Escalation protocols'],
      link: '/services/customer-service',
      badge: null
    },
    {
      icon: <CreditCard size={40} className="text-primary" />,
      title: 'Billing & Rate Cards',
      description: 'Transparent pricing and flexible billing options tailored to your business model.',
      features: ['Transparent pricing', 'Custom rate cards', 'Volume discounts', 'Detailed reporting'],
      link: '/services/billing-ratecards',
      badge: null
    },
    {
      icon: <Tag size={40} className="text-primary" />,
      title: 'UPC Labeling',
      description: 'Professional labeling and barcoding services for seamless inventory management.',
      features: ['UPC generation', 'Custom labeling', 'Compliance standards', 'Bulk processing'],
      link: '/services/upc-labeling',
      badge: null
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Integration',
      description: 'Connect your store to our platform in minutes with our seamless API integration.'
    },
    {
      step: '02',
      title: 'Inventory Sync',
      description: 'Send your products to our warehouse and sync inventory across all channels.'
    },
    {
      step: '03',
      title: 'Order Processing',
      description: 'We receive, pick, pack, and ship your orders with industry-leading accuracy.'
    },
    {
      step: '04',
      title: 'Analytics & Growth',
      description: 'Monitor performance with real-time analytics and scale your business confidently.'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Complete 
              <span className="text-primary"> Fulfillment Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From warehousing to customer service, we provide end-to-end solutions 
              that scale with your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fulfillment solutions designed to handle every aspect of your logistics needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full group hover:shadow-lg transition-all">
                <CardHeader className="relative">
                  {service.badge && (
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      {service.badge}
                    </Badge>
                  )}
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className="block">
                    <Button className="w-full group-hover:bg-primary/90">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with LogiFlow is simple. Follow these four steps to transform your fulfillment operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
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
                  Why Choose Our Services?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our comprehensive service portfolio is designed to handle every aspect of your 
                  fulfillment needs, from the moment an order is placed to post-delivery support.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { metric: '99.8%', label: 'Order Accuracy' },
                  { metric: '24hrs', label: 'Processing Time' },
                  { metric: '50+', label: 'Platform Integrations' },
                  { metric: '24/7', label: 'Customer Support' }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                <p className="text-muted-foreground">
                  Let's discuss how our services can be tailored to your specific business needs.
                </p>
                <div className="space-y-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button size="lg" variant="outline" className="w-full">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Star } from '@phosphor-icons/react'

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'Setup Fee',
      description: 'Perfect for new businesses getting started with fulfillment',
      badge: 'Most Popular',
      features: [
        'Up to 100 orders/month',
        'Basic integration support',
        'Standard packaging',
        'Email support',
        'Real-time tracking',
        'Returns processing'
      ],
      pricing: {
        storage: '$0.50/cubic foot/month',
        picking: '$2.50/order',
        shipping: 'At cost + 5%',
        returns: '$3.00/return'
      }
    },
    {
      name: 'Growth',
      price: '$199',
      period: 'Setup Fee',
      description: 'Ideal for growing businesses with increasing volume',
      badge: null,
      features: [
        'Up to 1,000 orders/month',
        'Priority integration support',
        'Custom packaging options',
        'Phone & email support',
        'Advanced analytics',
        'Kitting services',
        'Multi-channel inventory'
      ],
      pricing: {
        storage: '$0.45/cubic foot/month',
        picking: '$2.25/order',
        shipping: 'At cost + 3%',
        returns: '$2.50/return'
      }
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Pricing',
      description: 'Tailored solutions for high-volume businesses',
      badge: 'Best Value',
      features: [
        'Unlimited orders',
        'Dedicated account manager',
        'Fully custom packaging',
        '24/7 priority support',
        'Custom integrations',
        'Advanced automation',
        'SLA guarantees',
        'Volume discounts'
      ],
      pricing: {
        storage: 'Volume pricing',
        picking: 'Negotiated rates',
        shipping: 'Preferred carrier rates',
        returns: 'Custom processing'
      }
    }
  ]

  const additionalServices = [
    { service: 'Kitting & Assembly', price: '$1.50 per kit' },
    { service: 'Quality Inspection', price: '$0.75 per item' },
    { service: 'Photography', price: '$5.00 per SKU' },
    { service: 'Gift Wrapping', price: '$3.00 per order' },
    { service: 'Custom Labeling', price: '$0.25 per label' },
    { service: 'Batch Processing', price: '$25.00 per batch' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Transparent 
              <span className="text-primary"> Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Simple, transparent pricing with no hidden fees. Pay only for what you use 
              and scale as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All plans include our core fulfillment services. Upgrade anytime as your business grows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative h-full ${plan.badge === 'Most Popular' ? 'border-primary shadow-lg' : ''}`}>
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Features Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Per-Unit Pricing:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span className="font-medium">{plan.pricing.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pick & Pack:</span>
                        <span className="font-medium">{plan.pricing.picking}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span className="font-medium">{plan.pricing.shipping}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Returns:</span>
                        <span className="font-medium">{plan.pricing.returns}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant={plan.badge === 'Most Popular' ? 'default' : 'outline'}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Optional services to enhance your fulfillment operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                <span className="font-medium">{service.service}</span>
                <Badge variant="secondary">{service.price}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Pricing FAQ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing structure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Are there any hidden fees?',
                answer: 'No hidden fees. You only pay for storage, picking, packing, and shipping. All costs are transparent and detailed in your monthly invoice.'
              },
              {
                question: 'Can I change plans anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'What if I exceed my plan limits?',
                answer: 'If you exceed your plan limits, you\'ll automatically be charged overage fees at the next tier\'s rates. We\'ll notify you and recommend upgrading.'
              },
              {
                question: 'Do you offer volume discounts?',
                answer: 'Yes, we offer volume discounts for high-volume accounts. Contact our sales team to discuss custom pricing for your specific needs.'
              },
              {
                question: 'How is shipping calculated?',
                answer: 'Shipping is charged at carrier rates plus a small markup. Enterprise customers get access to our preferred carrier rates.'
              },
              {
                question: 'Is there a contract commitment?',
                answer: 'No long-term contracts required. All plans are month-to-month with 30 days notice for cancellation.'
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

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of businesses that trust LogiFlow with their fulfillment needs. 
              No setup fees for the first 100 customers this month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">Schedule Demo</Button>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <Star size={16} className="text-yellow-500 fill-current" />
              <Star size={16} className="text-yellow-500 fill-current" />
              <Star size={16} className="text-yellow-500 fill-current" />
              <Star size={16} className="text-yellow-500 fill-current" />
              <Star size={16} className="text-yellow-500 fill-current" />
              <span className="ml-2">4.9/5 stars from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
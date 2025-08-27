import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, CreditCard, FileText, BarChart3 } from '@phosphor-icons/react'

const BillingRatecardsPage = () => {
  const features = [
    {
      icon: <CreditCard size={32} className="text-primary" />,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or surprise charges.'
    },
    {
      icon: <FileText size={32} className="text-primary" />,
      title: 'Custom Rate Cards',
      description: 'Tailored pricing structures based on your specific volume and needs.'
    },
    {
      icon: <BarChart3 size={32} className="text-primary" />,
      title: 'Detailed Reporting',
      description: 'Comprehensive billing reports with full cost breakdowns and analytics.'
    }
  ]

  const billingOptions = [
    'Pay-per-use with competitive rates',
    'Volume-based discounts for high-volume clients',
    'Dedicated pricing for enterprise customers',
    'Flexible payment terms and billing cycles',
    'Real-time cost tracking and alerts',
    'Detailed invoicing with service breakdowns'
  ]

  const rateComponents = [
    {
      service: 'Storage',
      rate: '$0.50/cubic foot/month',
      description: 'Warehouse space for your inventory'
    },
    {
      service: 'Pick & Pack',
      rate: '$2.50/order',
      description: 'Order processing and packaging'
    },
    {
      service: 'Shipping',
      rate: 'Carrier cost + 3%',
      description: 'Shipping costs with small markup'
    },
    {
      service: 'Returns',
      rate: '$3.00/return',
      description: 'Return processing and inspection'
    },
    {
      service: 'Kitting',
      rate: '$1.50/kit',
      description: 'Product bundling and assembly'
    },
    {
      service: 'Photography',
      rate: '$5.00/SKU',
      description: 'Professional product photography'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Billing & 
              <span className="text-primary"> Rate Cards</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent, flexible pricing with detailed reporting. Pay only for what 
              you use with custom rate cards tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Custom Quote</Button>
              <Button size="lg" variant="outline">View Sample Rates</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Transparent Billing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our billing system is designed for complete transparency and flexibility, 
              giving you full control over your fulfillment costs.
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

      {/* Rate Structure */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Standard Rate Structure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our competitive rates with volume discounts available for higher usage tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rateComponents.map((component, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{component.service}</CardTitle>
                    <Badge variant="secondary">{component.rate}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{component.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Options */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Flexible Billing Options
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose from various billing models and payment options that work 
                  best for your cash flow and business needs.
                </p>
              </div>
              <ul className="space-y-4">
                {billingOptions.map((option, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Volume Discounts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span>0-500 orders/month</span>
                    <Badge>Standard Rates</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span>500-2,000 orders/month</span>
                    <Badge variant="secondary">5% Discount</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span>2,000+ orders/month</span>
                    <Badge className="bg-primary">10% Discount</Badge>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  Calculate Your Costs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Features */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Billing Reports & Analytics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get detailed insights into your fulfillment costs with comprehensive reporting tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Daily Usage Reports',
                description: 'Real-time tracking of services used and costs incurred',
                frequency: 'Daily'
              },
              {
                title: 'Monthly Invoices',
                description: 'Detailed monthly invoices with service breakdowns',
                frequency: 'Monthly'
              },
              {
                title: 'Cost Analysis',
                description: 'Trend analysis and cost optimization recommendations',
                frequency: 'Quarterly'
              },
              {
                title: 'Custom Reports',
                description: 'Tailored reports for specific business requirements',
                frequency: 'On-Demand'
              }
            ].map((report, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{report.frequency}</Badge>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{report.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Payment Terms & Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Standard Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-primary">Net 30</div>
                  <p className="text-sm text-muted-foreground">
                    Standard payment terms for established businesses
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>Monthly invoicing</li>
                    <li>Credit check required</li>
                    <li>Auto-pay available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-center">Prepaid Account</CardTitle>
                  <Badge className="mx-auto">Recommended</Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-primary">2% Discount</div>
                  <p className="text-sm text-muted-foreground">
                    Prepay and save on all services
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>Flexible top-ups</li>
                    <li>Real-time balance</li>
                    <li>No credit checks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Enterprise Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-primary">Custom</div>
                  <p className="text-sm text-muted-foreground">
                    Negotiated terms for high-volume accounts
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>Extended payment terms</li>
                    <li>Volume commitments</li>
                    <li>Dedicated billing manager</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Button size="lg">
              Discuss Custom Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BillingRatecardsPage
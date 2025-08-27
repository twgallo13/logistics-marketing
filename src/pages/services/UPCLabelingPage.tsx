import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Tag, Barcode, CheckSquare } from '@phosphor-icons/react'

const UPCLabelingPage = () => {
  const features = [
    {
      icon: <Barcode size={32} className="text-primary" />,
      title: 'UPC Generation',
      description: 'Generate unique UPC codes for all your products with GS1 compliance.'
    },
    {
      icon: <Tag size={32} className="text-primary" />,
      title: 'Custom Labeling',
      description: 'Professional labeling with your brand design and required information.'
    },
    {
      icon: <CheckSquare size={32} className="text-primary" />,
      title: 'Compliance Standards',
      description: 'Meet all retailer requirements and industry compliance standards.'
    }
  ]

  const services = [
    'UPC-A and EAN-13 barcode generation',
    'GS1 compliant barcode registration',
    'Custom label design and printing',
    'Product information verification',
    'Compliance checking for major retailers',
    'Bulk processing for large catalogs',
    'Digital asset management',
    'Quality control and verification'
  ]

  const labelTypes = [
    {
      type: 'Standard UPC Labels',
      description: 'Basic UPC labels with barcode and product information',
      features: ['UPC-A barcode', 'Product name', 'SKU number'],
      price: '$0.25 per label'
    },
    {
      type: 'Retail Compliance Labels',
      description: 'Enhanced labels meeting specific retailer requirements',
      features: ['UPC barcode', 'Vendor information', 'Compliance text', 'Custom sizing'],
      price: '$0.35 per label'
    },
    {
      type: 'Custom Brand Labels',
      description: 'Fully customized labels with your brand design',
      features: ['Custom design', 'Brand colors', 'Logo integration', 'Premium materials'],
      price: '$0.50 per label'
    }
  ]

  const complianceStandards = [
    'Amazon labeling requirements',
    'Walmart supplier standards',
    'Target vendor compliance',
    'GS1 global standards',
    'FDA labeling regulations',
    'Industry-specific requirements'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              UPC 
              <span className="text-primary"> Labeling</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional UPC generation and labeling services to ensure your products 
              meet all retailer requirements and compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">View Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Professional Labeling Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From UPC generation to custom label printing, we handle all aspects 
              of product labeling and compliance.
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

      {/* Label Types */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Label Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from standard options or create fully custom labels that represent your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labelTypes.map((label, index) => (
              <Card key={index} className={index === 1 ? 'border-primary' : ''}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {index === 1 && <Badge>Most Popular</Badge>}
                    <Badge variant="secondary">{label.price}</Badge>
                  </div>
                  <CardTitle className="text-lg">{label.type}</CardTitle>
                  <CardDescription>{label.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {label.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Choose This Option
                  </Button>
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
                  Complete Labeling Solutions
                </h2>
                <p className="text-lg text-muted-foreground">
                  From UPC generation to final label application, we provide 
                  end-to-end labeling services for your entire product catalog.
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
                <h3 className="text-2xl font-bold">Service Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24hrs</div>
                    <div className="text-sm text-muted-foreground">Turnaround Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Print Quality</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Labels/Day Capacity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Compliance Rate</div>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  Start Labeling Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Compliance Standards</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We ensure your labels meet all major retailer requirements and industry standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg border">
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <span className="font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Our Labeling Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, efficient process from UPC generation to final label application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Product Review',
                description: 'Review product information and compliance requirements'
              },
              {
                step: '02',
                title: 'UPC Generation',
                description: 'Generate unique UPC codes and register with GS1 if needed'
              },
              {
                step: '03',
                title: 'Label Design',
                description: 'Create compliant label designs with your brand elements'
              },
              {
                step: '04',
                title: 'Print & Apply',
                description: 'High-quality printing and professional label application'
              }
            ].map((step, index) => (
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
    </div>
  )
}

export default UPCLabelingPage
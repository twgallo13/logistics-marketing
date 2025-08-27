import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BookOpen, Video, FileText, TrendUp, Users, Search } from '@phosphor-icons/react'

const KnowledgeHubPage = () => {
  const featuredArticles = [
    {
      title: 'Complete Guide to E-commerce Fulfillment',
      description: 'Everything you need to know about setting up efficient fulfillment operations for your online business.',
      category: 'Guide',
      readTime: '15 min read',
      tags: ['Beginner', 'Fulfillment', 'E-commerce'],
      type: 'article'
    },
    {
      title: 'Optimizing Inventory Management for Seasonal Peaks',
      description: 'Strategies to prepare your inventory and fulfillment operations for high-volume periods.',
      category: 'Best Practices',
      readTime: '12 min read',
      tags: ['Advanced', 'Inventory', 'Seasonal'],
      type: 'article'
    },
    {
      title: 'International Shipping: Compliance and Best Practices',
      description: 'Navigate the complexities of international shipping with confidence.',
      category: 'Guide',
      readTime: '18 min read',
      tags: ['International', 'Compliance', 'Shipping'],
      type: 'article'
    }
  ]

  const resources = [
    {
      icon: <BookOpen size={32} className="text-primary" />,
      title: 'Fulfillment Guides',
      description: 'Comprehensive guides covering all aspects of fulfillment operations',
      count: '25+ guides',
      category: 'guides'
    },
    {
      icon: <Video size={32} className="text-primary" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video walkthroughs of our platform and best practices',
      count: '40+ videos',
      category: 'videos'
    },
    {
      icon: <FileText size={32} className="text-primary" />,
      title: 'Whitepapers',
      description: 'In-depth research and analysis on fulfillment trends and strategies',
      count: '15+ papers',
      category: 'whitepapers'
    },
    {
      icon: <TrendUp size={32} className="text-primary" />,
      title: 'Industry Reports',
      description: 'Latest trends and insights from the fulfillment industry',
      count: '8+ reports',
      category: 'reports'
    }
  ]

  const popularTopics = [
    'Getting Started with Fulfillment',
    'Inventory Management',
    'Shipping Optimization',
    'Returns Processing',
    'International Fulfillment',
    'Peak Season Preparation',
    'Cost Optimization',
    'Platform Integrations',
    'Quality Control',
    'Customer Service'
  ]

  const webinars = [
    {
      title: 'Scaling Your Fulfillment Operations',
      date: 'March 15, 2024',
      time: '2:00 PM PST',
      presenter: 'Sarah Johnson, VP of Operations',
      status: 'upcoming'
    },
    {
      title: 'Peak Season Preparation Strategies',
      date: 'February 20, 2024',
      presenter: 'Mike Chen, Senior Consultant',
      status: 'recorded'
    },
    {
      title: 'International Shipping Made Simple',
      date: 'January 25, 2024',
      presenter: 'Emily Rodriguez, Global Operations',
      status: 'recorded'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-background to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Knowledge 
              <span className="text-primary"> Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your complete resource center for fulfillment best practices, guides, 
              and industry insights.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles, guides, and resources..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Explore Our Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive guides, tutorials, and insights to optimize your fulfillment operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4">{resource.icon}</div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{resource.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular and recently updated guides and articles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">View All Articles</Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Popular Topics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick access to the most searched and valuable topics in our knowledge base.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <span className="text-sm font-medium">{topic}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Webinars & Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our expert-led webinars and access recorded sessions from industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Date:</span>
                      <span>{webinar.date}</span>
                    </div>
                    {webinar.time && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Time:</span>
                        <span>{webinar.time}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Presenter:</span>
                      <span>{webinar.presenter}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant={webinar.status === 'upcoming' ? 'default' : 'outline'}>
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Need Personalized Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Can't find what you're looking for? Our experts are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Contact Our Experts</Button>
              </Link>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KnowledgeHubPage
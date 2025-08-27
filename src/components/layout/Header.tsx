import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Menu, X } from '@phosphor-icons/react'
import ContactDialog from '@/components/ContactDialog'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [contactType, setContactType] = useState<'demo' | 'quote'>('demo')
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const serviceLinks = [
    { path: '/services/fulfillment', label: 'Fulfillment' },
    { path: '/services/returns-rma', label: 'Returns & RMA' },
    { path: '/services/customer-service', label: 'Customer Service' },
    { path: '/services/billing-ratecards', label: 'Billing & Rate Cards' },
    { path: '/services/upc-labeling', label: 'UPC Labeling' },
  ]

  const handleContactClick = (type: 'demo' | 'quote') => {
    setContactType(type)
    setShowContactDialog(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">LF</span>
            </div>
            <span className="font-bold text-xl">LogiFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/why-us"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/why-us') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    Why Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="grid gap-1">
                        <Link to="/services" className="block p-2 rounded-md hover:bg-accent">
                          <div className="text-sm font-medium">All Services</div>
                          <div className="text-xs text-muted-foreground">Complete overview of our offerings</div>
                        </Link>
                      </div>
                      <div className="grid gap-1">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block p-2 rounded-md hover:bg-accent text-sm"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/pricing') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/case-studies"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/case-studies') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    Case Studies
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/knowledge-hub"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/knowledge-hub') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    Knowledge Hub
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/about') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => handleContactClick('demo')}>
                Book Demo
              </Button>
              <Button onClick={() => handleContactClick('quote')}>
                Get Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/why-us"
                  className="text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Why Us
                </Link>
                
                <div className="space-y-2">
                  <Link
                    to="/services"
                    className="text-sm font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <div className="pl-4 space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="text-sm text-muted-foreground py-1 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/pricing"
                  className="text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>

                <Link
                  to="/case-studies"
                  className="text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>

                <Link
                  to="/knowledge-hub"
                  className="text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Knowledge Hub
                </Link>

                <Link
                  to="/about"
                  className="text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <div className="pt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      handleContactClick('demo')
                      setIsOpen(false)
                    }}
                  >
                    Book Demo
                  </Button>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      handleContactClick('quote')
                      setIsOpen(false)
                    }}
                  >
                    Get Quote
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <ContactDialog
        isOpen={showContactDialog}
        onClose={() => setShowContactDialog(false)}
        type={contactType}
      />
    </>
  )
}

export default Header
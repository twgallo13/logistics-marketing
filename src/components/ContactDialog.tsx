import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
  type: 'demo' | 'quote'
}

const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          type,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        toast.success(
          type === 'demo' 
            ? 'Demo request submitted! We\'ll contact you shortly.' 
            : 'Quote request submitted! We\'ll get back to you with pricing.'
        )
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        })
        onClose()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'demo' ? 'Book a Demo' : 'Get a Quote'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                required
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
            <Label htmlFor="service">Service Interest</Label>
            <Select onValueChange={(value) => handleChange('service', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulfillment">Fulfillment</SelectItem>
                <SelectItem value="returns-rma">Returns & RMA</SelectItem>
                <SelectItem value="customer-service">Customer Service</SelectItem>
                <SelectItem value="billing-ratecards">Billing & Rate Cards</SelectItem>
                <SelectItem value="upc-labeling">UPC Labeling</SelectItem>
                <SelectItem value="all">All Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder={
                type === 'demo' 
                  ? "Tell us about your fulfillment needs and what you'd like to see in the demo..."
                  : "Describe your fulfillment requirements for an accurate quote..."
              }
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : (type === 'demo' ? 'Book Demo' : 'Get Quote')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
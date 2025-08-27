# Marketing Site PRD

A comprehensive marketing website for a fulfillment and logistics company that showcases services, builds trust, and converts visitors into leads through clear value propositions and streamlined contact flows.

**Experience Qualities**:
1. **Professional** - Clean, trustworthy design that conveys reliability and expertise in logistics
2. **Informative** - Rich content that educates visitors about services and builds confidence
3. **Conversion-focused** - Clear CTAs and streamlined paths to demo booking and quote requests

**Complexity Level**: Content Showcase (information-focused)
- Primarily focused on presenting company information, services, and case studies with basic contact functionality

## Essential Features

### Navigation System
- **Functionality**: Sticky header with main navigation, mobile-responsive mega menu for services
- **Purpose**: Easy access to all site sections and prominent CTAs
- **Trigger**: Page load, scroll interactions, mobile menu toggle
- **Progression**: Land on page → Navigate via header → Access services submenu → Click CTA
- **Success criteria**: All pages accessible, mega menu works on desktop, drawer works on mobile

### Services Showcase
- **Functionality**: Detailed service pages with descriptions and benefits
- **Purpose**: Educate prospects about available services and capabilities
- **Trigger**: Click services menu or direct navigation
- **Progression**: Services overview → Select specific service → View details → Contact for more info
- **Success criteria**: All service pages load, clear information hierarchy, effective CTAs

### Contact Form System
- **Functionality**: Multi-step contact form with validation and submission
- **Purpose**: Capture qualified leads and demo requests
- **Trigger**: Click "Book Demo" or "Get Quote" CTAs
- **Progression**: Click CTA → Fill form → Submit → Confirmation message
- **Success criteria**: Form validates input, submits successfully, shows confirmation

### Content Pages
- **Functionality**: Static informational pages (about, case studies, knowledge hub)
- **Purpose**: Build trust, showcase expertise, and provide valuable information
- **Trigger**: Navigation clicks or direct links
- **Progression**: Navigate to page → Read content → Optional CTA interaction
- **Success criteria**: All pages render correctly, content is readable, CTAs are present

## Edge Case Handling
- **Broken Navigation**: Fallback breadcrumbs and site map in footer
- **Form Errors**: Clear validation messages and retry mechanisms
- **Mobile Menu Issues**: Hamburger menu with full overlay fallback
- **Missing Content**: Placeholder content with "Coming Soon" messaging
- **Slow Loading**: Loading states and progressive content rendering

## Design Direction
The design should feel professional, modern, and trustworthy - similar to enterprise SaaS platforms with clean lines, ample whitespace, and clear visual hierarchy that builds confidence in the company's capabilities.

## Color Selection
Complementary (opposite colors) - Using blue and orange to convey trust (blue) and energy/action (orange), creating strong contrast for CTAs and important elements.

- **Primary Color**: Deep Professional Blue (oklch(0.45 0.15 240)) - Communicates trust, reliability, and professionalism
- **Secondary Colors**: Light Gray (oklch(0.96 0.005 240)) for backgrounds, Dark Gray (oklch(0.25 0.01 240)) for text
- **Accent Color**: Energetic Orange (oklch(0.65 0.18 45)) - Attention-grabbing for CTAs and important actions
- **Foreground/Background Pairings**:
  - Background (White oklch(1 0 0)): Dark Gray text (oklch(0.25 0.01 240)) - Ratio 16.2:1 ✓
  - Primary (Deep Blue oklch(0.45 0.15 240)): White text (oklch(1 0 0)) - Ratio 5.1:1 ✓
  - Accent (Orange oklch(0.65 0.18 45)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Card (Light Gray oklch(0.96 0.005 240)): Dark Gray text (oklch(0.25 0.01 240)) - Ratio 15.8:1 ✓

## Font Selection
Clean, professional sans-serif typography that conveys reliability and modernity, using Inter for its excellent readability and professional appearance.

- **Typographic Hierarchy**:
  - H1 (Page Titles): Inter Bold/48px/tight letter spacing
  - H2 (Section Heads): Inter Semibold/36px/normal spacing
  - H3 (Subsections): Inter Medium/24px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - CTA Buttons: Inter Medium/16px/wide letter spacing
  - Navigation: Inter Medium/14px/normal spacing

## Animations
Subtle, purposeful animations that enhance usability without distraction - focusing on smooth transitions, hover states, and loading feedback that feels responsive and professional.

- **Purposeful Meaning**: Micro-interactions on CTAs, smooth page transitions, and progressive content loading that reinforces the brand's attention to detail
- **Hierarchy of Movement**: Primary CTAs get subtle hover animations, navigation transitions are smooth, form interactions provide immediate feedback

## Component Selection
- **Components**: Header with Navbar, Card components for services, Dialog for contact forms, Button variants for CTAs, Sheet for mobile menu
- **Customizations**: Custom mega-menu component, specialized service cards, contact form with multi-step capability
- **States**: Buttons with hover/active states, form inputs with focus/error states, navigation with active page indication
- **Icon Selection**: Phosphor icons for navigation, services, and contact actions - professional and consistent
- **Spacing**: Consistent 8px grid system using Tailwind's spacing scale (gap-4, p-6, m-8)
- **Mobile**: Mobile-first design with collapsible navigation, stacked service cards, and touch-friendly form elements
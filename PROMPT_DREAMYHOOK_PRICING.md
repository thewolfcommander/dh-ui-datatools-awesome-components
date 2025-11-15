# DreamyHook Pricing Component - Integration Prompt

You are given a task to create a beautiful pricing component following the DreamyHook brand guidelines.

## Tech Stack Requirements

This component should be built using:
- **Pure HTML** - Single file structure
- **Vanilla CSS** - No frameworks, using DreamyHook theme variables
- **Vanilla JavaScript** - No external dependencies
- **Responsive Design** - Mobile-first approach

## DreamyHook Brand Theme

### Color Palette
- **Primary:** Marigold Yellow (#FCBF49) - Main brand color
- **Secondary:** Midnight Blue (#0A1128) - Dark accents and text
- **Accent:** Buttercup Yellow (#FFD23F) - Bright highlights
- **Coral:** #FF6B4A - Warm CTAs
- **Sky Blue:** #0ea5e9 - Fresh accents

### Typography
- **Headings:** Poppins (400, 500, 600, 700, 800)
- **Body:** Inter (300, 400, 500, 600, 700)
- **Monospace:** JetBrains Mono

### Design Principles
- Light, warm theme with cream/golden backgrounds
- Soft shadows with warm golden glows
- Smooth animations and transitions
- Accessible and professional

## Component Specification

### Pricing Component Features

1. **Three-tier pricing cards:**
   - Starter Plan
   - Professional Plan (Popular)
   - Enterprise Plan

2. **Interactive Toggle:**
   - Monthly vs. Annual billing switch
   - Animated price transitions
   - Confetti effect on annual selection
   - 20% savings badge for annual billing

3. **Card Features:**
   - Plan name and description
   - Animated pricing display
   - Feature list with checkmarks
   - Call-to-action button
   - "Popular" badge for featured plan
   - Hover effects with golden glows

4. **Responsive Design:**
   - Desktop: 3-column grid with center card elevated
   - Tablet: 2-column or stacked layout
   - Mobile: Single column stack

5. **Animations:**
   - Smooth price number transitions
   - Card hover effects with golden glow
   - Slide-in animations on scroll
   - Toggle switch with confetti celebration

## Implementation Guidelines

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook Pricing</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* CSS variables and styles here */
    </style>
</head>
<body>
    <!-- Pricing component markup -->
    <script>
        /* JavaScript functionality */
    </script>
</body>
</html>
```

### CSS Requirements

1. **CSS Variables** (Use DreamyHook theme):
```css
:root {
    --color-primary: #FCBF49;
    --color-secondary: #0A1128;
    --color-accent: #FFD23F;
    --color-coral: #FF6B4A;
    --color-sky: #0ea5e9;
    /* ... other theme variables */
}
```

2. **Key Styles:**
   - Card layouts with flexbox/grid
   - Golden glow shadows on hover
   - Smooth transitions (0.3s ease)
   - Responsive breakpoints (768px, 480px)
   - Warm gradient backgrounds

3. **Animation Classes:**
   - `.fade-in` - Opacity transitions
   - `.slide-up` - Entrance animations
   - `.glow-marigold` - Hover effects
   - `.scale-up` - Interactive feedback

### JavaScript Requirements

1. **Toggle Functionality:**
   - Switch between monthly/annual pricing
   - Animate price changes smoothly
   - Update billing period text
   - Trigger confetti on annual selection

2. **Confetti Effect:**
   - Use canvas for particle animation
   - Golden/yellow color palette
   - Trigger from toggle switch position
   - Clean animation (50-100 particles)

3. **Number Animation:**
   - Smooth counting transitions
   - Currency formatting
   - Easing functions for natural motion

4. **Scroll Animations:**
   - Intersection Observer API
   - Stagger card entrances
   - Trigger animations once

## Sample Pricing Data

```javascript
const pricingPlans = [
  {
    name: "STARTER",
    monthlyPrice: 50,
    yearlyPrice: 40,
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support"
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    isPopular: false
  },
  {
    name: "PROFESSIONAL",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations"
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    isPopular: true
  },
  {
    name: "ENTERPRISE",
    monthlyPrice: 299,
    yearlyPrice: 239,
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement"
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    isPopular: false
  }
];
```

## Visual Design Requirements

### Colors Usage
- **Background:** Warm white (#fffef9) with subtle cream gradient
- **Cards:** White (#ffffff) with soft shadows
- **Primary CTA:** Marigold gradient (#FCBF49 to #f59e0b)
- **Popular Badge:** Buttercup yellow (#FFD23F) with star icon
- **Text:** Midnight blue (#0A1128) for headings, warm gray for body
- **Checkmarks:** Marigold yellow (#FCBF49)
- **Hover:** Golden glow (rgba(252, 191, 73, 0.3))

### Shadows & Effects
- **Card Shadow:** `0 4px 20px rgba(252, 191, 73, 0.15)` (warm golden)
- **Popular Card:** `0 10px 40px rgba(252, 191, 73, 0.2)` (stronger glow)
- **Hover Effect:** `0 0 30px rgba(252, 191, 73, 0.5)` (marigold glow)
- **Button Shadow:** `0 4px 15px rgba(255, 210, 63, 0.3)` (buttercup)

### Typography Scale
- **Title:** 3rem (48px), Poppins Bold, Midnight Blue
- **Subtitle:** 1.25rem (20px), Inter Regular, Warm Gray
- **Plan Name:** 1rem (16px), Poppins Semibold, uppercase
- **Price:** 3.5rem (56px), Poppins Bold, Midnight Blue
- **Features:** 1rem (16px), Inter Regular, Dark Gray
- **Button:** 1.125rem (18px), Poppins Semibold

### Spacing
- Section padding: 80px vertical
- Card padding: 48px
- Gap between cards: 24px
- Feature list spacing: 16px
- Button margin top: 32px

## Accessibility Requirements

1. **Semantic HTML:**
   - Proper heading hierarchy
   - Button vs. link usage
   - ARIA labels for interactive elements

2. **Keyboard Navigation:**
   - Tab order follows visual flow
   - Focus visible states
   - Enter/Space for toggle switch

3. **Color Contrast:**
   - WCAG AA compliant (4.5:1 for text)
   - Midnight blue on white: Excellent
   - White on Marigold: Ensure readable

4. **Screen Readers:**
   - Alt text for icons
   - Announce price changes
   - Label toggle switch properly

## Implementation Steps

1. **Setup HTML Structure:**
   - Create semantic layout
   - Add pricing section container
   - Build card grid
   - Include toggle switch

2. **Apply DreamyHook Styles:**
   - Import Google Fonts
   - Define CSS variables
   - Style cards with golden shadows
   - Add responsive breakpoints
   - Create hover animations

3. **Implement JavaScript:**
   - Toggle switch functionality
   - Price animation logic
   - Confetti canvas animation
   - Scroll-triggered entrances

4. **Polish & Test:**
   - Test all breakpoints
   - Verify animations
   - Check accessibility
   - Optimize performance

## Questions to Consider

- Should cards have subtle borders or rely on shadows?
- Should the popular plan have a different background color or just the badge?
- What should happen when hovering the popular plan?
- Should there be a "money-back guarantee" or trust badge?
- Should we include a FAQ section below pricing?
- What icons to use for checkmarks? (Unicode ✓ or SVG?)

## Final Output

The final HTML file should:
- Be completely self-contained (single file)
- Work without any build process
- Load quickly (< 100KB total)
- Look professional and polished
- Match DreamyHook brand exactly
- Be production-ready
- Include helpful code comments
- Follow modern best practices

## File Name Convention

Save as: `dreamyhook-pricing-component.html`

---

**Remember:** This is a vanilla HTML/CSS/JS implementation. No React, no Tailwind, no build tools. Just clean, modern web fundamentals with the beautiful DreamyHook brand aesthetic.

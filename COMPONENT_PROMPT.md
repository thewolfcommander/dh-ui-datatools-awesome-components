# DreamyHook Component Integration Guide
**Modified for Single HTML File Implementation**

## Overview
This guide provides instructions for creating standalone HTML components with the DreamyHook brand theme. All components are built using vanilla HTML, CSS, and JavaScript in a single file.

---

## Brand Theme Specification

### Color Palette

#### Primary Colors
- **Marigold Yellow**: `#FCBF49` - Main brand color, warm and golden
- **Midnight Blue**: `#0A1128` - Secondary brand color, deep and sophisticated
- **Buttercup Yellow**: `#FFD23F` - Bright accent color, cheerful

#### Accent Colors
- **Coral**: `#FF6B4A` - Warm accent for CTAs and highlights
- **Sky Blue**: `#0ea5e9` - Fresh accent for interactive elements

#### Neutral Colors (Warm Gray Palette)
- `#ffffff` - Pure white
- `#fffef9` - Warm white
- `#fffdf0` - Cream white
- `#fef9e7` - Light cream
- `#78716c` - Medium warm gray
- `#57534e` - Dark warm gray
- `#44403c` - Very dark warm gray
- `#292524` - Almost black warm gray
- `#1c1917` - Near black warm

#### Semantic Colors
- **Success**: `#22c55e` - Green for success states
- **Warning**: `#f59e0b` - Amber for warnings
- **Error**: `#ef4444` - Red for errors

### Typography

#### Font Families
```css
--font-heading: 'Poppins', ui-sans-serif, system-ui, sans-serif;
--font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

Import from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

#### Font Weights
- **Inter**: 300, 400, 500, 600, 700
- **Poppins**: 400, 500, 600, 700, 800

### Spacing System
```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 5rem;    /* 80px */
--spacing-4xl: 6rem;    /* 96px */
```

### Border Radius
```css
--radius-sm: 0.5rem;    /* 8px */
--radius-md: 1rem;      /* 16px */
--radius-lg: 1.5rem;    /* 24px */
--radius-xl: 2rem;      /* 32px */
```

### Shadows
```css
--shadow-soft: 0 2px 15px 0 rgba(10, 17, 40, 0.05);
--shadow-medium: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
--shadow-warm: 0 4px 20px 0 rgba(252, 191, 73, 0.15);
--shadow-marigold-glow: 0 0 30px 0 rgba(252, 191, 73, 0.25);
--shadow-yellow-glow: 0 0 30px 0 rgba(255, 210, 63, 0.3);
```

---

## Component Template Structure

### Basic HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - [Component Name]</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        /* CSS Variables - DreamyHook Theme */
        :root {
            /* Brand Colors */
            --color-primary: #FCBF49;
            --color-secondary: #0A1128;
            --color-accent: #FFD23F;
            --color-coral: #FF6B4A;
            --color-sky: #0ea5e9;

            /* Neutrals */
            --color-neutral-100: #ffffff;
            --color-neutral-200: #fffef9;
            --color-neutral-300: #fffdf0;
            --color-neutral-400: #fef9e7;
            --color-neutral-500: #78716c;
            --color-neutral-600: #57534e;
            --color-neutral-700: #44403c;
            --color-neutral-800: #292524;
            --color-neutral-900: #1c1917;

            /* Typography */
            --font-heading: 'Poppins', sans-serif;
            --font-body: 'Inter', sans-serif;

            /* Spacing */
            --spacing-xs: 0.5rem;
            --spacing-sm: 1rem;
            --spacing-md: 1.5rem;
            --spacing-lg: 2rem;
            --spacing-xl: 3rem;
            --spacing-2xl: 4rem;

            /* Border Radius */
            --radius-sm: 0.5rem;
            --radius-md: 1rem;
            --radius-lg: 1.5rem;

            /* Shadows */
            --shadow-soft: 0 2px 15px 0 rgba(10, 17, 40, 0.05);
            --shadow-medium: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
            --shadow-warm: 0 4px 20px 0 rgba(252, 191, 73, 0.15);
        }

        /* Base Styles */
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: var(--font-body);
            background: linear-gradient(135deg, var(--color-neutral-200) 0%, var(--color-neutral-400) 100%);
            color: var(--color-secondary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        /* Component-specific styles here */
    </style>
</head>
<body>
    <!-- Component HTML here -->

    <script>
        // Component JavaScript here
    </script>
</body>
</html>
```

---

## Implementation Guidelines

### 1. Component Structure
- Use semantic HTML5 elements
- Keep structure simple and accessible
- Use BEM naming convention for CSS classes when needed
- Ensure keyboard navigation support

### 2. Styling Approach
- **Mobile-first responsive design**
- Use CSS Grid or Flexbox for layouts
- Implement smooth transitions (0.3s ease)
- Apply hover states with DreamyHook glow effects
- Use CSS custom properties for theming

### 3. JavaScript Best Practices
- Use vanilla JavaScript (no frameworks)
- Implement event delegation for better performance
- Add proper error handling
- Clean up event listeners on page unload
- Use `requestAnimationFrame` for animations when needed

### 4. Responsive Breakpoints
```css
/* Tablet */
@media screen and (max-width: 991px) { }

/* Mobile Landscape */
@media screen and (max-width: 767px) { }

/* Mobile Portrait */
@media screen and (max-width: 479px) { }
```

### 5. Accessibility Requirements
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast (WCAG AA minimum)
- Semantic HTML structure

### 6. Performance Optimization
- Use CSS animations over JavaScript when possible
- Implement lazy loading for images
- Minimize DOM manipulations
- Use event delegation
- Optimize animations with `transform` and `opacity`

---

## Common Component Patterns

### Infinite Scroll Carousel
✅ **Implemented in**: `infinite-scroll-carousel.html`

**Features:**
- Auto-scrolling horizontal carousel
- Seamless infinite loop
- Pause on hover
- Responsive item sizing
- Smooth CSS animations
- Gradient fade edges

**Key Techniques:**
- Duplicate items for seamless loop
- CSS `transform: translateX()` for animation
- `@keyframes` for infinite scroll
- Fade gradients with pseudo-elements

### Card Components
**Styling Pattern:**
```css
.card {
    background: var(--color-neutral-100);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-warm);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-marigold-glow);
}
```

### Button Styles
**Primary Button:**
```css
.btn-primary {
    background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
    color: var(--color-neutral-100);
    border: none;
    border-radius: var(--radius-sm);
    padding: var(--spacing-sm) var(--spacing-lg);
    font-family: var(--font-heading);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-marigold-glow);
}
```

### Text Gradients
```css
.text-gradient-golden {
    background: linear-gradient(135deg, var(--color-primary) 0%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

## Component Checklist

Before finalizing any component, ensure:

- ✅ Uses DreamyHook brand colors
- ✅ Implements Inter and Poppins fonts
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Hover states with appropriate effects
- ✅ Accessible (ARIA, keyboard navigation)
- ✅ Single HTML file (no external dependencies)
- ✅ Clean, commented code
- ✅ Cross-browser compatible
- ✅ Performance optimized

---

## Example Components to Build

### 1. Hero Section
- Large heading with gradient text
- CTA buttons with hover effects
- Background pattern with warm colors

### 2. Feature Cards Grid
- Responsive grid layout
- Icon + title + description
- Hover lift effect with glow

### 3. Testimonials Slider
- Auto-rotating testimonials
- Smooth transitions
- Navigation dots

### 4. Pricing Cards
- 3-column responsive layout
- Highlighted "popular" option
- Hover effects with scale transform

### 5. Contact Form
- Styled inputs with focus states
- Validation feedback
- Submit button with loading state

### 6. Navigation Menu
- Mobile hamburger menu
- Smooth transitions
- Sticky header on scroll

---

## Color Usage Guidelines

### When to Use Each Color

**Marigold Yellow (#FCBF49)**
- Primary CTAs
- Active states
- Important highlights
- Brand elements

**Midnight Blue (#0A1128)**
- Headings
- Body text
- Borders
- Dark UI elements

**Buttercup Yellow (#FFD23F)**
- Accents
- Hover states
- Icons
- Decorative elements

**Coral (#FF6B4A)**
- Secondary CTAs
- Alerts/notifications
- Links
- Warm accents

**Sky Blue (#0ea5e9)**
- Information states
- Links
- Cool accents
- Interactive elements

---

## Animation Guidelines

### Timing Functions
```css
/* Standard easing */
transition: all 0.3s ease;

/* Smooth entrance */
animation: fadeIn 0.6s ease-out forwards;

/* Bounce effect */
animation: bounceSoft 1s ease-in-out infinite;

/* Continuous movement */
animation: float 3s ease-in-out infinite;
```

### Common Keyframes
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

---

## Resources & Tools

### Design Tools
- Figma (for mockups)
- ColorZilla (color picker)
- WhatFont (font identifier)

### Testing Tools
- Chrome DevTools (responsive testing)
- WAVE (accessibility checker)
- Lighthouse (performance audit)

### References
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

---

## Support & Contribution

For questions or suggestions regarding the DreamyHook component library:
- Review existing components in the repository
- Follow the brand guidelines strictly
- Test on multiple devices and browsers
- Document any new patterns or utilities

---

**Last Updated**: November 15, 2025
**Version**: 1.0.0
**Brand**: DreamyHook

# DreamyHook Hero Section - Integration Guide

## Modified Prompt for DreamyHook Brand Theme (HTML/CSS/JavaScript)

You are given a task to create a stunning hero section component using DreamyHook brand theme.

The implementation should use:
- **Single HTML file** with inline CSS and JavaScript
- **DreamyHook brand colors**: Marigold Yellow (#FCBF49), Midnight Blue (#0A1128), Buttercup Yellow (#FFD23F)
- **Vanilla JavaScript** (no frameworks)
- **Responsive design** with mobile-first approach
- **Accessibility** features (ARIA labels, keyboard navigation)

---

## Brand Theme Overview

### Primary Colors
- **Primary**: Marigold Yellow (#FCBF49) - Main brand color, warm and golden
- **Secondary**: Midnight Blue (#0A1128) - Deep, sophisticated accent
- **Accent**: Buttercup Yellow (#FFD23F) - Bright, cheerful highlight
- **Coral**: #FF6B4A - Warm accent for CTAs
- **Sky Blue**: #0ea5e9 - Fresh, airy accent

### Typography
- **Headings**: Poppins (weights: 400, 500, 600, 700, 800)
- **Body**: Inter (weights: 300, 400, 500, 600, 700)
- **Monospace**: JetBrains Mono

### Design Principles
1. **Light Theme**: Warm white backgrounds (#fffef9, #fef9e7)
2. **Golden Glow Effects**: Use box-shadow with marigold/buttercup colors
3. **Soft Animations**: Fade-in, slide-up, glow effects
4. **Warm Gradients**: Linear gradients combining yellow tones
5. **Rounded Corners**: Modern border-radius (0.5rem to 2rem)

---

## Component Structure

The hero section includes:

1. **Badge** - Small announcement banner with link
2. **Title** - Large, gradient text heading
3. **Description** - Subtitle explaining the value proposition
4. **Action Buttons** - Primary (golden gradient) and secondary (midnight blue) CTAs
5. **Hero Image** - Mockup with frame and golden glow effect
6. **Animations** - Staggered fade-in effects for elements

---

## Implementation Guidelines

### 1. File Structure
Create a single `hero-section.html` file containing:
- HTML markup in `<body>`
- CSS styles in `<style>` tag
- JavaScript in `<script>` tag
- Google Fonts link in `<head>`

### 2. Color Usage
```css
/* Primary Actions */
background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);

/* Text */
color: #0A1128; /* Midnight blue for dark text */

/* Backgrounds */
background: linear-gradient(135deg, #ffffff 0%, #fffef9 100%);

/* Glow Effects */
box-shadow: 0 0 30px 0 rgba(255, 210, 63, 0.3);
```

### 3. Typography Scale
```css
/* Hero Title */
font-size: clamp(2.5rem, 5vw, 5rem);
font-family: 'Poppins', sans-serif;
font-weight: 700;

/* Description */
font-size: clamp(1rem, 2vw, 1.25rem);
font-family: 'Inter', sans-serif;
font-weight: 500;
```

### 4. Animation Timeline
```css
/* Stagger animations with delays */
.hero-badge    { animation-delay: 0s; }
.hero-title    { animation-delay: 0.1s; }
.hero-description { animation-delay: 0.2s; }
.hero-actions  { animation-delay: 0.3s; }
.hero-image    { animation-delay: 0.7s; }
.glow          { animation-delay: 1s; }
```

### 5. Responsive Breakpoints
```css
/* Tablet and below */
@media (max-width: 768px) {
  --section-padding-y: 4rem;
  /* Stack buttons vertically */
}

/* Mobile */
@media (max-width: 480px) {
  /* Reduce font sizes and spacing */
}
```

---

## Assets & Resources

### Images
Use Unsplash for placeholder images:
- **Dashboard/UI Preview**: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe`
- **Code Editor**: `https://images.unsplash.com/photo-1555066931-4365d14bab8c`
- **Analytics Dashboard**: `https://images.unsplash.com/photo-1551288049-bebda4e38f71`

### Icons
Use inline SVG icons for:
- Arrow Right (for badge link)
- GitHub logo (for GitHub button)
- External link icons

### Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Accessibility Checklist

- [ ] All images have descriptive `alt` attributes
- [ ] Links have clear, descriptive text
- [ ] Buttons are keyboard accessible (Tab, Enter, Space)
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Focus states are visible for all interactive elements
- [ ] Smooth scroll behavior for anchor links
- [ ] Semantic HTML5 elements (`<section>`, `<h1>`, etc.)

---

## Customization Instructions

To customize for different projects:

1. **Update Badge**: Change text and link in the `.hero-badge` element
2. **Modify Title**: Edit the `<h1>` content
3. **Change Description**: Update the `.hero-description` paragraph
4. **Adjust Buttons**: Modify `href` and text in `.hero-actions` links
5. **Replace Image**: Update the `src` in the `.mockup img` element
6. **Tweak Colors**: Adjust CSS variables in `:root`

---

## Integration Steps

1. **Copy the HTML file** to your project directory
2. **Open in browser** to verify the design
3. **Customize content** (title, description, buttons, image)
4. **Test responsiveness** on different screen sizes
5. **Validate accessibility** using browser dev tools
6. **Deploy** to your hosting platform

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (latest)

---

## Performance Optimization

- Fonts are loaded with `display=swap` for better performance
- Images should be optimized (WebP format, compressed)
- CSS is minified in production
- Animations use CSS instead of JavaScript for better performance
- Glow effects use CSS `box-shadow` and `radial-gradient`

---

## Questions to Consider

Before implementing:

1. **What is the main call-to-action?** (Get Started, Sign Up, etc.)
2. **What image best represents your product?** (Dashboard, mockup, etc.)
3. **Do you need dark mode support?** (Currently light theme only)
4. **What are your brand colors?** (Already configured for DreamyHook)
5. **Where will this hero section be used?** (Landing page, product page, etc.)

---

## Example Content Variations

### SaaS Product
- Badge: "Now in Beta"
- Title: "Automate your workflow with AI"
- CTA: "Start Free Trial"

### Component Library
- Badge: "200+ Components"
- Title: "Build faster with beautiful components"
- CTA: "Browse Components"

### Agency
- Badge: "Award-winning Team"
- Title: "We create digital experiences"
- CTA: "View Our Work"

---

## File Output

The implementation creates:
- `dreamyhook-hero-section.html` - Single file with all code
- No external dependencies required
- Works standalone without build tools
- Ready to deploy to any static hosting

---

## Support & Resources

- [DreamyHook Brand Guidelines](./tailwind.config.js)
- [CSS Custom Properties](./globals.css)
- [Google Fonts](https://fonts.google.com)
- [Unsplash Images](https://unsplash.com)

---

**Created for**: DreamyHook UI Component Library
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript
**License**: Use freely in your projects
**Version**: 1.0.0

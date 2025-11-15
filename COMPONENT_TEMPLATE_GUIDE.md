# DreamyHook Component Template Guide

## Modified Prompt for HTML/CSS/JavaScript Single File Components

This guide provides a template for creating single-file HTML components with DreamyHook branding.

---

## Component Integration Template

You are given a task to create a standalone HTML component for the DreamyHook brand.

The component should support:
- **Single HTML file** with embedded CSS and JavaScript
- **DreamyHook brand theme** (Marigold Yellow #FCBF49, Midnight Blue #0A1128, Buttercup Yellow #FFD23F)
- **Vanilla JavaScript** (no frameworks)
- **Responsive design**
- **Performance optimization**

### Brand Theme Colors

```css
/* Primary Colors */
--color-primary: #FCBF49;        /* Marigold Yellow - primary brand color */
--color-secondary: #0A1128;      /* Midnight Blue - secondary brand color */
--color-accent: #FFD23F;         /* Buttercup Yellow - bright accent */
--color-coral: #FF6B4A;          /* Coral - warm accent for CTAs */
--color-sky: #0ea5e9;            /* Sky Blue - fresh accent */

/* Neutral Colors */
--color-neutral-100: #ffffff;    /* Pure white */
--color-neutral-200: #fffef9;    /* Warm white */
--color-neutral-300: #fffdf0;    /* Cream white */
--color-neutral-400: #fef9e7;    /* Light cream */
--color-neutral-500: #78716c;    /* Medium warm gray */
```

### Typography

```css
/* Fonts */
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-heading: "Poppins", ui-sans-serif, system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

### Design System

**Shadows:**
```css
box-shadow: 0 4px 25px 0 rgba(10, 17, 40, 0.1);     /* Medium elevation */
box-shadow: 0 0 30px 0 rgba(252, 191, 73, 0.25);    /* Marigold glow */
```

**Border Radius:**
```css
border-radius: 1rem;      /* Standard cards */
border-radius: 0.5rem;    /* Buttons and inputs */
```

**Gradients:**
```css
/* Warm background */
background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);

/* Golden gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);

/* Text gradient for headings */
background: linear-gradient(135deg, #FCBF49 0%, #f59e0b 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Implementation Guidelines

### 1. File Structure

Create a single `.html` file with:
- `<!DOCTYPE html>` declaration
- Embedded `<style>` tag with all CSS
- Embedded `<script>` tag with all JavaScript
- Semantic HTML5 structure

### 2. Component Requirements

**Analyze the component and:**
- Identify all required functionality
- Convert React/framework code to vanilla JavaScript
- Implement proper event listeners
- Use modern JavaScript features (ES6+)

**Questions to Ask:**
- What interactive features does this component need?
- What are the performance considerations?
- What customization options should be exposed?
- How should it behave on mobile devices?

### 3. Steps to Create

1. **HTML Structure**
   - Create semantic markup
   - Add proper ARIA attributes for accessibility
   - Include meta tags for responsive design

2. **CSS Styling**
   - Use CSS custom properties (CSS variables) for theming
   - Apply DreamyHook brand colors
   - Implement responsive breakpoints
   - Add smooth transitions and animations

3. **JavaScript Logic**
   - Use ES6 classes for component organization
   - Implement performance optimizations (requestAnimationFrame, Intersection Observer)
   - Add proper cleanup methods
   - Create configurable options

4. **Interactivity**
   - Add control panels for customization
   - Implement real-time updates
   - Handle window resize events
   - Support keyboard navigation

5. **Testing**
   - Test on different screen sizes
   - Verify performance (60fps animations)
   - Check accessibility
   - Validate color contrast ratios

---

## Example: FlickeringGrid Component

See `flickering-grid-dreamyhook.html` for a complete implementation example.

**Key Features:**
- Canvas-based rendering for performance
- Intersection Observer for efficient animations
- Customizable controls (size, gap, color, opacity)
- DreamyHook brand theme integration
- Fully responsive design
- Smooth 60fps animations

**Usage:**
```javascript
const container = document.getElementById('flickeringGrid');
const grid = new FlickeringGrid(container, {
    squareSize: 4,
    gridGap: 6,
    flickerChance: 0.3,
    color: '#0A1128',
    maxOpacity: 0.3
});
```

---

## Best Practices

### Performance
- Use `requestAnimationFrame` for smooth animations
- Implement Intersection Observer to pause animations when off-screen
- Use canvas for complex visual effects
- Minimize DOM manipulations

### Accessibility
- Add proper ARIA labels
- Support keyboard navigation
- Ensure sufficient color contrast
- Provide text alternatives for visual content

### Responsive Design
- Use relative units (rem, em, %)
- Implement mobile-first breakpoints
- Test on multiple devices
- Handle orientation changes

### Code Quality
- Use meaningful variable names
- Add comments for complex logic
- Follow consistent coding style
- Keep functions small and focused

---

## Brand Compliance Checklist

- [ ] Uses DreamyHook color palette
- [ ] Implements Inter/Poppins typography
- [ ] Applies warm gradient backgrounds
- [ ] Uses proper shadow system
- [ ] Includes marigold yellow accents
- [ ] Maintains midnight blue for text
- [ ] Follows border radius standards
- [ ] Implements smooth transitions

---

## Resources

- **Fonts:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) | [Poppins](https://fonts.google.com/specimen/Poppins)
- **Colors:** Use exact hex values from theme
- **Icons:** Recommended - FontAwesome, Feather Icons, or Heroicons

---

Built with DreamyHook brand guidelines © 2025

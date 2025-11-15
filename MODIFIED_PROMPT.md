# DreamyHook Moving Border Component - Integration Guide

## Overview
You are given a task to integrate a MovingBorder component in a single HTML file format.

The implementation should support:
- **Pure HTML/CSS/JavaScript** (single file only)
- **DreamyHook Brand Theme** (Marigold Yellow #FCBF49, Midnight Blue #0A1128, Buttercup Yellow #FFD23F)
- **GSAP Animation Library** for smooth border animations
- **Responsive Design** with mobile-first approach

## Brand Theme Colors

### Primary Colors
- **Marigold Yellow**: `#FCBF49` - Primary brand color (warm, golden)
- **Midnight Blue**: `#0A1128` - Secondary brand color (deep, sophisticated)
- **Buttercup Yellow**: `#FFD23F` - Bright accent color (cheerful)
- **Coral**: `#FF6B4A` - Warm accent for CTAs
- **Sky Blue**: `#0ea5e9` - Fresh accent

### Neutral Colors
- Pure White: `#ffffff`
- Warm White: `#fffef9`
- Cream White: `#fffdf0`
- Light Cream: `#fef9e7`
- Medium Warm Gray: `#78716c`
- Dark Warm Gray: `#57534e`
- Very Dark Warm Gray: `#44403c`
- Almost Black Warm Gray: `#292524`
- Near Black Warm: `#1c1917`

### Semantic Colors
- **Success**: `#22c55e` (Green)
- **Warning**: `#f59e0b` (Amber, matches marigold family)
- **Error**: `#ef4444` (Red)

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Heading Font**: Poppins (Google Fonts)
- **Monospace Font**: JetBrains Mono

## Component Structure

### MovingBorder Component
A versatile animated border component that creates a smooth gradient animation along the edges of any container.

#### Features:
- Customizable border width and gradient colors
- Support for rectangular and circular shapes
- Smooth GSAP-powered animations
- Responsive and adapts to container size changes
- DreamyHook brand theme integration

#### Configuration Options:
```javascript
{
  borderWidth: 1,           // Width of the border in pixels (default: 1)
  radius: 15,               // Border radius in pixels (default: 15)
  gradientWidth: null,      // Width of gradient effect (default: borderWidth * 10)
  duration: 3,              // Animation duration in seconds (default: 3)
  colors: ["#FCBF49"],      // Array of gradient colors (default: Marigold Yellow)
  isCircle: false           // Render as perfect circle (default: false)
}
```

## Implementation Guidelines

### Required External Dependencies
Include these CDN links in your HTML file:

1. **GSAP Core**: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
2. **GSAP ScrollTrigger**: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
3. **GSAP MotionPath**: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js`
4. **Google Fonts**:
   - Inter: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`
   - Poppins: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap`

### Steps to Integrate

#### 0. File Structure
Create a single HTML file (e.g., `moving-border-demo.html`) containing:
- HTML structure
- CSS styles (including DreamyHook theme variables)
- JavaScript (MovingBorder component logic)

#### 1. Setup HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DreamyHook Moving Border Component</title>
  <!-- Include external dependencies -->
</head>
<body>
  <!-- Component demo content -->
</body>
</html>
```

#### 2. Include DreamyHook CSS Theme
Add CSS variables for:
- Brand colors (Marigold, Midnight Blue, Buttercup)
- Neutral warm grays
- Semantic colors
- Typography (Inter, Poppins)
- Shadow system (soft, medium, hard, colored glows)
- Animation keyframes (fadeIn, slideUp, float, glow effects)

#### 3. Implement MovingBorder Component
Create a reusable JavaScript class or function that:
- Accepts configuration options
- Creates the animated border wrapper
- Initializes GSAP animations
- Handles responsive resize events
- Supports both rectangular and circular shapes

#### 4. Create Demo Examples
Include at least 2 demo variations:
- **Button with rounded rectangle border** (Marigold/Buttercup gradient)
- **Circular avatar with moving border** (Multi-color gradient)

### Design Specifications

#### Color Combinations to Use
1. **Primary Gradient**: `["#FFD23F", "#FCBF49"]` (Buttercup → Marigold)
2. **Warm Gradient**: `["#FFD23F", "#FCBF49", "#FF6B4A"]` (Buttercup → Marigold → Coral)
3. **Cool Accent**: `["#0ea5e9", "#FCBF49"]` (Sky Blue → Marigold)
4. **Success Theme**: `["#22c55e", "#FCBF49"]` (Green → Marigold)

#### Shadow Effects
- **Marigold Glow**: `box-shadow: 0 0 30px rgba(252, 191, 73, 0.5)`
- **Buttercup Glow**: `box-shadow: 0 0 30px rgba(255, 210, 63, 0.5)`
- **Warm Shadow**: `box-shadow: 0 4px 20px rgba(252, 191, 73, 0.15)`

#### Responsive Behavior
- Mobile Portrait (320px - 479px): Smaller border widths, compact spacing
- Mobile Landscape (480px - 767px): Medium sizing
- Tablet (768px - 991px): Standard sizing
- Desktop (992px+): Full-size with optimal spacing

### Questions to Ask Before Implementation

1. **What content will be wrapped in the border?**
   - Buttons, cards, avatars, form inputs, etc.

2. **What are the primary use cases?**
   - Call-to-action buttons, featured content, profile pictures, etc.

3. **What color schemes are preferred?**
   - Use DreamyHook primary colors or explore accent combinations

4. **What is the expected responsive behavior?**
   - Should border width scale on mobile devices?
   - Should animation speed change based on screen size?

5. **Are there any accessibility requirements?**
   - Reduced motion preferences
   - High contrast mode support
   - Keyboard focus states

### Best Practices

1. **Performance**
   - Use GSAP's efficient animation engine
   - Implement ResizeObserver for responsive updates
   - Avoid layout thrashing

2. **Accessibility**
   - Respect `prefers-reduced-motion` media query
   - Ensure sufficient color contrast
   - Maintain keyboard navigation support

3. **DreamyHook Brand Consistency**
   - Use official brand colors
   - Apply warm, welcoming aesthetic
   - Include subtle golden glow effects
   - Use Poppins for headings, Inter for body text

4. **Code Quality**
   - Comment complex animation logic
   - Use meaningful variable names
   - Follow consistent formatting
   - Include inline documentation

## Example Usage

### Basic Button
```javascript
createMovingBorder({
  element: document.getElementById('cta-button'),
  borderWidth: 2,
  radius: 10,
  gradientWidth: 60,
  duration: 3,
  colors: ["#FFD23F", "#FCBF49", "#FF6B4A"]
});
```

### Circular Avatar
```javascript
createMovingBorder({
  element: document.getElementById('profile-avatar'),
  borderWidth: 4,
  gradientWidth: 150,
  duration: 4,
  colors: ["#0ea5e9", "#FCBF49"],
  isCircle: true
});
```

## Assets and Resources

### Stock Images
Use Unsplash images for demo content:
- Avatars: `https://images.unsplash.com/photo-[random-id]`
- Backgrounds: Abstract gradients or warm-toned imagery

### Icons
For SVG icons, create simple inline SVGs or use Unicode symbols:
- Heart: `♥`
- Star: `★`
- Checkmark: `✓`

## Final Deliverable

A single, well-documented HTML file containing:
- ✅ Complete HTML structure
- ✅ DreamyHook CSS theme with all brand colors
- ✅ MovingBorder component JavaScript
- ✅ At least 2 demo examples
- ✅ Responsive design
- ✅ GSAP animations
- ✅ Clean, commented code
- ✅ Professional DreamyHook branding

## Testing Checklist

- [ ] Component renders correctly on all screen sizes
- [ ] Animations run smoothly (60fps)
- [ ] Border adapts to container size changes
- [ ] Colors match DreamyHook brand guidelines
- [ ] Works in modern browsers (Chrome, Firefox, Safari, Edge)
- [ ] Respects reduced motion preferences
- [ ] Code is clean and well-documented

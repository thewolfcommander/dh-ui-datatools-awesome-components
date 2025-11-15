# Modified Prompt: Pixel Trail Component for DreamyHook

## Overview
This document contains the modified prompt for creating a Pixel Trail interactive component using vanilla HTML, CSS, and JavaScript (single file) with the DreamyHook brand theme.

## Brand Theme Integration

### Color Palette
- **Primary**: Marigold Yellow (#FCBF49) - Main brand color
- **Secondary**: Midnight Blue (#0A1128) - Deep, sophisticated
- **Accent**: Buttercup Yellow (#FFD23F) - Bright, cheerful
- **Coral**: #FF6B4A - Warm accent for CTAs
- **Sky Blue**: #0ea5e9 - Fresh accent

### Typography
- **Heading Font**: Poppins
- **Body Font**: Inter
- **Monospace Font**: JetBrains Mono

### Design System
- Warm, golden gradients
- Soft shadows with warm tones
- Modern border radius (xl: 1rem, 2xl: 1.5rem, 3xl: 2rem)
- Glow effects using brand colors
- Light theme optimized (warm whites and creams)

---

## Task: Create Interactive Pixel Trail Component

### Objective
Create a single HTML file that implements an interactive pixel trail effect using vanilla JavaScript, CSS, and HTML. The component should:

1. **Display a pixel grid** that responds to mouse movements
2. **Animate pixels** with fade-out effects when the mouse moves over them
3. **Use DreamyHook brand colors** for the design
4. **Be fully responsive** across all device sizes
5. **Include demo content** showcasing the effect

### Technical Requirements

#### HTML Structure
- Single HTML file containing all HTML, CSS, and JavaScript
- Semantic HTML5 markup
- Responsive viewport meta tag
- Proper document structure

#### CSS Styling
- Use DreamyHook color palette:
  - Background: Warm white (#fffef9) or light cream (#fef9e7)
  - Pixel trail color: Coral (#FF6B4A) or Buttercup Yellow (#FFD23F)
  - Text: Midnight Blue (#0A1128)
- Google Fonts integration (Inter and Poppins)
- Mobile-first responsive design
- Smooth animations and transitions
- Warm gradient backgrounds

#### JavaScript Functionality
- Track mouse movement over the container
- Calculate pixel grid based on viewport dimensions
- Trigger pixel animations on hover
- Handle window resize events with debouncing
- Configurable parameters:
  - `pixelSize`: Size of each pixel (default: 80px desktop, 48px mobile)
  - `fadeDuration`: Duration of fade animation (default: 500ms)
  - `delay`: Delay before fade starts (default: 1200ms)

### Component Features

1. **Pixel Grid System**
   - Dynamically generate grid based on viewport size
   - Each pixel is a square div element
   - Grid recalculates on window resize

2. **Mouse Interaction**
   - Detect mouse position relative to container
   - Convert mouse coordinates to grid position
   - Trigger fade animation for hovered pixels
   - Smooth, performant animations

3. **Visual Design**
   - Hero section with centered content
   - Pixel trail in background layer (z-index management)
   - Typography hierarchy using Poppins for headings
   - Warm gradient background
   - Rounded pixels with glow effects

4. **Responsive Behavior**
   - Desktop (>768px): 80px pixels
   - Mobile (<768px): 48px pixels
   - Text scales appropriately
   - Touch-friendly spacing

### Demo Content

Include a demo showcasing the pixel trail with:
- **Main heading**: "DreamyHook ✨ Components"
- **Subheading**: "Interactive pixel trail with vanilla JavaScript"
- **Footer text**: "Built with performance in mind"
- Centered layout
- Pointer-events management (background interactive, content not)

### Performance Considerations

1. **Debounced resize handler** to prevent excessive recalculations
2. **Efficient DOM manipulation** - cache element references
3. **CSS transforms** for animations (GPU acceleration)
4. **RequestAnimationFrame** for smooth animations
5. **Minimal reflows and repaints**

### File Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Pixel Trail Component</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        /* CSS Variables for DreamyHook theme */
        /* Reset and base styles */
        /* Component styles */
        /* Responsive styles */
        /* Animations */
    </style>
</head>
<body>
    <!-- Component markup -->

    <script>
        // Pixel Trail implementation
        // Helper functions
        // Event listeners
        // Initialization
    </script>
</body>
</html>
```

### Success Criteria

- ✅ Single HTML file (no external dependencies except Google Fonts)
- ✅ Pixel trail effect works smoothly on mouse movement
- ✅ Responsive design works on mobile and desktop
- ✅ Uses DreamyHook brand colors and typography
- ✅ Clean, readable, well-commented code
- ✅ No console errors
- ✅ Optimized performance (60fps animations)
- ✅ Accessible (proper semantic HTML, keyboard considerations)

### Implementation Notes

1. **Grid Calculation**: `columns = Math.ceil(containerWidth / pixelSize)`, `rows = Math.ceil(containerHeight / pixelSize)`

2. **Pixel Animation**: Use CSS transitions or Web Animations API for fade effects

3. **Mouse Position**: Calculate relative position: `x = Math.floor((mouseX - containerLeft) / pixelSize)`, `y = Math.floor((mouseY - containerTop) / pixelSize)`

4. **Debouncing**: Implement resize debounce with ~250ms delay

5. **Unique IDs**: Generate unique pixel IDs for efficient targeting

### Color Usage Examples

- **Background gradient**: `linear-gradient(135deg, #fffef9 0%, #fef9e7 100%)`
- **Pixel color**: `#FF6B4A` (Coral) or `#FFD23F` (Buttercup)
- **Text**: `#0A1128` (Midnight Blue)
- **Pixel glow**: `box-shadow: 0 0 20px rgba(255, 210, 63, 0.3)`

---

## Expected Output

A fully functional, single-file HTML page that demonstrates the pixel trail effect with the DreamyHook brand aesthetic. The file should be production-ready, well-documented, and serve as a reusable component template.

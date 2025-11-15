# DreamyHook Dotted Surface - Integration Guide

## Overview
You are tasked with creating a standalone HTML file that implements an animated 3D dotted surface background component.

## Tech Stack Requirements
- **Single HTML File** containing all code
- **Vanilla JavaScript** (no frameworks)
- **Inline CSS** with DreamyHook brand theme
- **Three.js** (loaded via CDN)

## DreamyHook Brand Theme

### Color Palette
- **Primary**: Marigold Yellow (#FCBF49)
- **Secondary**: Midnight Blue (#0A1128)
- **Accent**: Buttercup Yellow (#FFD23F)
- **Coral**: #FF6B4A (warm accent)
- **Sky Blue**: #0ea5e9 (fresh accent)

### Neutral Colors (Light Theme)
- White: #ffffff
- Warm White: #fffef9
- Cream: #fffdf0, #fef9e7
- Dark Grays: #57534e, #44403c, #292524, #1c1917

### Semantic Colors
- Success: #22c55e
- Warning: #f59e0b
- Error: #ef4444

### Typography
- **Heading Font**: 'Poppins', sans-serif
- **Body Font**: 'Inter', sans-serif
- **Mono Font**: 'JetBrains Mono', monospace

### Shadows & Effects
```css
/* Soft shadow */
box-shadow: 0 2px 15px 0 rgba(10, 17, 40, 0.05);

/* Medium shadow */
box-shadow: 0 4px 25px 0 rgba(10, 17, 40, 0.1);

/* Marigold glow */
box-shadow: 0 0 30px 0 rgba(252, 191, 73, 0.25);

/* Buttercup glow */
box-shadow: 0 0 30px 0 rgba(255, 210, 63, 0.3);

/* Warm shadow */
box-shadow: 0 4px 20px 0 rgba(252, 191, 73, 0.15);
```

### Gradients
```css
/* Golden gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);

/* Sunrise gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%);

/* Warm gradient */
background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
```

### Animations
```css
/* Available keyframe animations */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0% { box-shadow: 0 0 20px rgba(252, 191, 73, 0.3); }
  100% { box-shadow: 0 0 40px rgba(252, 191, 73, 0.6); }
}
```

## Component Specification

### Dotted Surface Component

**Purpose**: Create an animated 3D particle wave effect as a background element

**Features**:
- 3D particle grid with wave animation
- Responsive to window resize
- Theme-aware particle colors (light/dark mode support)
- Smooth sine wave motion
- Performance optimized

**Visual Requirements**:
- Grid of particles (40x60 recommended)
- Particles should be small dots (size: 8px)
- Wave amplitude: ~50px
- Particle separation: 150px
- Camera position: slightly elevated and pulled back for perspective

**Color Scheme** (Light Theme):
- Particles: Midnight Blue (#0A1128) with 80% opacity
- Background: Transparent (allows page background to show)
- Fog color: Warm white (#fffef9)

**Color Scheme** (Dark Theme - Optional):
- Particles: Light gray (#c8c8c8) with 80% opacity
- Background: Transparent
- Fog color: Dark midnight (#0A1128)

### Implementation Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Dotted Surface</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Three.js CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <style>
        /* Reset and base styles */
        /* DreamyHook theme variables */
        /* Component-specific styles */
        /* Responsive styles */
    </style>
</head>
<body>
    <!-- Canvas container for Three.js -->
    <div id="dotted-surface"></div>

    <!-- Demo content overlay -->
    <div class="content">
        <h1>Dotted Surface</h1>
        <p>Animated 3D particle background</p>
    </div>

    <script>
        // Three.js initialization
        // Particle system creation
        // Animation loop
        // Event handlers
        // Cleanup
    </script>
</body>
</html>
```

## Dependencies
- **Three.js**: Load from CDN
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  ```
- **Google Fonts**: Inter, Poppins
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ```

## Implementation Checklist

### Setup
- [ ] Create single HTML file
- [ ] Include Three.js from CDN
- [ ] Include Google Fonts
- [ ] Set up CSS variables for DreamyHook theme

### Styling
- [ ] Apply DreamyHook color palette
- [ ] Use Poppins for headings
- [ ] Use Inter for body text
- [ ] Implement warm white background (#fffef9)
- [ ] Add responsive styles

### Three.js Implementation
- [ ] Initialize scene, camera, renderer
- [ ] Create particle geometry (40x60 grid)
- [ ] Set particle material with Midnight Blue color
- [ ] Implement wave animation using sine functions
- [ ] Add window resize handler
- [ ] Implement proper cleanup on unmount

### Content Overlay
- [ ] Create centered content area
- [ ] Add radial gradient overlay effect
- [ ] Style heading with Poppins font
- [ ] Ensure content is above particles (z-index)

### Testing
- [ ] Test responsiveness on mobile/tablet/desktop
- [ ] Verify animation performance
- [ ] Check browser compatibility
- [ ] Test window resize behavior

## Design Guidelines

### Layout
- Full viewport background
- Fixed positioning
- Z-index: -1 (behind content)
- Pointer events: none (allows clicking through)

### Performance
- Use `requestAnimationFrame` for smooth animation
- Implement proper disposal of Three.js objects
- Optimize particle count for mobile devices
- Use `sizeAttenuation: true` for depth perception

### Accessibility
- Ensure content overlay has sufficient contrast
- Add `aria-hidden="true"` to canvas container
- Provide alternative content for screen readers
- Consider reduced motion preferences

## Example Usage

The file should be standalone and immediately functional when opened in a browser. The dotted surface should:
1. Fill the entire viewport
2. Animate smoothly with wave motion
3. Stay in the background (behind any content)
4. Resize properly when window dimensions change
5. Use DreamyHook brand colors throughout

## Output
Create a single HTML file named `dreamyhook-dotted-surface.html` that contains:
- All HTML structure
- All CSS styles (inline in `<style>` tag)
- All JavaScript code (inline in `<script>` tag)
- CDN links for external dependencies
- Demo content showing the effect in action

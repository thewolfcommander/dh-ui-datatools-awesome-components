# DreamyHook Thumbnail Carousel - Single File HTML Implementation

## Overview
You are given a task to create a thumbnail carousel component as a **single HTML file** with embedded CSS and JavaScript.

The implementation should support:
- Pure HTML/CSS/JavaScript (no frameworks)
- DreamyHook brand theme colors and styling
- Responsive design
- Smooth animations using vanilla JavaScript

## Brand Theme - DreamyHook

### Color Palette
- **Primary (Marigold Yellow)**: #FCBF49 - Main brand color for primary actions and highlights
- **Secondary (Midnight Blue)**: #0A1128 - Dark text and secondary elements
- **Accent (Buttercup Yellow)**: #FFD23F - Bright accents and hover states
- **Coral**: #FF6B4A - Warm accent for CTAs and interactive elements
- **Sky Blue**: #0ea5e9 - Fresh accent for links and info
- **Neutral Grays**: Warm gray palette (#fafaf9 to #1c1917)

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700)
- **Heading Font**: Poppins (400, 500, 600, 700, 800)
- **Monospace Font**: JetBrains Mono

### Design Principles
- Light, warm color scheme with golden tones
- Soft shadows and glowing effects
- Smooth animations and transitions
- Accessible and clean design
- Mobile-first responsive approach

### Key Visual Elements
- **Glow Effects**: Use box-shadow with golden/yellow tones
  - Marigold glow: `0 0 30px rgba(252, 191, 73, 0.25)`
  - Buttercup glow: `0 0 30px rgba(255, 210, 63, 0.3)`
- **Gradients**: Golden and warm gradients
  - Golden: `linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%)`
  - Sunrise: `linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%)`
- **Shadows**: Warm shadows with golden tint
  - Soft: `0 2px 15px 0 rgba(10, 17, 40, 0.05)`
  - Medium: `0 4px 25px 0 rgba(10, 17, 40, 0.1)`
  - Warm: `0 4px 20px 0 rgba(252, 191, 73, 0.15)`

## Component Structure

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook Thumbnail Carousel</title>
    <!-- Import Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* Embedded CSS styles here */
    </style>
</head>
<body>
    <!-- Component markup here -->
    <script>
        /* Embedded JavaScript here */
    </script>
</body>
</html>
```

### CSS Guidelines
1. **Reset & Base Styles**
   - Use box-sizing: border-box
   - Set font-family: 'Inter', sans-serif
   - Background: #fffef9 (warm white)
   - Text color: #0A1128 (midnight blue)

2. **Component Styling**
   - Container: Max-width with centered alignment
   - Border radius: 1rem (16px) for modern look
   - Transitions: 0.3s ease for smooth interactions
   - Hover states: Add glow effects with golden shadows

3. **Responsive Design**
   - Mobile: Stack elements, reduce padding
   - Tablet: Adjust sizing for medium screens
   - Desktop: Full layout with optimal spacing

### JavaScript Functionality
1. **State Management**
   - Track current image index
   - Manage drag state for swipe gestures
   - Handle thumbnail scrolling

2. **Carousel Features**
   - Previous/Next navigation buttons
   - Thumbnail click navigation
   - Touch/mouse drag to swipe
   - Auto-scroll thumbnails to center active item
   - Image counter display

3. **Animation Approach**
   - Use CSS transitions for smooth effects
   - Implement requestAnimationFrame for drag animations
   - Apply easing functions: cubic-bezier(0.65, 0.05, 0, 1)

## Implementation Steps

### Step 1: Setup HTML Structure
- Create semantic HTML5 structure
- Add main carousel container
- Add thumbnail strip container
- Include navigation controls
- Add image counter overlay

### Step 2: Apply DreamyHook Styling
- Import Google Fonts (Inter & Poppins)
- Define CSS custom properties for brand colors
- Style main carousel with warm gradient backgrounds
- Add golden glow effects to interactive elements
- Apply midnight blue text colors
- Create responsive layouts with media queries

### Step 3: Implement JavaScript Logic
- Initialize carousel state (currentIndex = 0)
- Create image data array with Unsplash URLs
- Implement navigation functions (next, previous, goToIndex)
- Add touch/mouse drag event listeners
- Implement thumbnail auto-scroll logic
- Add keyboard navigation (arrow keys)

### Step 4: Add Animations
- Smooth slide transitions using CSS transform
- Fade effects for image transitions
- Scale animations for thumbnails
- Glow animations on hover states
- Smooth scrolling for thumbnail strip

### Step 5: Image Assets
Use Unsplash stock images (landscape/nature theme):
- Mountain landscapes
- Abstract art
- Nature scenes
- Ensure all images are 16:9 aspect ratio
- Use Unsplash API format: `https://images.unsplash.com/photo-{id}?w=880&h=600&fit=crop`

## Features Checklist

### Core Functionality
- [x] Display main carousel image
- [x] Previous/Next button navigation
- [x] Thumbnail strip with click navigation
- [x] Active thumbnail highlighting
- [x] Image counter (e.g., "3 / 12")
- [x] Touch/mouse drag to swipe
- [x] Auto-scroll thumbnails to center

### DreamyHook Branding
- [x] Marigold Yellow (#FCBF49) primary accents
- [x] Midnight Blue (#0A1128) text and borders
- [x] Buttercup Yellow (#FFD23F) hover states
- [x] Golden glow effects on interactive elements
- [x] Warm gradient backgrounds
- [x] Inter/Poppins font families
- [x] Soft, warm shadows

### Responsive Design
- [x] Mobile-friendly (320px+)
- [x] Tablet optimized (768px+)
- [x] Desktop enhanced (1024px+)
- [x] Touch-friendly controls
- [x] Accessible focus states

### Accessibility
- [x] Semantic HTML elements
- [x] Alt text for images
- [x] Keyboard navigation support
- [x] ARIA labels for buttons
- [x] High contrast text (midnight blue on warm white)
- [x] Focus visible styles

## Code Comments
Include helpful comments explaining:
- Brand color usage
- Animation logic
- Event handler purposes
- Responsive breakpoints
- Accessibility features

## Testing Checklist
1. Test on different screen sizes (mobile, tablet, desktop)
2. Verify touch gestures work on mobile devices
3. Test keyboard navigation (arrow keys)
4. Check hover states and animations
5. Verify thumbnail auto-scrolling centers correctly
6. Ensure images load properly from Unsplash
7. Test browser compatibility (Chrome, Firefox, Safari, Edge)

## Final Deliverable
A single HTML file named `dreamyhook-thumbnail-carousel.html` that:
- Contains all CSS embedded in `<style>` tags
- Contains all JavaScript embedded in `<script>` tags
- Implements full carousel functionality
- Applies DreamyHook brand theme throughout
- Works without any external dependencies
- Is fully responsive and accessible
- Includes 12 sample images from Unsplash
- Has smooth animations and golden glow effects

## Usage
Simply open the HTML file in any modern web browser. No build process or dependencies required.

---

**Brand**: DreamyHook
**Component**: Thumbnail Carousel
**Tech Stack**: HTML5, CSS3, Vanilla JavaScript
**Theme**: Light mode with warm golden tones
**Status**: Ready for implementation

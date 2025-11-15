# DreamyHook Bento Grid Component - Single HTML File Implementation

## Overview
You are given a task to create a beautiful Bento Grid layout component as a **single HTML file** using vanilla JavaScript and CSS, styled according to the DreamyHook brand theme.

## Tech Stack Requirements
- **Pure HTML5** - Single file structure
- **Vanilla CSS** - No frameworks, custom CSS only
- **Vanilla JavaScript** - No React, Vue, or other frameworks
- **DreamyHook Brand Theme** - Marigold Yellow, Midnight Blue, Buttercup accents

## DreamyHook Brand Colors

### Primary Colors
- **Primary (Marigold Yellow)**: `#FCBF49` - Main brand color, golden and warm
- **Secondary (Midnight Blue)**: `#0A1128` - Deep, sophisticated dark color
- **Accent (Buttercup Yellow)**: `#FFD23F` - Bright, cheerful accent

### Complementary Accents
- **Coral**: `#FF6B4A` - Warm, inviting for CTAs
- **Sky Blue**: `#0ea5e9` - Fresh, airy accent

### Neutral Colors (Warm Gray Palette)
- Background: `#fffef9` (Warm white)
- Light: `#ffffff` (Pure white)
- Text Dark: `#0A1128` (Midnight blue)
- Medium Gray: `#78716c`
- Dark Gray: `#44403c`

### Semantic Colors
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`

## Typography
- **Heading Font**: Poppins (Google Fonts)
- **Body Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (Google Fonts)

## Design System

### Shadows
```css
/* Subtle shadow */
box-shadow: 0 2px 15px 0 rgba(10, 17, 40, 0.05);

/* Medium elevation */
box-shadow: 0 4px 25px 0 rgba(10, 17, 40, 0.1);

/* Strong shadow */
box-shadow: 0 10px 40px 0 rgba(10, 17, 40, 0.15);

/* Marigold glow effect */
box-shadow: 0 0 30px 0 rgba(252, 191, 73, 0.25);

/* Buttercup glow effect */
box-shadow: 0 0 30px 0 rgba(255, 210, 63, 0.3);
```

### Gradients
```css
/* Warm gradient background */
background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);

/* Golden gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);

/* Sunrise gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%);
```

### Border Radius
- Standard: `1rem` (16px)
- Large: `1.5rem` (24px)
- Extra Large: `2rem` (32px)

### Animations
```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Glow effect */
@keyframes glow {
  0% { box-shadow: 0 0 20px rgba(252, 191, 73, 0.3); }
  100% { box-shadow: 0 0 40px rgba(252, 191, 73, 0.6); }
}

/* Float effect */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## Component Structure

### Bento Grid Layout
Create a responsive grid layout with the following characteristics:

1. **Grid Container**
   - Display: CSS Grid
   - Auto rows: 22rem (352px)
   - Columns: 3 columns on desktop
   - Gap: 1rem (16px)
   - Responsive: 1 column on mobile, 2 on tablet

2. **Bento Card**
   - Background: White with subtle warm tint
   - Border radius: 1.5rem
   - Box shadow: Soft elevation with warm tone
   - Padding: 1.5rem
   - Hover effects:
     - Slight scale transform
     - Marigold glow shadow
     - Smooth transitions (0.3s ease)

3. **Card Elements**
   - **Icon**: 48px × 48px, Midnight Blue color
   - **Title**: Poppins font, 1.25rem, Midnight Blue
   - **Description**: Inter font, 1rem, Medium Gray
   - **CTA Button**:
     - Background: Marigold Yellow (#FCBF49)
     - Text: White
     - Hover: Darker golden (#f59e0b)
     - Border radius: 0.5rem
     - Padding: 0.75rem 1.5rem

## Implementation Guidelines

### File Structure (Single HTML File)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DreamyHook Bento Grid</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    /* CSS goes here */
  </style>
</head>
<body>
  <!-- HTML content goes here -->

  <script>
    // JavaScript goes here
  </script>
</body>
</html>
```

### Required Features

1. **Responsive Grid**
   - Desktop: 3 columns
   - Tablet: 2 columns
   - Mobile: 1 column

2. **Interactive Cards**
   - Hover effects with smooth transitions
   - Icon animation on hover (scale effect)
   - Reveal CTA button on hover
   - Background overlay on hover

3. **Features to Include** (Example data):
   - Save your files
   - Full text search
   - Multilingual support
   - Calendar integration
   - Notifications

4. **Icons**
   - Use SVG icons (can be inline SVG or from a CDN like Heroicons, Feather Icons, or Lucide)
   - Color: Midnight Blue (#0A1128)
   - Size: 48px × 48px
   - Hover animation: Scale down to 75% when card is hovered

5. **Background Images** (Optional)
   - Use Unsplash stock images
   - Opacity: 0.6
   - Position: Absolute, top-right corner
   - Example Unsplash URLs:
     - `https://images.unsplash.com/photo-1557683316-973673baf926?w=600`
     - `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600`

### Styling Guidelines

1. **Base Styles**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
  color: #0A1128;
  padding: 2rem;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}
```

2. **Grid Styles**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 22rem;
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 991px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}
```

3. **Card Styles**
```css
.bento-card {
  position: relative;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px 0 rgba(252, 191, 73, 0.25);
}
```

4. **Button Styles**
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #FCBF49;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn:hover {
  background: #f59e0b;
  box-shadow: 0 4px 15px rgba(252, 191, 73, 0.3);
}
```

### JavaScript Interactivity

1. **Card Hover Effects**
   - Add/remove classes on hover
   - Animate icon scale
   - Slide up CTA button

2. **Smooth Scroll (Optional)**
   - If adding navigation

3. **Responsive Adjustments**
   - Detect viewport size
   - Adjust grid columns dynamically

## Questions to Consider

1. **Content**
   - What features should be showcased in the grid?
   - What images or backgrounds are needed?
   - What CTAs should the cards have?

2. **Responsive Behavior**
   - How should cards stack on mobile?
   - Should any cards span multiple columns/rows?

3. **Interactivity**
   - Should cards be clickable?
   - Should there be modal popups on click?
   - Should there be animations on scroll?

## Implementation Steps

1. **Setup HTML Structure**
   - Add meta tags and viewport settings
   - Import Google Fonts (Inter, Poppins)
   - Create semantic HTML structure

2. **Style with CSS**
   - Apply DreamyHook color palette
   - Create responsive grid layout
   - Add hover effects and transitions
   - Implement animations

3. **Add JavaScript**
   - Add interactive behaviors
   - Handle hover states
   - Add smooth transitions

4. **Add Content**
   - Use meaningful feature descriptions
   - Add appropriate icons (SVG)
   - Use Unsplash images for backgrounds

5. **Test Responsiveness**
   - Test on mobile (320px - 767px)
   - Test on tablet (768px - 991px)
   - Test on desktop (992px+)

6. **Polish**
   - Fine-tune animations
   - Optimize performance
   - Ensure accessibility (ARIA labels, focus states)

## Accessibility Considerations

- Use semantic HTML (`<section>`, `<article>`, `<nav>`)
- Add ARIA labels for icons
- Ensure sufficient color contrast (4.5:1 minimum)
- Support keyboard navigation
- Add focus visible states

## Performance Optimization

- Minimize CSS (use shorthand properties)
- Optimize images (use WebP format, lazy loading)
- Use CSS transforms for animations (GPU accelerated)
- Avoid layout thrashing in JavaScript

## Example Feature Data

```javascript
const features = [
  {
    icon: 'file-text',
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    cta: 'Learn more',
    href: '#',
    gridArea: 'span 3 / span 1' // row / column
  },
  {
    icon: 'search',
    name: 'Full text search',
    description: 'Search through all your files in one place.',
    cta: 'Learn more',
    href: '#',
    gridArea: 'span 2 / span 1'
  },
  {
    icon: 'globe',
    name: 'Multilingual',
    description: 'Supports 100+ languages and counting.',
    cta: 'Learn more',
    href: '#',
    gridArea: 'span 1 / span 1'
  },
  {
    icon: 'calendar',
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    cta: 'Learn more',
    href: '#',
    gridArea: 'span 1 / span 1'
  },
  {
    icon: 'bell',
    name: 'Notifications',
    description: 'Get notified when someone shares a file or mentions you.',
    cta: 'Learn more',
    href: '#',
    gridArea: 'span 2 / span 1'
  }
];
```

## Final Deliverable

A single `bento-grid.html` file containing:
- Complete HTML structure
- Embedded CSS with DreamyHook theme
- Vanilla JavaScript for interactivity
- Responsive design
- Smooth animations and transitions
- DreamyHook brand colors and typography
- Production-ready code

---

**Remember**: This is a single file implementation. All HTML, CSS, and JavaScript should be in one file for easy deployment and sharing.

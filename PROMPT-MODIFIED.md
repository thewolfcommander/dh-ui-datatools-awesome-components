# DreamyHook Feature Section - Integration Prompt

## Overview
You are given a task to create a feature section component for the DreamyHook brand using vanilla HTML, CSS, and JavaScript in a single file.

## DreamyHook Brand Theme
The component should follow these brand guidelines:

### Color Palette
- **Primary (Marigold Yellow)**: `#FCBF49` - Main brand color, warm and golden
- **Secondary (Midnight Blue)**: `#0A1128` - Deep, sophisticated dark color
- **Accent (Buttercup Yellow)**: `#FFD23F` - Bright, cheerful accent
- **Coral**: `#FF6B4A` - Warm accent for CTAs and highlights
- **Sky Blue**: `#0ea5e9` - Fresh accent for interactive elements

### Typography
- **Headings**: Poppins (weights: 400, 500, 600, 700, 800)
- **Body**: Inter (weights: 300, 400, 500, 600, 700)
- **Monospace**: JetBrains Mono

### Design Principles
- Light theme with warm white backgrounds (`#fffef9`)
- Warm gradient overlays for visual depth
- Golden glow effects on hover states
- Soft, warm shadows for elevation
- Smooth animations and transitions
- Professional and accessible design

## Component Requirements

### Structure
The feature section should support:
- Single HTML file with embedded CSS and JavaScript
- Responsive grid layout (1 column mobile, 2 columns tablet, 4 columns desktop)
- 8 feature cards with icons, titles, and descriptions
- Hover effects with gradient overlays
- Animated border indicators

### Features to Implement
1. **Grid Layout**: Responsive grid that adapts to screen size
2. **Feature Cards**: Each card contains:
   - Icon (using Unicode symbols or inline SVG)
   - Title (bold, prominent)
   - Description (clear, concise)
3. **Hover Effects**:
   - Gradient overlay animation (warm tones)
   - Border accent animation (golden highlight)
   - Icon color change
   - Title slide animation
4. **Borders**: Strategic borders creating visual separation
5. **Animations**: Smooth transitions using CSS

### Color Application
- **Background**: Warm white (`#fffef9`) or cream tones
- **Text**: Midnight blue (`#0A1128`) for primary text
- **Borders**: Light warm gray (`#e7e5e4`)
- **Hover gradients**: Gradient from cream to transparent
- **Accent bar**: Marigold yellow (`#FCBF49`) on hover
- **Icons**: Neutral gray, transitioning to marigold on hover

### Responsive Breakpoints
- **Desktop**: 992px and above (4 columns)
- **Tablet**: 768px - 991px (2 columns)
- **Mobile**: Below 768px (1 column)

## Default Feature Data
Use the following features (customize for DreamyHook's webhook/data tools context):

1. **Built for Developers**
   - Description: "Built for engineers, developers, dreamers, thinkers and doers."
   - Icon: Terminal/Code symbol

2. **Ease of Use**
   - Description: "Intuitive design that makes complex webhooks simple and accessible."
   - Icon: Magic wand/Sparkles

3. **Flexible Pricing**
   - Description: "Transparent pricing that scales with your needs. No hidden fees."
   - Icon: Dollar/Currency

4. **99.9% Uptime**
   - Description: "Reliable infrastructure that keeps your webhooks running smoothly."
   - Icon: Cloud/Server

5. **Advanced Routing**
   - Description: "Intelligent routing and filtering for your webhook payloads."
   - Icon: Route/Network

6. **24/7 Support**
   - Description: "Expert support team available whenever you need assistance."
   - Icon: Help/Support

7. **Real-time Monitoring**
   - Description: "Track and monitor all your webhooks in real-time with detailed analytics."
   - Icon: Dashboard/Monitor

8. **Secure & Compliant**
   - Description: "Enterprise-grade security with SOC 2 compliance and encryption."
   - Icon: Shield/Lock

## Implementation Guidelines

### 1. HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Feature Section</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Embedded CSS -->
    <style>/* CSS here */</style>
</head>
<body>
    <!-- Feature section HTML -->
    <script>/* JavaScript here */</script>
</body>
</html>
```

### 2. CSS Guidelines
- Use CSS custom properties for theme colors
- Implement CSS Grid for responsive layout
- Add smooth transitions for hover effects
- Use `box-shadow` for warm glow effects
- Implement gradient overlays with `::before` or `::after` pseudo-elements

### 3. JavaScript (Optional)
- Add intersection observer for scroll animations
- Implement additional interactive features
- Handle dynamic content loading

### 4. Icons
Use one of these approaches:
- Unicode symbols (⚡, 🎯, 💰, ☁️, 🔀, 💬, 📊, 🔒)
- Inline SVG icons
- Icon fonts (if CDN link is acceptable)

### 5. Assets
- All styles embedded in `<style>` tag
- All scripts embedded in `<script>` tag
- Icons as inline SVG or Unicode
- No external image dependencies

## Testing Checklist
- [ ] Component renders correctly on desktop (1440px)
- [ ] Component is responsive on tablet (768px - 991px)
- [ ] Component is responsive on mobile (< 768px)
- [ ] Hover effects work smoothly
- [ ] Colors match DreamyHook brand palette
- [ ] Typography uses Poppins and Inter fonts
- [ ] Animations are smooth and performant
- [ ] No console errors
- [ ] Accessible (proper semantic HTML, ARIA labels if needed)

## Expected Output
A single HTML file named `feature-section-hover-effects.html` that:
- Contains all HTML, CSS, and JavaScript
- Follows DreamyHook brand guidelines
- Is fully responsive
- Has smooth hover effects
- Works in all modern browsers
- Is production-ready

## Questions to Consider
1. **Content**: Should the feature descriptions be customized for specific DreamyHook services?
2. **Icons**: Which icon style (Unicode, SVG, icon font) is preferred?
3. **Animation**: Should there be entrance animations when scrolling into view?
4. **Interactivity**: Should clicking a feature card open a modal with more details?
5. **Integration**: Where will this component be used in the application?

## File Output
Create: `feature-section-hover-effects.html`

This file should be completely self-contained and ready to use by simply opening in a web browser.

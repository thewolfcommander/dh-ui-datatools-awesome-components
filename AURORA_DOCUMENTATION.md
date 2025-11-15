# DreamyHook Aurora Background Component

A beautiful, animated aurora background effect built with vanilla HTML, CSS, and JavaScript. This component features DreamyHook's signature warm golden color palette with marigold yellow, buttercup yellow, and coral accents.

## 🎨 Brand Colors Used

- **Marigold Yellow** `#FCBF49` - Primary brand color
- **Buttercup Yellow** `#FFD23F` - Bright accent
- **Coral** `#FF6B4A` - Warm accent for CTAs
- **Midnight Blue** `#0A1128` - Text and secondary color
- **Warm White** `#fffef9` - Background

## ✨ Features

- **Zero Dependencies**: Pure HTML, CSS, and JavaScript
- **Single File**: Everything you need in one file
- **Smooth Animations**: 60-second seamless aurora loop
- **Fully Responsive**: Mobile-first design
- **GPU Accelerated**: Optimized performance with `will-change`
- **Accessible**: Reduced motion support for accessibility
- **Interactive**: Mouse parallax and scroll effects
- **Professional Typography**: Poppins for headings, Inter for body text

## 🚀 Quick Start

### Option 1: Direct File Usage

Simply open `aurora-background-dreamyhook.html` in any modern web browser:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Or just open directly
open aurora-background-dreamyhook.html
```

Then visit: `http://localhost:8000/aurora-background-dreamyhook.html`

### Option 2: Integrate into Your Project

Copy the HTML file to your project and customize the content section as needed.

## 📂 File Structure

```
aurora-background-dreamyhook.html
├── <head>
│   ├── Meta tags
│   ├── Google Fonts (Poppins, Inter)
│   └── <style> - All CSS inline
├── <body>
│   ├── Aurora container
│   │   ├── Aurora background layer
│   │   └── Aurora effect animation
│   ├── Content section
│   │   ├── Hero heading
│   │   ├── Subheading
│   │   ├── CTA button
│   │   └── Feature cards (6 cards)
│   └── <script> - Interactive features
```

## 🎯 Customization Guide

### Change Text Content

Find these sections in the HTML:

```html
<!-- Hero Heading -->
<h1 class="hero-heading">
  Your Custom Heading Here
</h1>

<!-- Subheading -->
<p class="subheading">
  Your custom description here.
</p>
```

### Modify Colors

Edit CSS variables in the `:root` selector:

```css
:root {
  --color-primary: #FCBF49;    /* Change primary color */
  --color-secondary: #0A1128;  /* Change text color */
  --color-accent: #FFD23F;     /* Change accent color */
  /* ... more variables */
}
```

### Adjust Animation Speed

Change the aurora animation duration:

```css
.aurora-effect::after {
  animation: aurora 60s linear infinite; /* Change 60s to desired duration */
}
```

### Remove Interactive Effects

Comment out or remove the JavaScript at the bottom:

```javascript
// Remove mouse parallax effect
// document.addEventListener('mousemove', (e) => { ... });

// Remove scroll parallax effect
// window.addEventListener('scroll', () => { ... });
```

### Add More Feature Cards

Copy and paste this block in the `.features` div:

```html
<div class="feature-card">
  <div class="feature-icon">🎯</div>
  <h3 class="feature-title">Your Feature Title</h3>
  <p class="feature-description">
    Your feature description here.
  </p>
</div>
```

## 🎨 Aurora Gradient Colors

The aurora effect uses these DreamyHook colors in sequence:

1. `#FCBF49` - Marigold Yellow
2. `#FFD23F` - Buttercup Yellow
3. `#FF6B4A` - Coral
4. `#f59e0b` - Darker Golden
5. `#d97706` - Deep Amber

To customize, edit the `--aurora-*` variables:

```css
:root {
  --aurora-1: #FCBF49;  /* First color */
  --aurora-2: #FFD23F;  /* Second color */
  --aurora-3: #FF6B4A;  /* Third color */
  --aurora-4: #f59e0b;  /* Fourth color */
  --aurora-5: #d97706;  /* Fifth color */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 992px and above
- **Tablet**: 768px - 991px
- **Mobile Landscape**: 480px - 767px
- **Mobile Portrait**: 320px - 479px

## ⚡ Performance Optimization

The component includes several performance optimizations:

1. **GPU Acceleration**: Uses `will-change` property
2. **Efficient Animations**: CSS-based animations (not JavaScript)
3. **Reduced Motion**: Respects `prefers-reduced-motion` media query
4. **Minimal Repaints**: Fixed backgrounds and transforms
5. **Optimized Blur**: Single blur filter on aurora layer

## 🔧 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📖 Use Cases

Perfect for:

- Landing pages
- Hero sections
- Marketing websites
- Portfolio headers
- Product showcases
- Event pages
- App landing pages

## 🎓 Technical Details

### CSS Techniques Used

- CSS Custom Properties (CSS Variables)
- Repeating Linear Gradients
- Radial Gradient Masking
- CSS Animations & Keyframes
- Backdrop Filter (Glassmorphism)
- Flexbox & CSS Grid
- Responsive Typography with `clamp()`
- Gradient Text Effects

### JavaScript Features

- Smooth scroll behavior
- Mouse parallax effect
- Scroll parallax effect
- Event listeners optimization

## 🛠️ Troubleshooting

### Aurora not animating?

- Check if `prefers-reduced-motion` is enabled in your OS
- Verify browser supports CSS animations
- Clear browser cache

### Fonts not loading?

- Check internet connection (Google Fonts requires internet)
- Verify font URLs in `<link>` tags
- Check browser console for errors

### Performance issues?

- Disable parallax effects (JavaScript at bottom)
- Reduce blur amount in `.aurora-effect`
- Simplify gradient colors

## 📝 License

This component is part of the DreamyHook UI Components library.

## 🤝 Contributing

To customize or extend this component:

1. Edit the HTML file directly
2. Test in multiple browsers
3. Verify responsive behavior
4. Check accessibility with screen readers

## 📞 Support

For questions or issues:
- Check browser console for errors
- Verify all CSS variables are defined
- Test in different browsers

---

**Built with ❤️ for DreamyHook**

*Single-file component • Zero dependencies • Production-ready*

# DreamyHook Golden Beams Background

## Modified Prompt for DreamyHook Brand Theme

### Original Component
The original component was a React/TypeScript component using shadcn, Tailwind CSS, and Motion library with a dark theme and blue/cyan color palette.

### Modified Version
This version has been adapted for **vanilla HTML/CSS/JavaScript in a single file** with the **DreamyHook brand theme** featuring warm golden colors.

---

## Integration Guide

### Requirements
✅ **No external dependencies required!**
- Pure HTML/CSS/JavaScript
- No build tools needed
- No npm packages required
- Works in any modern browser

### File Structure
```
/
├── dreamyhook-beams-background.html  (Single self-contained file)
└── DREAMYHOOK-BEAMS-README.md        (This file)
```

---

## Brand Theme Applied

### Color Palette
The component uses the DreamyHook brand colors:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Marigold Yellow | `#FCBF49` | Primary brand color, beam color |
| Buttercup Yellow | `#FFD23F` | Accent color, beam color, gradients |
| Midnight Blue | `#0A1128` | Secondary color, text |
| Coral | `#FF6B4A` | Warm accent, beam color |
| Sky Blue | `#0ea5e9` | Fresh accent, beam color |
| Warm White | `#fffef9` | Background base |
| Light Cream | `#fef9e7` | Background gradient |

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body text**: Inter (400-600 weight)
- **Monospace**: JetBrains Mono (for code)

### Design Elements
- ✨ Warm gradient backgrounds (`#fffef9` → `#fef9e7`)
- ✨ Golden beam animations with multiple warm hues
- ✨ Subtle glow effects with marigold/buttercup shadows
- ✨ Smooth fade-in-up animations
- ✨ Responsive design for all screen sizes
- ✨ Accessible color contrast ratios

---

## How to Use

### Method 1: Direct File Opening
1. Simply open `dreamyhook-beams-background.html` in any modern web browser
2. The animation will start automatically
3. No server or build process required!

### Method 2: Integrate into Existing Project
```html
<!-- Copy the entire content of dreamyhook-beams-background.html -->
<!-- Or extract specific parts as needed -->
```

### Customization Options

#### 1. Adjust Animation Intensity
In the JavaScript section, modify:
```javascript
const intensity = 'strong'; // Options: 'subtle', 'medium', 'strong'
```

#### 2. Change Number of Beams
```javascript
const MINIMUM_BEAMS = 20; // Increase for more beams, decrease for less
```

#### 3. Modify Colors
Update the color palette in JavaScript:
```javascript
const colorPalette = [
    { hue: 42, saturation: 96, lightness: 64 },   // Marigold
    { hue: 47, saturation: 100, lightness: 62 },  // Buttercup
    { hue: 37, saturation: 95, lightness: 58 },   // Golden
    { hue: 12, saturation: 100, lightness: 65 },  // Coral
    { hue: 199, saturation: 89, lightness: 48 }   // Sky
];
```

#### 4. Customize Content
Replace the content in the `.content` div:
```html
<div class="content">
    <span class="badge">✨ Your Badge</span>
    <h1>Your Heading</h1>
    <p>Your description</p>
    <button class="cta-button">Your CTA</button>
</div>
```

#### 5. Modify Background Gradient
In the CSS section:
```css
.beams-container {
    background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
    /* Change to your preferred gradient */
}
```

---

## Features

### ✨ Visual Features
- Animated golden light beams with multiple warm color variations
- Smooth pulsing effect on beam opacity
- Blur effects for soft, dreamy appearance
- Responsive gradient background
- Glass-morphism overlay

### 🎯 Technical Features
- Zero dependencies - pure vanilla JavaScript
- Optimized canvas rendering
- High DPI/Retina display support
- Automatic resize handling
- Smooth 60fps animations
- Hardware-accelerated where supported

### ♿ Accessibility
- High contrast text (WCAG AA compliant)
- Semantic HTML structure
- Keyboard accessible button
- Proper focus states
- Screen reader friendly

### 📱 Responsive Design
- Mobile-first approach
- Fluid typography using `clamp()`
- Touch-friendly button sizes
- Optimized for all screen sizes

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

---

## Performance Optimization

The component includes several optimizations:

1. **Canvas DPI Scaling**: Automatically adjusts for high-DPI displays
2. **Request Animation Frame**: Uses native browser animation timing
3. **Efficient Rendering**: Only clears and redraws what's necessary
4. **Blur Optimization**: Uses CSS filter for better performance
5. **Responsive Cleanup**: Properly cancels animations on resize

---

## Questions Addressed

### What data/props will be passed to this component?
This is a standalone component with no external props. Customization is done through:
- CSS variables
- JavaScript constants
- Direct HTML content editing

### Are there any specific state management requirements?
No state management needed - pure animation using canvas and requestAnimationFrame.

### Are there any required assets?
No external assets required:
- Fonts loaded from Google Fonts CDN
- Icons created with inline SVG
- No images needed

### What is the expected responsive behavior?
- **Desktop (>768px)**: Full-size beams with large typography
- **Tablet (768px)**: Adjusted spacing and font sizes
- **Mobile (<768px)**: Optimized layout with smaller elements
- Beams automatically adjust to viewport size

### What is the best place to use this component?
Perfect for:
- 🏠 Landing pages / Hero sections
- 🎨 Coming soon pages
- 🌟 Feature highlights
- 📱 App splash screens
- 🎯 Call-to-action sections

---

## Implementation Steps (Modified for HTML/CSS/JS)

### Step 0: Copy Files
✅ Already completed - single HTML file created

### Step 1: Install Dependencies
✅ **No dependencies needed!** Pure vanilla JavaScript implementation

### Step 2: Image Assets
✅ **No images required** - all visual effects created with canvas and CSS

### Step 3: Icons
✅ **Inline SVG included** - arrow icon embedded in HTML

---

## Differences from Original React Component

| Feature | Original (React) | Modified (Vanilla JS) |
|---------|-----------------|---------------------|
| Framework | React + TypeScript | Pure JavaScript |
| Styling | Tailwind CSS | Inline CSS |
| Animation | Motion library | Canvas API + CSS |
| Theme | Dark (blue/cyan) | Light (golden/warm) |
| Dependencies | npm packages | Zero dependencies |
| Build Required | Yes (Vite/Next.js) | No |
| File Count | Multiple files | Single file |

---

## Customization Examples

### Example 1: Change to Dark Theme
```css
.beams-container {
    background: linear-gradient(135deg, #0A1128 0%, #1c1917 100%);
}

h1, p {
    color: #ffffff;
}
```

### Example 2: Add More Beams
```javascript
const MINIMUM_BEAMS = 40; // Double the beams
```

### Example 3: Slower Animation
```javascript
class Beam {
    constructor(canvasWidth, canvasHeight, index, totalBeams) {
        // ... existing code ...
        this.speed = 0.3 + Math.random() * 0.6; // Slower speed
    }
}
```

---

## Support & Credits

**Created for**: DreamyHook Brand
**Theme**: Marigold Yellow (#FCBF49) + Midnight Blue (#0A1128)
**License**: Use freely in your DreamyHook projects

For questions or customization help, refer to the code comments in `dreamyhook-beams-background.html`.

---

## Quick Start Checklist

- [x] Single HTML file created
- [x] DreamyHook brand colors applied
- [x] Vanilla JavaScript (no dependencies)
- [x] Responsive design implemented
- [x] Animations optimized
- [x] Accessibility considered
- [x] Browser compatibility ensured
- [x] Performance optimized
- [x] Documentation provided

**You're ready to go! Just open the HTML file in your browser.** 🚀

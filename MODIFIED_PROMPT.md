# DreamyHook Hero Section - Single HTML File Component

## Task Overview
Create a professional hero section component for DreamyHook brand in a **single HTML file** with inline CSS and JavaScript.

## Tech Stack Requirements
- **HTML5** - Semantic markup
- **CSS3** - Inline styles with DreamyHook brand theme
- **Vanilla JavaScript** - No frameworks, pure JS for interactions
- **Single File Only** - Everything in one `.html` file

## DreamyHook Brand Theme

### Color Palette
```css
/* Primary Colors */
--color-primary: #FCBF49;        /* Marigold Yellow - primary brand color */
--color-secondary: #0A1128;      /* Midnight Blue - secondary brand color */
--color-accent: #FFD23F;         /* Buttercup Yellow - bright accent */
--color-coral: #FF6B4A;          /* Coral - warm accent for CTAs */
--color-sky: #0ea5e9;            /* Sky Blue - fresh accent */

/* Neutral Colors - Warm Gray Palette */
--color-neutral-100: #ffffff;    /* Pure white */
--color-neutral-200: #fffef9;    /* Warm white */
--color-neutral-300: #fffdf0;    /* Cream white */
--color-neutral-400: #fef9e7;    /* Light cream */
--color-neutral-500: #78716c;    /* Medium warm gray */
--color-neutral-600: #57534e;    /* Dark warm gray */
--color-neutral-700: #44403c;    /* Very dark warm gray */
--color-neutral-800: #292524;    /* Almost black warm gray */
--color-neutral-900: #1c1917;    /* Near black warm */

/* Semantic Colors */
--color-error: #ef4444;          /* Red for errors */
--color-success: #22c55e;        /* Green for success */
--color-warning: #f59e0b;        /* Amber for warnings */
```

### Typography
- **Sans-serif**: Inter (body text)
- **Heading**: Poppins (headings and titles)
- **Monospace**: JetBrains Mono (code/technical content)

### Design System
- **Shadows**: Warm golden glows using marigold/buttercup colors
- **Gradients**: Warm gradients from cream to golden tones
- **Border Radius**: Smooth, modern rounded corners (1rem - 2.5rem)
- **Animations**: Soft, elegant transitions with ease-in-out timing

## Component Structure

### Hero Section Features
1. **Fixed Navigation Bar**
   - Logo on the left
   - Menu items: Features, Solution, Pricing, About
   - Login and Sign Up buttons
   - Mobile hamburger menu (responsive)
   - Border: dashed bottom border
   - Background: White with backdrop blur

2. **Hero Content**
   - Large heading with brand typography (Poppins)
   - Subtitle/description text
   - Primary CTA button with DreamyHook styling
   - Centered layout

3. **Hero Image Section**
   - Perspective-transformed image showcase
   - Skewed/rotated presentation
   - Gradient mask for fade effect
   - Both light and dark mode images

4. **Partner/Client Logos Section**
   - "Your favorite companies are our partners" heading
   - Grid of company logos
   - Responsive layout

### Styling Requirements

#### Buttons
```css
/* Primary Button - Marigold Yellow */
background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);
color: #0A1128;
padding: 0.75rem 2rem;
border-radius: 0.5rem;
font-weight: 600;
box-shadow: 0 4px 20px 0 rgba(252, 191, 73, 0.15);
transition: all 0.3s ease;

/* Hover State */
box-shadow: 0 0 30px rgba(252, 191, 73, 0.5);
transform: translateY(-2px);

/* Outline Button */
border: 2px solid #FCBF49;
background: transparent;
color: #0A1128;
```

#### Navigation
```css
/* Nav Bar */
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
border-bottom: 1px dashed #e7e5e4;
position: fixed;
top: 0;
width: 100%;
z-index: 20;

/* Nav Links */
color: #78716c;
transition: color 0.15s ease;

/* Nav Links Hover */
color: #FFD23F;
```

#### Typography
```css
/* Main Heading */
font-family: 'Poppins', sans-serif;
font-size: 3.75rem; /* 60px */
font-weight: 600;
color: #0A1128;
line-height: 1.2;

/* Body Text */
font-family: 'Inter', sans-serif;
font-size: 1.25rem; /* 20px */
color: #57534e;
line-height: 1.6;
```

### Mobile Responsiveness
- **Desktop**: Full layout with all features
- **Tablet** (max-width: 991px): Adjust spacing and font sizes
- **Mobile** (max-width: 767px):
  - Hamburger menu
  - Stack navigation vertically
  - Adjust hero image perspective
  - Single column logo grid

### Interactive Elements

#### Mobile Menu Toggle
```javascript
// Toggle menu state on hamburger click
// Animate menu icon transition (menu -> X)
// Show/hide navigation menu
// Add smooth transitions
```

#### Smooth Scroll
```javascript
// Smooth scroll for anchor links
// Animated scroll behavior
```

#### Hover Effects
```javascript
// Button hover glow effects
// Link color transitions
// Image subtle animations
```

## Asset Requirements

### Images
- **Hero Image (Light)**: Use Unsplash dashboard/analytics screenshot
  - URL: `https://images.unsplash.com/photo-1551288049-bebda4e38f71` (analytics dashboard)
  - Fallback: `https://images.unsplash.com/photo-1460925895917-afdab827c52f` (business data)

- **Hero Image (Dark)**: Use Unsplash dark-themed dashboard
  - URL: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000` (same but darker)

### Icons
- Use Unicode symbols or inline SVG for:
  - Menu icon: `☰` or SVG hamburger
  - Close icon: `✕` or SVG X
  - Logo: Custom DreamyHook SVG with marigold gradient

### Company Logos
Use placeholder SVG or text-based logos:
- Nvidia, GitHub, Nike, Laravel, OpenAI, Vercel, Tailwind CSS, etc.
- Apply `filter: invert(1)` for dark mode compatibility
- Use simple SVG shapes if needed

## Implementation Steps

### 1. HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Modern Software Testing Reimagined</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        /* All CSS here with DreamyHook theme variables */
    </style>
</head>
<body>
    <!-- Navigation -->
    <header>
        <nav>
            <!-- Logo, Menu, Buttons -->
        </nav>
    </header>

    <!-- Main Hero Section -->
    <main>
        <!-- Hero Content -->
        <!-- Hero Image -->
        <!-- Partner Logos -->
    </main>

    <script>
        /* All JavaScript here */
    </script>
</body>
</html>
```

### 2. CSS Organization
- CSS Variables at :root
- Reset/Base styles
- Layout styles (navigation, sections)
- Component styles (buttons, cards)
- Utility classes (gradients, glows)
- Media queries
- Animations and keyframes

### 3. JavaScript Features
- Mobile menu toggle
- Smooth scroll navigation
- Active link highlighting
- Scroll-based animations (optional)
- Dark mode detection and image switching

## Design Principles

### 1. Brand Consistency
- Use DreamyHook color palette throughout
- Apply warm golden glows to interactive elements
- Use brand typography (Poppins for headings, Inter for body)
- Maintain light, professional aesthetic

### 2. User Experience
- Fast loading (single file, minimal dependencies)
- Smooth animations and transitions
- Clear visual hierarchy
- Accessible navigation
- Mobile-first responsive design

### 3. Visual Quality
- Clean, modern aesthetic
- Proper spacing and white space
- Consistent border radius
- Subtle shadows and depth
- Professional imagery

### 4. Performance
- Optimized CSS (combine similar rules)
- Efficient JavaScript (event delegation)
- Lazy loading for images (optional)
- Minimal DOM manipulation

## Questions to Consider

1. **Content Customization**
   - What should the main heading say?
   - What description text should appear?
   - What should the CTA button text be?
   - Which companies should appear in the partners section?

2. **Visual Preferences**
   - Should the hero image use the perspective effect?
   - Do you want animated entrance effects?
   - Should there be a dark mode toggle?
   - Any specific logo requirements?

3. **Functionality**
   - Should links scroll to sections or navigate to pages?
   - Should the mobile menu close on link click?
   - Any specific tracking or analytics needs?
   - Form integration requirements?

## Final Deliverable

A single `hero-section.html` file containing:
- ✅ Complete HTML structure
- ✅ Inline CSS with DreamyHook theme
- ✅ Vanilla JavaScript for interactions
- ✅ Mobile responsive design
- ✅ Professional hero section layout
- ✅ Partner logos section
- ✅ Smooth animations and transitions
- ✅ Accessible markup (ARIA labels, semantic HTML)
- ✅ Working navigation with mobile menu
- ✅ Optimized for performance

## Success Criteria

1. **Visual**: Matches DreamyHook brand aesthetic with marigold/midnight color scheme
2. **Functional**: All interactive elements work smoothly
3. **Responsive**: Looks great on all device sizes
4. **Performance**: Loads quickly, smooth animations
5. **Code Quality**: Clean, well-commented, maintainable
6. **Accessibility**: Proper semantic HTML, ARIA labels, keyboard navigation

---

**Ready to implement?** Create the hero section following this specification with DreamyHook's warm, professional, and modern aesthetic!

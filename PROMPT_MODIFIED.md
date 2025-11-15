# Transition Panel Component - DreamyHook Brand Theme
## Modified Prompt for HTML/CSS/JavaScript Single File Implementation

---

## Overview
You are given a task to create a **Transition Panel Component** as a single HTML file using vanilla JavaScript, CSS, and DreamyHook's brand theme.

This implementation should:
- Use **pure HTML, CSS, and JavaScript** (no frameworks)
- Be contained in a **single .html file**
- Follow **DreamyHook's brand theme** with Marigold Yellow (#FCBF49), Midnight Blue (#0A1128), and Buttercup Yellow (#FFD23F)
- Include smooth animations and transitions
- Be fully responsive and accessible

---

## Brand Theme - DreamyHook

### Color Palette
- **Primary**: Marigold Yellow (#FCBF49) - main brand color
- **Secondary**: Midnight Blue (#0A1128) - deep, sophisticated
- **Accent**: Buttercup Yellow (#FFD23F) - bright, cheerful
- **Coral**: #FF6B4A - warm accent for CTAs
- **Sky Blue**: #0ea5e9 - fresh accent

### Neutral Colors
- **White**: #ffffff - pure white
- **Warm White**: #fffef9 - background
- **Cream**: #fef9e7 - light backgrounds
- **Warm Gray**: #78716c - medium text
- **Dark Gray**: #44403c - dark text
- **Near Black**: #1c1917 - darkest text

### Typography
- **Headings**: 'Poppins', sans-serif
- **Body**: 'Inter', sans-serif
- **Monospace**: 'JetBrains Mono', monospace

### Shadows & Effects
- **Soft Shadow**: 0 2px 15px 0 rgba(10, 17, 40, 0.05)
- **Medium Shadow**: 0 4px 25px 0 rgba(10, 17, 40, 0.1)
- **Marigold Glow**: 0 0 30px 0 rgba(252, 191, 73, 0.25)
- **Buttercup Glow**: 0 0 30px 0 rgba(255, 210, 63, 0.3)

### Gradients
- **Golden Gradient**: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%)
- **Sunrise Gradient**: linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%)
- **Warm Background**: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%)

---

## Component Structure

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Transition Panel Component</title>
    <style>
        /* Inline CSS with DreamyHook theme */
    </style>
</head>
<body>
    <div class="container">
        <div class="transition-panel-wrapper">
            <!-- Component HTML -->
        </div>
    </div>
    <script>
        /* Vanilla JavaScript for transitions */
    </script>
</body>
</html>
```

### Features to Implement
1. **Transition Panel Card** with smooth slide animations
2. **Navigation buttons** (Previous/Next) styled with DreamyHook theme
3. **Feature cards** showcasing DreamyHook services:
   - Brand Design
   - Product Development
   - Website Creation
   - Design Systems

### Animation Requirements
- **Slide transitions**: smooth horizontal slide with opacity fade
- **Spring-like easing**: cubic-bezier(0.65, 0.05, 0, 1)
- **Duration**: ~0.735s for transitions
- **Direction aware**: slides left or right based on navigation
- **Height auto-adjustment**: smooth height transitions between panels

---

## Implementation Guidelines

### 1. CSS Styling
- Use CSS custom properties (variables) for theme colors
- Implement smooth transitions with `transition` and `animation` properties
- Create card with border-radius and subtle shadows
- Ensure responsive design with media queries
- Apply DreamyHook's warm color palette throughout

### 2. JavaScript Functionality
- Track active panel index
- Handle Previous/Next button clicks
- Implement slide direction detection
- Animate panel transitions (translateX + opacity)
- Auto-adjust panel height dynamically
- Handle edge cases (first/last panel)

### 3. Accessibility
- Proper semantic HTML
- ARIA labels for navigation
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast ratios

### 4. Responsive Behavior
- Mobile-first approach
- Adjust panel width for smaller screens
- Touch-friendly button sizes
- Readable font sizes across devices

---

## Content for Feature Cards

Use these DreamyHook service descriptions:

1. **Brand Design**
   - Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.

2. **Product Development**
   - Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions. We specialize in web applications.

3. **Website Creation**
   - Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.

4. **Design Systems**
   - Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.

---

## Button Styling

Buttons should follow DreamyHook theme:
- **Background**: White with warm tint
- **Border**: Subtle border with Midnight Blue
- **Hover**: Marigold Yellow background with transition
- **Active**: Scale down slightly (0.98)
- **Text**: Midnight Blue color
- **Border Radius**: Rounded corners (8px)
- **Shadow**: Soft shadow on hover

---

## File Structure

Everything in one file:
```
transition-panel.html
├── <style> CSS (embedded)
│   ├── CSS Variables (DreamyHook colors)
│   ├── Reset & Base Styles
│   ├── Component Styles
│   ├── Animation Keyframes
│   └── Responsive Media Queries
├── <body> HTML Structure
│   ├── Container
│   ├── Panel Wrapper
│   ├── Feature Content Divs
│   └── Navigation Buttons
└── <script> JavaScript
    ├── State Management (activeIndex, direction)
    ├── Feature Data Array
    ├── Render Functions
    ├── Animation Logic
    └── Event Listeners
```

---

## Steps to Create

1. **Set up HTML boilerplate** with proper meta tags
2. **Import Google Fonts** (Inter, Poppins)
3. **Define CSS variables** for DreamyHook theme
4. **Style the container** and panel wrapper
5. **Create panel content styles** with proper typography
6. **Style navigation buttons** with hover effects
7. **Write JavaScript** for:
   - Feature data management
   - Panel rendering
   - Transition animations
   - Button event handlers
   - Direction detection
8. **Add animations** for slide and fade effects
9. **Implement responsive design** for mobile/tablet
10. **Test accessibility** and keyboard navigation

---

## Questions to Consider

- How should the panel behave on mobile devices?
- Should there be auto-play functionality?
- What happens when reaching the first/last panel?
- Should we add dot indicators for navigation?
- How to handle dynamic content heights smoothly?

---

## Expected Outcome

A fully functional, single-file HTML component that:
- ✅ Displays feature cards with smooth transitions
- ✅ Allows navigation between panels
- ✅ Uses DreamyHook's brand colors and typography
- ✅ Responds beautifully on all screen sizes
- ✅ Provides accessible navigation
- ✅ Includes hover states and micro-interactions
- ✅ Has no external dependencies (except fonts)

---

## Notes

- No external JavaScript libraries required
- All animations done with CSS transitions + JavaScript
- Single file for easy deployment
- Optimized for performance
- Clean, readable code with comments

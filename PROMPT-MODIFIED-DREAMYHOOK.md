# DreamyHook Floating Dock Component - HTML/CSS/JavaScript (Single File)

## Brand Theme Integration

You are given a task to create a floating dock component as a **single HTML file** using vanilla HTML, CSS, and JavaScript.

### DreamyHook Brand Colors:
- **Primary**: Marigold Yellow `#FCBF49`
- **Secondary**: Midnight Blue `#0A1128`
- **Accent**: Buttercup Yellow `#FFD23F`
- **Coral**: `#FF6B4A`
- **Sky Blue**: `#0ea5e9`
- **Neutral Warm Grays**: `#fffef9` (warm white), `#fef9e7` (light cream)

### Typography:
- **Sans-serif**: Inter (Google Fonts)
- **Headings**: Poppins (Google Fonts)
- **Monospace**: JetBrains Mono (Google Fonts)

### Design System:
- Light theme with warm whites and creams
- Golden glow effects using Marigold Yellow
- Smooth animations with floating effects
- Glassmorphism with backdrop blur
- Warm shadows with golden tints

## Component Specification

Create a **single HTML file** that includes:

### 1. Floating Dock Component
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, fonts, and embedded CSS -->
</head>
<body>
  <!-- Dock component HTML -->
  <!-- Embedded JavaScript -->
</body>
</html>
```

### 2. Features Required:
- **Floating animation**: Gentle vertical floating motion (y-axis oscillation)
- **Hover effects**: Scale up and move icons up slightly on hover
- **Click/tap effects**: Scale down on click for tactile feedback
- **Tooltip labels**: Show on hover above each icon
- **Glassmorphism**: Backdrop blur with semi-transparent background
- **Responsive**: Works on desktop, tablet, and mobile

### 3. Icons to Include:
Use Unicode symbols or Font Awesome icons (via CDN):
- Home (🏠)
- Search (🔍)
- Music (🎵)
- Heart/Favorites (❤️)
- Plus/Add (➕)
- User/Profile (👤)
- Settings (⚙️)

Alternative: Use Font Awesome CDN for better icon quality

### 4. Color Application:
- **Dock background**: Semi-transparent warm white with backdrop blur `rgba(255, 254, 249, 0.9)`
- **Border**: Light warm gray `rgba(254, 249, 231, 0.5)`
- **Icons**: Midnight Blue `#0A1128`
- **Hover state**: Marigold Yellow background `#FCBF49` or Buttercup Yellow `#FFD23F`
- **Tooltip**: Midnight Blue background `#0A1128` with white text
- **Shadow**: Warm golden shadow `0 4px 20px rgba(252, 191, 73, 0.15)`
- **Glow on hover**: `0 0 30px rgba(252, 191, 73, 0.5)`

### 5. Animation Specifications:

#### Floating Animation (Dock Container):
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
/* Duration: 4s, ease-in-out, infinite */
```

#### Hover Animation (Individual Icons):
```css
/* Scale: 1.1, translateY: -2px */
/* Transition: 0.3s ease-out */
```

#### Click Animation:
```css
/* Scale: 0.95 */
/* Transition: 0.1s ease-in */
```

### 6. Layout Structure:
```
Container (full viewport width, centered)
  └─ Dock Wrapper (max-width: 1024px, centered)
      └─ Dock (glassmorphic container with floating animation)
          └─ Icon Buttons (7 items in a row with gap)
              └─ Icon + Tooltip
```

### 7. Responsive Breakpoints:
- **Desktop** (>992px): Full dock, 7 icons, gap: 0.5rem
- **Tablet** (768px - 991px): Medium dock, 7 icons, gap: 0.25rem
- **Mobile** (<768px): Compact dock, consider 2 rows or smaller icons

## CSS Variables to Define:
```css
:root {
  --color-primary: #FCBF49;        /* Marigold Yellow */
  --color-secondary: #0A1128;      /* Midnight Blue */
  --color-accent: #FFD23F;         /* Buttercup Yellow */
  --color-coral: #FF6B4A;
  --color-sky: #0ea5e9;

  --color-neutral-100: #ffffff;
  --color-neutral-200: #fffef9;    /* Warm white */
  --color-neutral-300: #fffdf0;    /* Cream white */
  --color-neutral-400: #fef9e7;    /* Light cream */

  --shadow-warm: 0 4px 20px rgba(252, 191, 73, 0.15);
  --glow-marigold: 0 0 30px rgba(252, 191, 73, 0.5);
  --glow-buttercup: 0 0 30px rgba(255, 210, 63, 0.5);
}
```

## Implementation Guidelines

### Step 1: HTML Structure
Create semantic HTML with:
- Proper DOCTYPE and meta tags
- Google Fonts imports (Inter, Poppins)
- Font Awesome CDN (optional, or use Unicode)
- Main container with dock wrapper
- Icon button elements with data attributes

### Step 2: Embedded CSS
Include all styles in `<style>` tag:
- CSS variables
- Reset/base styles
- Component styles with glassmorphism
- Animations (float, hover, click)
- Responsive media queries
- Utility classes for glow effects

### Step 3: Embedded JavaScript
Include functionality in `<script>` tag:
- Icon click handlers
- Tooltip positioning
- Optional: Add click sound/haptic feedback
- Optional: Persist dock position

### Step 4: Enhancements
- Add smooth transitions for all interactive states
- Implement accessibility (ARIA labels, keyboard navigation)
- Add focus states for keyboard users
- Consider prefers-reduced-motion for animations

## Example Icon Button Structure:
```html
<button
  class="dock-icon-button"
  data-label="Home"
  aria-label="Home"
  role="button"
  tabindex="0"
>
  <i class="fa-solid fa-house"></i> <!-- or Unicode 🏠 -->
  <span class="tooltip">Home</span>
</button>
```

## Questions to Consider:
1. Should icons have different colors or all use Midnight Blue?
2. Should active/selected icon have special styling (e.g., Marigold Yellow background)?
3. Should the dock be fixed at bottom of viewport or centered in the page?
4. Do you want sound effects on click (optional)?
5. Should tooltip position adapt based on dock position?

## Expected Output:
A single, self-contained HTML file named `dreamyhook-floating-dock.html` that:
- Works without any external dependencies (except Google Fonts and optional Font Awesome CDN)
- Displays a beautiful floating dock with DreamyHook branding
- Has smooth animations and interactions
- Is fully responsive
- Follows accessibility best practices
- Uses the complete DreamyHook color palette and design system

## Deliverable:
`dreamyhook-floating-dock.html` - Ready to open in any modern browser

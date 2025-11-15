# DreamyHook Slide Button Component - Vanilla HTML/CSS/JavaScript

## Overview
You are given a task to create a **Slide Button component** using vanilla HTML, CSS, and JavaScript in a **single file**.

This component should:
- Use the **DreamyHook brand theme** (Marigold Yellow #FCBF49, Midnight Blue #0A1128, Buttercup Yellow #FFD23F)
- Be fully self-contained in one HTML file
- Work without any build tools or external dependencies
- Implement smooth drag-to-confirm functionality

---

## Component Specifications

### Visual Design
The slide button should feature:
- A rounded pill-shaped container with warm cream background (#fffef9)
- A draggable button with the Marigold Yellow (#FCBF49) primary color
- A golden gradient fill that follows the drag progress
- Smooth spring-like animations matching DreamyHook's animation system
- Status indicators: loading spinner, success checkmark, error X

### Interaction Flow
1. **Initial State**: Button shows a send icon on the left side of a pill container
2. **Dragging**: User can drag the button to the right; a golden gradient fills behind it
3. **Threshold**: When dragged ~90% across, the button completes the action
4. **Loading State**: Button shows a spinning loader
5. **Success State**: Button shows a checkmark with success styling
6. **Error State**: Button shows an X with error styling

---

## DreamyHook Brand Theme

### Color Palette
```css
/* Primary Colors */
--color-primary: #FCBF49;        /* Marigold Yellow - main brand */
--color-secondary: #0A1128;      /* Midnight Blue - dark text */
--color-accent: #FFD23F;         /* Buttercup Yellow - bright accent */
--color-coral: #FF6B4A;          /* Coral - warm CTA */

/* Neutrals - Warm Gray Palette */
--color-neutral-100: #ffffff;    /* Pure white */
--color-neutral-200: #fffef9;    /* Warm white */
--color-neutral-300: #fffdf0;    /* Cream white */
--color-neutral-500: #78716c;    /* Medium warm gray */
--color-neutral-900: #1c1917;    /* Near black warm */

/* Semantic Colors */
--color-success: #22c55e;        /* Green */
--color-error: #ef4444;          /* Red */
--color-warning: #f59e0b;        /* Amber */
```

### Typography
```css
font-family: 'Inter', 'Poppins', ui-sans-serif, system-ui, sans-serif;
```

### Shadows & Glows
```css
/* Marigold glow effect */
box-shadow: 0 0 20px rgba(252, 191, 73, 0.3);

/* Button elevation */
box-shadow: 0 4px 20px 0 rgba(252, 191, 73, 0.15);

/* Soft shadow */
box-shadow: 0 2px 15px 0 rgba(10, 17, 40, 0.05);
```

### Gradients
```css
/* Golden gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);

/* Sunrise gradient */
background: linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%);

/* Warm background */
background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
```

---

## Component HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook Slide Button</title>
    <style>
        /* CSS here - implement all styles inline */
    </style>
</head>
<body>
    <div class="demo-container">
        <div class="slide-button-wrapper">
            <div class="slide-button-track"></div>
            <button class="slide-button-handle">
                <svg class="icon icon-send"><!-- Send icon SVG --></svg>
                <svg class="icon icon-loading"><!-- Loading spinner SVG --></svg>
                <svg class="icon icon-success"><!-- Check icon SVG --></svg>
                <svg class="icon icon-error"><!-- X icon SVG --></svg>
            </button>
        </div>
    </div>

    <script>
        // JavaScript implementation here
    </script>
</body>
</html>
```

---

## Implementation Requirements

### CSS Requirements
1. **Import fonts from Google Fonts**:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
   ```

2. **Use CSS Custom Properties** for all DreamyHook theme colors

3. **Implement smooth transitions** matching the brand's animation system:
   ```css
   transition: all 0.735s cubic-bezier(0.65, 0.05, 0, 1);
   ```

4. **Responsive design** with proper scaling on mobile devices

5. **Apply golden glow effects** on hover and active states

### JavaScript Requirements
1. **Drag functionality**:
   - Track mouse/touch position
   - Update button position in real-time
   - Apply smooth spring-like physics (ease-out animations)
   - Constrain drag to horizontal axis only

2. **Progress tracking**:
   - Calculate drag progress (0% to 100%)
   - Update gradient fill width based on progress
   - Trigger completion at 90% threshold

3. **State management**:
   ```javascript
   const states = {
       IDLE: 'idle',
       DRAGGING: 'dragging',
       LOADING: 'loading',
       SUCCESS: 'success',
       ERROR: 'error'
   };
   ```

4. **Event handlers**:
   - `mousedown` / `touchstart`: Start drag
   - `mousemove` / `touchmove`: Update position
   - `mouseup` / `touchend`: Complete or reset

5. **Animation timing**:
   - Loading: 2 seconds
   - Success/Error display: 1.5 seconds
   - Reset: After 2 seconds in success/error state

### Icon SVGs (from Lucide)
Use these SVG paths for icons:

```javascript
const icons = {
    send: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>',

    loading: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',

    success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',

    error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
};
```

---

## Drag Physics Implementation

```javascript
// Spring animation configuration
const springConfig = {
    stiffness: 400,
    damping: 40,
    mass: 0.8
};

// Drag constraints
const dragConstraints = {
    left: 0,
    right: 155  // Maximum drag distance in pixels
};

// Completion threshold
const dragThreshold = 0.9;  // 90% of total width

// Smooth spring animation using requestAnimationFrame
function animateSpring(from, to, duration, onUpdate, onComplete) {
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic for spring-like feel
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = from + (to - from) * eased;

        onUpdate(value);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            onComplete?.();
        }
    }

    requestAnimationFrame(animate);
}
```

---

## Styling Guidelines

### Container
```css
.slide-button-wrapper {
    position: relative;
    width: 12rem;
    height: 2.25rem;
    background: var(--color-neutral-200);
    border-radius: 9999px;
    box-shadow: inset 0 2px 4px rgba(10, 17, 40, 0.06);
    overflow: hidden;
}
```

### Progress Fill
```css
.slide-button-track {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;  /* Animated via JavaScript */
    background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);
    border-radius: 9999px;
    transition: width 0.1s ease-out;
}
```

### Button Handle
```css
.slide-button-handle {
    position: absolute;
    left: 0;  /* Animated via JavaScript */
    top: 50%;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    background: var(--color-primary);
    border: none;
    border-radius: 9999px;
    cursor: grab;
    box-shadow: 0 4px 20px rgba(252, 191, 73, 0.3);
    transition: box-shadow 0.3s ease, transform 0.1s ease;
    z-index: 10;
}

.slide-button-handle:active {
    cursor: grabbing;
    box-shadow: 0 6px 30px rgba(252, 191, 73, 0.5);
}

.slide-button-handle:hover {
    box-shadow: 0 6px 30px rgba(252, 191, 73, 0.4);
}
```

### Icons
```css
.icon {
    width: 20px;
    height: 20px;
    color: var(--color-secondary);
    display: none;
}

.icon.active {
    display: block;
    animation: fadeIn 0.3s ease-in;
}

.icon-loading.active {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
}
```

---

## Success Criteria

✅ Single HTML file with inline CSS and JavaScript
✅ No external dependencies or build tools required
✅ Smooth drag interaction with spring physics
✅ Golden gradient fill follows drag progress
✅ Shows loading → success/error states
✅ Uses DreamyHook brand colors throughout
✅ Responsive on mobile devices
✅ Works in all modern browsers
✅ Accessible (keyboard support optional but recommended)

---

## Demo Container Styling

```css
.demo-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
    font-family: 'Inter', 'Poppins', ui-sans-serif, system-ui, sans-serif;
    padding: 2rem;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}
```

---

## File Output

**File name**: `dreamyhook-slide-button.html`

**Location**: Root of the repository

**Format**: Single HTML file with:
- Complete HTML structure
- Inline `<style>` tag with all CSS
- Inline `<script>` tag with all JavaScript
- No external dependencies

---

## Testing Checklist

- [ ] Button drags smoothly from left to right
- [ ] Gradient fills behind the button as it drags
- [ ] Button snaps back when released before threshold
- [ ] Button completes when dragged past 90%
- [ ] Loading spinner appears and rotates
- [ ] Success checkmark appears after loading
- [ ] Component works on touch devices
- [ ] Component works on desktop with mouse
- [ ] All colors match DreamyHook brand theme
- [ ] Animations are smooth and professional
- [ ] No console errors
- [ ] Works without internet connection (no CDN dependencies)

---

## Notes

- Use `pointer-events` CSS for better mobile support
- Add `user-select: none` to prevent text selection during drag
- Consider adding haptic feedback on mobile (vibration API)
- Ensure high contrast for accessibility
- Test on iOS Safari, Chrome, Firefox, and Edge

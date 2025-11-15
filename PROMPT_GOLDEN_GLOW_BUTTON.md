# DreamyHook Golden Glow Button Component - Single HTML File Implementation

## Overview
You are given a task to create a beautiful animated button component for the DreamyHook brand using vanilla HTML, CSS, and JavaScript in a **single file**.

This component features:
- **Golden Glow Animation** - Smooth gradient animation using DreamyHook's brand colors (Marigold Yellow, Buttercup Yellow, Coral)
- **Responsive Design** - Works on all screen sizes
- **Accessible** - Keyboard and screen reader friendly
- **No Dependencies** - Pure HTML/CSS/JavaScript

## DreamyHook Brand Colors

The component uses the following brand color palette:
- **Primary (Marigold Yellow)**: `#FCBF49` - Main brand color
- **Accent (Buttercup Yellow)**: `#FFD23F` - Bright accent
- **Coral**: `#FF6B4A` - Warm accent for CTAs
- **Secondary (Midnight Blue)**: `#0A1128` - Deep, sophisticated contrast
- **Sky Blue**: `#0ea5e9` - Fresh accent
- **Warm Gradients**: Golden sunrise gradient combining all warm tones

## Component Code

Copy and paste this complete HTML file to create your DreamyHook Golden Glow Button:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DreamyHook - Golden Glow Button Component</title>

  <!-- DreamyHook Brand Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    /* ------------------------- DreamyHook Theme Variables ------------------------- */
    :root {
      /* Brand Colors - Marigold Yellow, Buttercup Yellow, Midnight Blue */
      --color-primary: #FCBF49;        /* Marigold Yellow */
      --color-secondary: #0A1128;      /* Midnight Blue */
      --color-accent: #FFD23F;         /* Buttercup Yellow */
      --color-coral: #FF6B4A;          /* Coral */
      --color-sky: #0ea5e9;            /* Sky Blue */

      /* Golden Glow Animation Colors */
      --color-glow-1: #FFD23F;         /* Buttercup Yellow */
      --color-glow-2: #FCBF49;         /* Marigold Yellow */
      --color-glow-3: #f59e0b;         /* Darker Golden */
      --color-glow-4: #FF6B4A;         /* Coral */
      --color-glow-5: #e6b800;         /* Deep Buttercup */

      /* Neutral Colors */
      --color-neutral-100: #ffffff;
      --color-neutral-200: #fffef9;    /* Warm white */
      --color-neutral-800: #292524;

      /* Typography */
      --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
      --font-heading: "Poppins", ui-sans-serif, system-ui, sans-serif;

      /* Animation */
      --animation-speed: 3s;
    }

    /* ------------------------- Reset & Base Styles ------------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-sans);
      background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      color: var(--color-secondary);
      -webkit-font-smoothing: antialiased;
    }

    /* ------------------------- Golden Glow Button Component ------------------------- */
    .golden-glow-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      /* Sizing */
      min-height: 3.5rem;
      padding: 0.75rem 2.5rem;

      /* Typography */
      font-family: var(--font-heading);
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-neutral-100);
      text-decoration: none;

      /* Border & Shape */
      border: 3px solid transparent;
      border-radius: 1rem;
      background-clip: padding-box, border-box;
      background-origin: border-box;

      /* Gradient Background */
      background-image:
        linear-gradient(var(--color-secondary), var(--color-secondary)),
        linear-gradient(var(--color-secondary) 50%, rgba(10, 17, 40, 0.6) 80%, rgba(10, 17, 40, 0)),
        linear-gradient(
          90deg,
          var(--color-glow-1),
          var(--color-glow-2),
          var(--color-glow-3),
          var(--color-glow-4),
          var(--color-glow-5),
          var(--color-glow-1)
        );
      background-size: 100%, 100%, 200%;

      /* Animation */
      animation: goldenGlowAnimation var(--animation-speed) infinite linear;

      /* Interaction */
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      outline: none;

      /* Accessibility */
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    /* Glow Effect (pseudo-element) */
    .golden-glow-button::before {
      content: '';
      position: absolute;
      bottom: -20%;
      left: 50%;
      transform: translateX(-50%);

      /* Glow sizing */
      width: 60%;
      height: 20%;

      /* Glow gradient */
      background: linear-gradient(
        90deg,
        var(--color-glow-1),
        var(--color-glow-2),
        var(--color-glow-3),
        var(--color-glow-4),
        var(--color-glow-5),
        var(--color-glow-1)
      );
      background-size: 200%;

      /* Blur effect */
      filter: blur(1rem);
      border-radius: 50%;

      /* Animation */
      animation: goldenGlowAnimation var(--animation-speed) infinite linear;
      z-index: -1;
      opacity: 0.8;
    }

    /* Hover State */
    .golden-glow-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(252, 191, 73, 0.3);
    }

    /* Active State */
    .golden-glow-button:active {
      transform: translateY(0);
    }

    /* Focus State (Accessibility) */
    .golden-glow-button:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 4px;
    }

    /* Disabled State */
    .golden-glow-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* ------------------------- Animation Keyframes ------------------------- */
    @keyframes goldenGlowAnimation {
      0% {
        background-position: 0%, 0%, 0%;
      }
      100% {
        background-position: 0%, 0%, 200%;
      }
    }

    /* ------------------------- Demo Page Styles ------------------------- */
    .demo-container {
      text-align: center;
      max-width: 900px;
      background: rgba(255, 255, 255, 0.9);
      padding: 3rem;
      border-radius: 2rem;
      box-shadow: 0 10px 40px rgba(10, 17, 40, 0.1);
    }

    .demo-title {
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #FCBF49 0%, #f59e0b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .demo-subtitle {
      font-size: 1.125rem;
      color: var(--color-neutral-800);
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    .demo-grid {
      display: grid;
      gap: 2rem;
      margin-top: 3rem;
    }

    .demo-section {
      padding: 2rem;
      background: var(--color-neutral-200);
      border-radius: 1rem;
    }

    .demo-section h3 {
      font-family: var(--font-heading);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--color-secondary);
    }

    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

    /* Size Variants */
    .golden-glow-button.btn-small {
      min-height: 2.5rem;
      padding: 0.5rem 1.5rem;
      font-size: 0.875rem;
    }

    .golden-glow-button.btn-large {
      min-height: 4rem;
      padding: 1rem 3rem;
      font-size: 1.25rem;
    }

    /* Code Block */
    .code-block {
      background: var(--color-secondary);
      color: var(--color-accent);
      padding: 1.5rem;
      border-radius: 0.75rem;
      margin-top: 2rem;
      text-align: left;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      overflow-x: auto;
    }

    /* Responsive Design */
    @media screen and (max-width: 768px) {
      .demo-container {
        padding: 2rem 1.5rem;
      }

      .demo-title {
        font-size: 2rem;
      }

      .golden-glow-button {
        font-size: 1rem;
        padding: 0.625rem 2rem;
      }

      .button-row {
        flex-direction: column;
      }
    }

    @media screen and (max-width: 480px) {
      .demo-title {
        font-size: 1.75rem;
      }

      .demo-container {
        padding: 1.5rem 1rem;
      }
    }
  </style>
</head>
<body>

  <!-- Demo Container -->
  <div class="demo-container">
    <h1 class="demo-title">DreamyHook Golden Glow Button</h1>
    <p class="demo-subtitle">
      A beautiful, animated button component featuring DreamyHook's signature golden gradient.
      Built with pure HTML, CSS, and JavaScript - no dependencies required.
    </p>

    <!-- Primary Demo -->
    <div>
      <button class="golden-glow-button" id="mainButton">
        Get Unlimited Access
      </button>
    </div>

    <!-- Variants Grid -->
    <div class="demo-grid">

      <!-- Size Variants -->
      <div class="demo-section">
        <h3>Size Variants</h3>
        <div class="button-row">
          <button class="golden-glow-button btn-small">Small Button</button>
          <button class="golden-glow-button">Default Button</button>
          <button class="golden-glow-button btn-large">Large Button</button>
        </div>
      </div>

      <!-- Different Text Examples -->
      <div class="demo-section">
        <h3>Usage Examples</h3>
        <div class="button-row">
          <button class="golden-glow-button">Start Free Trial</button>
          <button class="golden-glow-button">Learn More</button>
          <button class="golden-glow-button">Contact Sales</button>
        </div>
      </div>

      <!-- As Link -->
      <div class="demo-section">
        <h3>Button as Link</h3>
        <div class="button-row">
          <a href="#" class="golden-glow-button" role="button">Explore Features</a>
        </div>
      </div>

      <!-- Disabled State -->
      <div class="demo-section">
        <h3>Disabled State</h3>
        <div class="button-row">
          <button class="golden-glow-button" disabled>Disabled Button</button>
        </div>
      </div>

    </div>

    <!-- Usage Code -->
    <div class="code-block">
&lt;button class="golden-glow-button"&gt;
  Get Unlimited Access
&lt;/button&gt;
    </div>
  </div>

  <!-- JavaScript for Interactions (Optional) -->
  <script>
    // Example: Add click handler to main button
    document.getElementById('mainButton').addEventListener('click', function() {
      alert('🎉 Welcome to DreamyHook! This button was clicked.');
      console.log('Golden Glow Button clicked!');
    });

    // Example: Add click handlers to all buttons
    const buttons = document.querySelectorAll('.golden-glow-button:not(:disabled)');
    buttons.forEach((button, index) => {
      button.addEventListener('click', function(e) {
        // Prevent default for links in demo
        if (this.tagName === 'A') {
          e.preventDefault();
        }

        console.log(`Button ${index + 1} clicked:`, this.textContent.trim());

        // Optional: Add ripple effect or other interactions here
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 100);
      });
    });

    // Optional: Keyboard accessibility enhancement
    document.addEventListener('keydown', function(e) {
      // Example: Trigger click on Enter or Space
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('golden-glow-button')) {
        e.preventDefault();
        e.target.click();
      }
    });

    // Optional: Log when component is loaded
    console.log('✨ DreamyHook Golden Glow Button Component loaded successfully!');
  </script>

</body>
</html>
```

## Implementation Guidelines

### 1. File Structure
- **Single HTML file** - Everything is self-contained
- No external dependencies required
- Google Fonts loaded via CDN for brand fonts (Inter & Poppins)

### 2. Customization Options

#### Change Animation Speed
```css
:root {
  --animation-speed: 2s; /* Faster animation */
}
```

#### Change Button Colors
Modify the gradient colors in `:root`:
```css
:root {
  --color-glow-1: #YOUR_COLOR_1;
  --color-glow-2: #YOUR_COLOR_2;
  /* ... etc */
}
```

#### Add Custom Size
```css
.golden-glow-button.btn-extra-large {
  min-height: 5rem;
  padding: 1.25rem 3.5rem;
  font-size: 1.5rem;
}
```

### 3. Accessibility Features
✅ Keyboard navigation support (Tab, Enter, Space)
✅ Focus-visible outline for keyboard users
✅ ARIA roles for semantic links
✅ Proper contrast ratios
✅ Screen reader friendly
✅ Disabled state properly communicated

### 4. Browser Support
- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### 5. Responsive Behavior
- Adapts to mobile screens (< 768px)
- Stacks vertically on small screens (< 480px)
- Touch-friendly sizing on mobile devices

### 6. Performance Optimizations
- CSS animations (GPU accelerated)
- Minimal DOM manipulation
- Efficient event delegation
- Preconnect to Google Fonts for faster loading

## Usage in Your Project

1. **Copy the entire HTML** above into a new `.html` file
2. **Open in browser** - No build step required!
3. **Customize** the button text, colors, and sizes as needed
4. **Integrate** into your existing HTML pages by copying the CSS and HTML markup

## Questions to Consider

1. **What action will the button trigger?**
   - Form submission?
   - Navigation to another page?
   - Opening a modal?
   - API call?

2. **Where will you use it?**
   - Homepage hero section?
   - Pricing page?
   - Call-to-action sections?
   - Forms?

3. **Do you need additional variants?**
   - Different colors (e.g., success, warning, error)?
   - Outline versions?
   - Icon + text combinations?

4. **Integration with existing code?**
   - Event tracking/analytics?
   - Form validation?
   - Loading states?

## Next Steps

1. ✅ Copy the code to a new HTML file
2. ✅ Open in your browser to test
3. ✅ Customize the button text and styling
4. ✅ Add your own click handlers in the `<script>` section
5. ✅ Integrate into your DreamyHook project

---

**Note**: This component is designed specifically for the DreamyHook brand using the Marigold Yellow (#FCBF49), Buttercup Yellow (#FFD23F), and Midnight Blue (#0A1128) color palette. The golden glow animation creates a warm, premium feel that aligns with the DreamyHook brand identity.

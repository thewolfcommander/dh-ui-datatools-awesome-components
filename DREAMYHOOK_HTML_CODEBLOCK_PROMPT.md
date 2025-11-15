# DreamyHook CodeBlock Component - Vanilla HTML/CSS/JavaScript

You are given a task to create a CodeBlock component in **vanilla HTML, CSS, and JavaScript** (single file only).

## Project Requirements

The implementation should:
- Use **pure HTML, CSS, and JavaScript** (no frameworks)
- Be contained in a **single HTML file**
- Follow **DreamyHook brand theme** guidelines
- Be fully responsive and accessible
- Support modern browsers (ES6+ syntax is fine)

## DreamyHook Brand Theme Colors

Apply these brand colors consistently:

### Primary Colors
- **Marigold Yellow** (Primary): `#FCBF49` - Use for primary buttons, highlights, and brand elements
- **Midnight Blue** (Secondary): `#0A1128` - Use for text, dark backgrounds, and code blocks
- **Buttercup Yellow** (Accent): `#FFD23F` - Use for hover states and bright accents
- **Coral**: `#FF6B4A` - Use for CTAs and warm accents
- **Sky Blue**: `#0ea5e9` - Use for links and fresh accents

### Neutral Colors (Warm Gray Palette)
- White: `#ffffff`
- Warm White: `#fffef9`
- Cream White: `#fffdf0`
- Light Cream: `#fef9e7`
- Medium Warm Gray: `#78716c`
- Dark Warm Gray: `#57534e`
- Very Dark Warm Gray: `#44403c`
- Almost Black: `#292524`
- Near Black: `#1c1917`

### Semantic Colors
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`

## Typography

Use these font families (from Google Fonts):
- **Sans-serif**: Inter (weights: 300, 400, 500, 600, 700)
- **Headings**: Poppins (weights: 400, 500, 600, 700, 800)
- **Monospace**: JetBrains Mono (for code blocks)

## CSS Variables to Include

```css
:root {
  /* Brand Colors */
  --color-primary: #FCBF49;        /* Marigold Yellow */
  --color-secondary: #0A1128;      /* Midnight Blue */
  --color-accent: #FFD23F;         /* Buttercup Yellow */
  --color-coral: #FF6B4A;          /* Coral */
  --color-sky: #0ea5e9;            /* Sky Blue */

  /* Neutral Colors */
  --color-neutral-100: #ffffff;
  --color-neutral-200: #fffef9;
  --color-neutral-300: #fffdf0;
  --color-neutral-400: #fef9e7;
  --color-neutral-500: #78716c;
  --color-neutral-600: #57534e;
  --color-neutral-700: #44403c;
  --color-neutral-800: #292524;
  --color-neutral-900: #1c1917;

  /* Semantic Colors */
  --color-error: #ef4444;
  --color-success: #22c55e;
  --color-warning: #f59e0b;

  /* Shadows */
  --shadow-soft: 0 2px 15px 0 rgba(10, 17, 40, 0.05);
  --shadow-medium: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
  --shadow-hard: 0 10px 40px 0 rgba(10, 17, 40, 0.15);
  --shadow-warm: 0 4px 20px 0 rgba(252, 191, 73, 0.15);
  --shadow-marigold-glow: 0 0 30px 0 rgba(252, 191, 73, 0.25);
  --shadow-buttercup-glow: 0 0 30px 0 rgba(255, 210, 63, 0.3);
}
```

## Component Specifications

Create a **CodeBlock Component** with the following features:

### Core Features
1. **Syntax Highlighting** - Use Prism.js or Highlight.js for code highlighting
2. **Copy to Clipboard** - Button to copy code with visual feedback
3. **Filename Display** - Show the filename in the header
4. **Line Numbers** - Display line numbers for code
5. **Line Highlighting** - Ability to highlight specific lines
6. **Tab Support** - Support for multiple code tabs (optional but nice to have)
7. **Responsive Design** - Works on mobile, tablet, and desktop

### Visual Design (DreamyHook Theme)
- **Background**: Dark code block using Midnight Blue (`#0A1128`) or slightly lighter variant
- **Syntax Colors**: Use warm tones that complement the brand (golden yellows, warm oranges, sky blues)
- **Copy Button**:
  - Default state: Buttercup Yellow (`#FFD23F`) text
  - Hover: Marigold Yellow (`#FCBF49`) with glow effect
  - Copied state: Success green (`#22c55e`) with checkmark icon
- **Border Radius**: Use modern rounded corners (12px - 16px)
- **Shadows**: Apply `--shadow-warm` for subtle elevation
- **Tabs** (if implemented):
  - Active tab: Marigold Yellow (`#FCBF49`) underline or background
  - Inactive tabs: Neutral gray with hover effect

### Code Structure Example

Here's what the component should be able to display:

```javascript
const DummyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
```

### Usage Example

The component should be instantiable like this (via JavaScript):

```javascript
// Single code block
new CodeBlock({
  containerId: 'code-demo-1',
  language: 'javascript',
  filename: 'DummyComponent.jsx',
  code: `...code here...`,
  highlightLines: [9, 13, 14, 18]
});

// Multi-tab code block
new CodeBlock({
  containerId: 'code-demo-2',
  filename: 'Multi-file Example',
  tabs: [
    {
      name: 'component.jsx',
      code: '...',
      language: 'javascript',
      highlightLines: [5, 10]
    },
    {
      name: 'styles.css',
      code: '...',
      language: 'css'
    }
  ]
});
```

## External Dependencies

Include these via CDN (in the `<head>` section):

### Required
1. **Prism.js** - For syntax highlighting
   ```html
   <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
   <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
   <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css" rel="stylesheet" />
   ```

2. **Google Fonts**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
   ```

### Optional (for icons)
3. **Lucide Icons** or **Feather Icons** for copy/check icons
   ```html
   <script src="https://unpkg.com/lucide@latest"></script>
   ```
   OR use inline SVG icons for copy and check.

## Implementation Guidelines

### 1. File Structure
Create a **single HTML file** with this structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook CodeBlock Component</title>

    <!-- External Dependencies -->
    <!-- Fonts, Prism.js, Icons -->

    <style>
        /* CSS Variables */
        /* Reset & Base Styles */
        /* CodeBlock Component Styles */
        /* Responsive Styles */
    </style>
</head>
<body>
    <!-- Demo Section -->
    <div class="container">
        <h1>DreamyHook CodeBlock Component</h1>

        <!-- CodeBlock instances will be rendered here -->
        <div id="code-demo-1"></div>
        <div id="code-demo-2"></div>
    </div>

    <script>
        /* CodeBlock Class Implementation */
        /* Demo Initialization */
    </script>
</body>
</html>
```

### 2. JavaScript Class Structure

```javascript
class CodeBlock {
  constructor(options) {
    this.containerId = options.containerId;
    this.language = options.language || 'javascript';
    this.filename = options.filename;
    this.code = options.code;
    this.tabs = options.tabs || [];
    this.highlightLines = options.highlightLines || [];
    this.activeTab = 0;

    this.render();
    this.attachEventListeners();
  }

  render() {
    // Generate HTML structure
    // Apply syntax highlighting with Prism.js
    // Highlight specified lines
  }

  attachEventListeners() {
    // Copy button click
    // Tab switching (if tabs exist)
  }

  copyToClipboard() {
    // Copy code to clipboard
    // Show success feedback
  }

  switchTab(index) {
    // Change active tab
    // Re-render code block
  }
}
```

### 3. Styling Guidelines

- **Use DreamyHook color palette** throughout
- **Smooth transitions** (300ms ease) for hover effects
- **Warm shadows** for depth using `--shadow-warm`
- **Glow effects** on interactive elements using `--shadow-marigold-glow`
- **Rounded corners** (12px - 16px) for modern feel
- **Responsive typography** using clamp() or media queries
- **Mobile-first approach** - ensure scrollable code on small screens

### 4. Accessibility

- Proper `aria-labels` for buttons
- Keyboard navigation support (Tab, Enter)
- Focus states visible with DreamyHook colors
- Sufficient color contrast (especially in dark code blocks)
- Semantic HTML structure

### 5. Browser Compatibility

- Support modern browsers (Chrome, Firefox, Safari, Edge)
- Use ES6+ syntax (classes, arrow functions, template literals)
- Fallback for clipboard API if needed
- Test on mobile devices

## Questions to Consider

Before implementing, think about:
1. ✅ How will the code be formatted and indented?
2. ✅ Should tabs be persistent (remember active tab)?
3. ✅ Should there be a "full screen" or "expand" option?
4. ✅ How should very long lines be handled (wrap vs scroll)?
5. ✅ Should there be a theme toggle (light/dark mode)?
6. ✅ What happens on browsers without clipboard API support?

## Steps to Implement

1. ✅ Create the HTML boilerplate with all CDN dependencies
2. ✅ Define CSS variables for DreamyHook theme
3. ✅ Write base styles (reset, typography, container)
4. ✅ Implement CodeBlock class in JavaScript
5. ✅ Style the code block container with DreamyHook theme
6. ✅ Implement syntax highlighting integration with Prism.js
7. ✅ Add copy-to-clipboard functionality with visual feedback
8. ✅ Implement tab switching (if using tabs)
9. ✅ Add line highlighting functionality
10. ✅ Style responsive behavior for mobile/tablet
11. ✅ Add hover effects and animations (glow, transitions)
12. ✅ Create demo instances to showcase the component
13. ✅ Test on different browsers and devices
14. ✅ Optimize performance (minimize repaints, efficient event listeners)

## Deliverable

A **single HTML file** (`dreamyhook-codeblock.html`) that:
- ✅ Loads all dependencies from CDN
- ✅ Contains all CSS inline in `<style>` tags
- ✅ Contains all JavaScript inline in `<script>` tags
- ✅ Demonstrates at least 2 working examples of the CodeBlock component
- ✅ Is fully responsive and works on mobile devices
- ✅ Follows DreamyHook brand theme consistently
- ✅ Is production-ready with clean, commented code

## Bonus Features (Optional)

- 🎯 Line highlighting on hover
- 🎯 Syntax theme customization
- 🎯 Export code as image/PDF
- 🎯 Diff view support (show code changes)
- 🎯 Search within code
- 🎯 Collapsible sections
- 🎯 Download code as file

---

**Remember**: Everything must be in a single HTML file with inline CSS and JavaScript. No external files except CDN dependencies!

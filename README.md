# DreamyHook UI Components

Beautiful, accessible, and lightweight UI components built with vanilla HTML, CSS, and JavaScript.

## Overview

DreamyHook UI Components is a collection of modern, accessible web components designed with the DreamyHook brand theme. Built with pure vanilla JavaScript, these components are:

- **Zero dependencies** - No frameworks required
- **Lightweight** - Fast and performant
- **Accessible** - WCAG compliant with keyboard navigation
- **Customizable** - Easy to adapt to your design system
- **Well documented** - Comprehensive guides and examples

## Brand Theme

DreamyHook uses a warm, inviting color palette:

- **Primary**: Marigold Yellow (#FCBF49)
- **Secondary**: Midnight Blue (#0A1128)
- **Accent**: Buttercup Yellow (#FFD23F)
- **Coral**: Warm accent (#FF6B4A)

## Components

### Announcement Component

A flexible badge component for announcements, notifications, and status indicators.

**Features:**
- Multiple variants (outline, default, secondary, coral, success, warning, error)
- Themed mode for glassmorphism effects
- Dismissible option
- Multiple icon types
- Smooth animations
- Responsive design

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/thewolfcommander/dh-ui-datatools-awesome-components.git
cd dh-ui-datatools-awesome-components
```

### 2. Open in browser

Simply open `index.html` in your browser to see the landing page, or open `demo/announcement-demo.html` for the interactive component demo.

### 3. Use in your project

Include the required CSS and JavaScript files:

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Styles -->
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/components/announcement.css">

<!-- Scripts -->
<script src="js/components/announcement.js"></script>
```

## Usage Examples

### HTML

```html
<div class="announcement" data-variant="default">
  <div class="announcement-tag">NEW</div>
  <div class="announcement-title">
    <span>New feature added</span>
    <svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 7h10v10M7 17L17 7"/>
    </svg>
  </div>
</div>
```

### JavaScript

```javascript
// Create an announcement programmatically
const announcement = createAnnouncement({
  tag: 'BETA',
  title: 'Try our new AI features',
  variant: 'default',
  themed: false,
  icon: true,
  iconType: 'star',
  dismissible: true,
  container: document.querySelector('#container')
});

// Update content
announcement.setContent('LIVE', 'Event starts now');

// Change variant
announcement.setVariant('coral');
```

### Create Announcement Bar

```javascript
// Create a fixed announcement bar at the top
createAnnouncementBar({
  tag: 'SALE',
  title: 'Get 50% off - Limited time only!',
  variant: 'coral',
  link: '/sale',
  dismissible: true,
  position: 'top'
});
```

## Project Structure

```
/
├── index.html                          # Landing page
├── css/
│   ├── theme.css                       # DreamyHook theme variables
│   └── components/
│       └── announcement.css            # Announcement component styles
├── js/
│   └── components/
│       └── announcement.js             # Announcement component logic
├── demo/
│   └── announcement-demo.html          # Interactive demo
└── DREAMYHOOK_COMPONENT_INTEGRATION_GUIDE.md  # Integration guide
```

## Component Variants

### Announcement Component

- **outline** - White background with subtle border (default)
- **default** - Golden gradient (Marigold to Buttercup)
- **secondary** - Midnight Blue solid
- **coral** - Sunrise gradient (Buttercup to Coral)
- **success** - Green for successful operations
- **warning** - Amber for warnings
- **error** - Red for errors

## Customization

All components use CSS custom properties (variables) defined in `css/theme.css`. You can easily customize:

- Colors
- Typography
- Spacing
- Shadows
- Animations

Example:

```css
:root {
  --color-primary: #FCBF49;    /* Change primary color */
  --font-sans: 'Your Font';     /* Change font */
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Documentation

For detailed integration instructions, see [DREAMYHOOK_COMPONENT_INTEGRATION_GUIDE.md](./DREAMYHOOK_COMPONENT_INTEGRATION_GUIDE.md)

## License

MIT License - feel free to use in your projects!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Built with care by the DreamyHook team.

---

**DreamyHook** - Beautiful web experiences made simple

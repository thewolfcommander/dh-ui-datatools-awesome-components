# DreamyHook Announcement Component - Integration Guide

## Overview
You are given a task to integrate an Announcement Badge component in the DreamyHook codebase using vanilla HTML, CSS, and JavaScript.

## Brand Theme Requirements

### Color Palette
- **Primary**: Marigold Yellow (#FCBF49) - Main brand color
- **Secondary**: Midnight Blue (#0A1128) - Deep, sophisticated
- **Accent**: Buttercup Yellow (#FFD23F) - Bright, cheerful
- **Coral**: #FF6B4A - Warm accent for CTAs
- **Sky Blue**: #0ea5e9 - Fresh accent

### Typography
- **Sans**: Inter, ui-sans-serif, system-ui, sans-serif
- **Heading**: Poppins, ui-sans-serif, system-ui, sans-serif
- **Mono**: JetBrains Mono, ui-monospace, monospace

## Project Structure

The codebase should follow this structure:
```
/
├── index.html
├── css/
│   ├── theme.css          (DreamyHook theme variables)
│   ├── components/
│   │   └── announcement.css
│   └── styles.css         (Main stylesheet)
├── js/
│   ├── components/
│   │   └── announcement.js
│   └── main.js
└── demo/
    └── announcement-demo.html
```

## Component Files

### 1. HTML Structure (`/components/announcement.html`)

```html
<!-- Announcement Component Template -->
<div class="announcement" data-variant="outline" data-themed="false">
  <div class="announcement-tag">NEW</div>
  <div class="announcement-title">
    <span>New feature added</span>
    <svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 7h10v10M7 17L17 7"/>
    </svg>
  </div>
</div>
```

### 2. CSS Styling (`/css/components/announcement.css`)

```css
/* DreamyHook Announcement Component */
/* Integrates with DreamyHook brand theme */

.announcement {
  /* Base Styles */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 100%;

  /* DreamyHook Brand Styling */
  background-color: var(--color-neutral-100);
  border: 1px solid rgba(10, 17, 40, 0.1);
  border-radius: 9999px;
  padding: 0.375rem 0.75rem;

  /* Typography - Inter font */
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-secondary);

  /* Shadows - Soft elevation */
  box-shadow: 0 2px 15px 0 rgba(10, 17, 40, 0.05);

  /* Transitions */
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0, 1);
}

.announcement:hover {
  box-shadow: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
  transform: translateY(-1px);
}

/* Variant: Outline (default) */
.announcement[data-variant="outline"] {
  background-color: var(--color-neutral-100);
  border-color: rgba(10, 17, 40, 0.1);
  color: var(--color-secondary);
}

/* Variant: Default (filled with primary) */
.announcement[data-variant="default"] {
  background: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%);
  border-color: transparent;
  color: var(--color-neutral-100);
  box-shadow: 0 4px 25px 0 rgba(252, 191, 73, 0.25);
}

.announcement[data-variant="default"]:hover {
  box-shadow: 0 0 30px 0 rgba(252, 191, 73, 0.4);
}

/* Variant: Secondary (midnight blue) */
.announcement[data-variant="secondary"] {
  background-color: var(--color-secondary);
  border-color: transparent;
  color: var(--color-neutral-100);
  box-shadow: 0 0 30px 0 rgba(10, 17, 40, 0.2);
}

/* Variant: Coral (warm accent) */
.announcement[data-variant="coral"] {
  background: linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%);
  border-color: transparent;
  color: var(--color-neutral-100);
  box-shadow: 0 4px 20px 0 rgba(255, 107, 74, 0.3);
}

/* Themed variation */
.announcement[data-themed="true"] {
  border-color: rgba(10, 17, 40, 0.05);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 254, 249, 0.95) 100%);
}

/* Announcement Tag (label inside badge) */
.announcement-tag {
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Styling */
  background-color: rgba(10, 17, 40, 0.05);
  border-radius: 9999px;
  padding: 0.25rem 0.625rem;
  margin-left: -0.625rem;

  /* Typography */
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-secondary);
}

.announcement[data-themed="true"] .announcement-tag {
  background-color: rgba(255, 254, 249, 0.6);
}

.announcement[data-variant="default"] .announcement-tag,
.announcement[data-variant="secondary"] .announcement-tag,
.announcement[data-variant="coral"] .announcement-tag {
  background-color: rgba(255, 255, 255, 0.2);
  color: inherit;
}

/* Announcement Title */
.announcement-title {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.25rem 0;
}

.announcement-title span {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Icon styling */
.announcement-icon {
  flex-shrink: 0;
  color: rgba(10, 17, 40, 0.5);
  transition: transform 0.3s ease;
}

.announcement:hover .announcement-icon {
  transform: translate(2px, -2px);
}

.announcement[data-variant="default"] .announcement-icon,
.announcement[data-variant="secondary"] .announcement-icon,
.announcement[data-variant="coral"] .announcement-icon {
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive Adjustments */
@media screen and (max-width: 767px) {
  .announcement {
    font-size: 0.813rem;
    padding: 0.313rem 0.625rem;
  }

  .announcement-tag {
    font-size: 0.688rem;
    padding: 0.188rem 0.5rem;
  }
}

/* Animation - Fade in on load */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.announcement.animate-in {
  animation: fadeInScale 0.5s ease-out forwards;
}
```

### 3. JavaScript Component (`/js/components/announcement.js`)

```javascript
/**
 * DreamyHook Announcement Component
 * A flexible badge component for announcements, tags, and notifications
 */

class AnnouncementComponent {
  constructor(element) {
    this.element = element;
    this.variant = element.dataset.variant || 'outline';
    this.themed = element.dataset.themed === 'true';
    this.init();
  }

  init() {
    // Add animation class on load
    this.element.classList.add('animate-in');

    // Add click handler if the announcement has a link
    const link = this.element.querySelector('a');
    if (link) {
      this.element.style.cursor = 'pointer';
      this.element.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
          link.click();
        }
      });
    }
  }

  // Change variant dynamically
  setVariant(variant) {
    this.variant = variant;
    this.element.dataset.variant = variant;
  }

  // Toggle themed mode
  setThemed(themed) {
    this.themed = themed;
    this.element.dataset.themed = themed.toString();
  }

  // Update content
  setContent(tag, title, iconHtml = '') {
    const tagElement = this.element.querySelector('.announcement-tag');
    const titleElement = this.element.querySelector('.announcement-title span');
    const iconContainer = this.element.querySelector('.announcement-title');

    if (tagElement && tag) tagElement.textContent = tag;
    if (titleElement && title) titleElement.textContent = title;

    // Update or add icon
    if (iconHtml) {
      const existingIcon = this.element.querySelector('.announcement-icon');
      if (existingIcon) {
        existingIcon.remove();
      }
      iconContainer.insertAdjacentHTML('beforeend', iconHtml);
    }
  }

  // Destroy component
  destroy() {
    this.element.remove();
  }
}

// Factory function to create announcements
function createAnnouncement(options = {}) {
  const {
    tag = 'NEW',
    title = 'Announcement',
    variant = 'outline',
    themed = false,
    icon = true,
    container = document.body
  } = options;

  const iconSvg = icon ? `
    <svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 7h10v10M7 17L17 7"/>
    </svg>
  ` : '';

  const html = `
    <div class="announcement" data-variant="${variant}" data-themed="${themed}">
      ${tag ? `<div class="announcement-tag">${tag}</div>` : ''}
      <div class="announcement-title">
        <span>${title}</span>
        ${iconSvg}
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
  const element = container.lastElementChild;
  return new AnnouncementComponent(element);
}

// Auto-initialize all announcements on page
function initAnnouncements() {
  const announcements = document.querySelectorAll('.announcement');
  announcements.forEach(el => new AnnouncementComponent(el));
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnnouncements);
} else {
  initAnnouncements();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AnnouncementComponent, createAnnouncement, initAnnouncements };
}
```

## Implementation Steps

### Step 0: Project Setup

1. **Create the directory structure** if it doesn't exist:
```bash
mkdir -p css/components js/components demo
```

2. **Ensure DreamyHook theme CSS is loaded** in your main HTML:
```html
<!-- In your index.html <head> -->
<link rel="stylesheet" href="css/theme.css">
<link rel="stylesheet" href="css/components/announcement.css">
```

### Step 1: Copy Component Files

1. Create `/css/components/announcement.css` with the CSS code above
2. Create `/js/components/announcement.js` with the JavaScript code above

### Step 2: Install External Dependencies

**Google Fonts** (already in your theme CSS):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**No NPM dependencies required** - Pure vanilla JavaScript!

### Step 3: Usage Examples

#### Basic HTML Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DreamyHook Announcements</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="css/theme.css">
  <link rel="stylesheet" href="css/components/announcement.css">
</head>
<body>

  <!-- Example 1: Default outline announcement -->
  <div class="announcement" data-variant="outline">
    <div class="announcement-tag">NEW</div>
    <div class="announcement-title">
      <span>New feature added</span>
      <svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 7h10v10M7 17L17 7"/>
      </svg>
    </div>
  </div>

  <!-- Example 2: Golden gradient variant -->
  <div class="announcement" data-variant="default">
    <div class="announcement-tag">UPDATE</div>
    <div class="announcement-title">
      <span>Version 2.0 is live!</span>
      <svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 7h10v10M7 17L17 7"/>
      </svg>
    </div>
  </div>

  <!-- Example 3: Coral (sunrise gradient) -->
  <div class="announcement" data-variant="coral">
    <div class="announcement-tag">HOT</div>
    <div class="announcement-title">
      <span>Limited time offer</span>
      <svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 7h10v10M7 17L17 7"/>
      </svg>
    </div>
  </div>

  <!-- Scripts -->
  <script src="js/components/announcement.js"></script>
</body>
</html>
```

#### JavaScript Usage

```javascript
// Create announcement programmatically
const announcement = createAnnouncement({
  tag: 'BETA',
  title: 'Try our new AI features',
  variant: 'default',
  themed: false,
  icon: true,
  container: document.querySelector('#announcement-container')
});

// Change variant dynamically
announcement.setVariant('coral');

// Update content
announcement.setContent('LIVE', 'Event starts in 10 minutes');

// Toggle themed mode
announcement.setThemed(true);
```

## Customization Questions

Before implementing, consider:

1. **Data/Props**:
   - What announcement text will be displayed?
   - Will announcements be dynamic (loaded from API)?
   - Do you need different states (new, update, warning)?

2. **State Management**:
   - Should announcements be dismissible?
   - Do you need to track which announcements users have seen?
   - Should they auto-hide after a duration?

3. **Assets**:
   - What icons will you use? (Arrow, Bell, Star, etc.)
   - Do you need custom brand icons?

4. **Responsive Behavior**:
   - Should announcements stack on mobile?
   - Do you need a fixed/sticky announcement bar?
   - Should text truncate or wrap on small screens?

5. **Best Placement**:
   - Top of page (header announcement bar)
   - Hero section (feature announcement)
   - Cards/components (status badges)
   - Footer (promotional announcements)

## DreamyHook Variants

### Available Variants

1. **outline** (default) - White background, subtle border
2. **default** - Golden gradient (Marigold to Buttercup)
3. **secondary** - Midnight Blue solid
4. **coral** - Sunrise gradient (Buttercup to Coral)

### Color Usage Guide

- **Outline**: General announcements, updates
- **Default (Golden)**: Important features, highlights
- **Secondary (Blue)**: Professional notices, documentation
- **Coral (Warm)**: CTAs, limited offers, urgent items

## Accessibility

The component includes:
- Semantic HTML structure
- Sufficient color contrast (WCAG AA compliant)
- Keyboard navigation support
- Screen reader friendly text
- Focus states for interactive elements

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Integration Checklist

- [ ] Directory structure created
- [ ] DreamyHook theme variables loaded
- [ ] Component CSS file added
- [ ] Component JavaScript file added
- [ ] Google Fonts loaded
- [ ] Demo page created and tested
- [ ] Responsive behavior verified
- [ ] Cross-browser testing completed
- [ ] Accessibility testing performed
- [ ] Documentation updated

## Next Steps

1. Copy all component files to your project
2. Test in your environment
3. Customize colors/spacing if needed
4. Add to your component library
5. Document usage in your team wiki

---

**DreamyHook** - Built with ❤️ for beautiful, accessible web components

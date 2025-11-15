# DreamyHook AI Chat Component - Implementation Guide

## Overview
You are tasked with creating an AI chat interface component for the DreamyHook brand using **plain HTML, CSS, and JavaScript in a single file**.

## Brand Theme Requirements

### Color Palette
- **Primary**: Marigold Yellow (#FCBF49) - Main brand color, golden warm tone
- **Secondary**: Midnight Blue (#0A1128) - Deep, sophisticated contrast
- **Accent**: Buttercup Yellow (#FFD23F) - Bright, cheerful highlights
- **Coral**: #FF6B4A - Warm accent for CTAs and hover states
- **Sky**: #0ea5e9 - Fresh, airy accent
- **Neutrals**: Warm gray palette (#ffffff to #1c1917)

### Typography
- **Heading Font**: Poppins (Google Fonts) - weights: 400, 500, 600, 700, 800
- **Body Font**: Inter (Google Fonts) - weights: 300, 400, 500, 600, 700
- **Mono Font**: JetBrains Mono (Google Fonts) - for code snippets

### Design Principles
- **Light Theme**: Warm white backgrounds (#fffef9), cream tones
- **Shadows**: Soft, warm shadows with golden glows
- **Border Radius**: Modern, rounded corners (12px - 32px)
- **Animations**: Smooth, elegant transitions (0.735s cubic-bezier)
- **Accessibility**: High contrast, semantic HTML, ARIA labels

## Component Structure

### Main Features
1. **Auto-resizing Textarea**: Grows with content (min: 60px, max: 200px)
2. **Attachment Button**: With icon and hover label
3. **Project Selector**: Dashed border button with plus icon
4. **Send Button**: Dynamic state based on input (golden when active)
5. **Action Buttons**: Quick action shortcuts below the input
6. **Responsive Design**: Mobile-first approach

### Visual Design
- **Input Container**:
  - Background: Light cream (#fffef9) with subtle border
  - Border: Warm gray (#d6d3d1) with golden glow on focus
  - Border radius: 16px
  - Padding: 12px

- **Textarea**:
  - Transparent background
  - Midnight blue text (#0A1128)
  - Placeholder: Warm gray (#78716c)
  - No default borders or outlines
  - Focus state: Golden glow effect

- **Send Button**:
  - Inactive: Light gray with warm gray icon
  - Active: Marigold yellow (#FCBF49) background with midnight blue icon
  - Hover: Buttercup yellow (#FFD23F) with golden glow
  - Transition: 0.3s ease

- **Action Buttons**:
  - Background: White with subtle warm shadow
  - Border: Light warm gray (#e7e5e4)
  - Text: Midnight blue (#0A1128)
  - Icon: Marigold yellow (#FCBF49)
  - Hover: Golden glow shadow, buttercup background

## Implementation Requirements

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook AI Chat</title>
    <!-- Google Fonts -->
    <!-- Inline CSS -->
    <!-- Icons: Use Lucide via CDN or inline SVG -->
</head>
<body>
    <!-- Main container -->
    <!-- Heading -->
    <!-- Chat input container -->
    <!-- Action buttons -->
    <!-- Inline JavaScript -->
</body>
</html>
```

### CSS Requirements
1. **CSS Variables**: Define all brand colors as CSS custom properties
2. **Responsive**: Mobile breakpoints at 768px, 480px
3. **Animations**: Fade in, slide up, glow effects
4. **Typography Scale**: Fluid scaling with clamp()
5. **Glassmorphism**: Optional subtle backdrop blur effects

### JavaScript Functionality
1. **Auto-resize Textarea**:
   - Listen to input events
   - Calculate scrollHeight
   - Apply min/max constraints
   - Reset on submit

2. **Enter Key Handler**:
   - Submit on Enter (prevent with Shift+Enter for new line)
   - Clear textarea after submit
   - Reset height to minimum

3. **Button States**:
   - Toggle send button style based on input value
   - Hover effects for all interactive elements

4. **Accessibility**:
   - Keyboard navigation support
   - Screen reader labels
   - Focus visible states

## Icon Requirements
Use **Lucide Icons** (CDN or inline SVG):
- `Paperclip` - Attach button
- `Plus` - Project selector
- `ArrowUp` - Send button
- `Image` - Clone screenshot action
- `Figma` - Import from Figma
- `FileUp` - Upload project
- `Monitor` - Landing page template
- `CircleUserRound` - Sign up form template

### Lucide CDN
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>
  lucide.createIcons();
</script>
```

## Action Button Options
1. **Clone a Screenshot** - Image icon
2. **Import from Figma** - Figma icon
3. **Upload a Project** - FileUp icon
4. **Landing Page** - Monitor icon
5. **Sign Up Form** - CircleUserRound icon

## Responsive Behavior
- **Desktop (>991px)**: Full width (max 896px centered)
- **Tablet (768px-991px)**: 90% width, adjust button sizes
- **Mobile (<768px)**: Full width, stack action buttons, smaller text

## Accessibility Checklist
- [ ] Semantic HTML elements
- [ ] ARIA labels for icon buttons
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus visible states
- [ ] Color contrast ratio > 4.5:1
- [ ] Screen reader announcements for dynamic content

## Performance Optimization
- [ ] Inline critical CSS
- [ ] Defer non-critical JavaScript
- [ ] Optimize font loading (font-display: swap)
- [ ] Minimize reflows during textarea resize
- [ ] Use CSS transforms for animations

## Questions to Consider
1. **Data Handling**: Where will chat messages be sent?
2. **State Persistence**: Should input be saved in localStorage?
3. **Error Handling**: What happens if submission fails?
4. **Loading States**: Should there be a loading indicator?
5. **Character Limits**: Is there a max length for messages?

## Implementation Steps

### Step 0: Setup Single HTML File
Create `dreamyhook-chat.html` with all code inline:
- Import Google Fonts in `<head>`
- Define CSS variables for brand colors
- Add HTML structure
- Include Lucide icons via CDN
- Add JavaScript for interactivity

### Step 1: Build Core Structure
```html
<div class="chat-container">
    <h1 class="chat-heading">What can I help you ship?</h1>
    <div class="chat-input-wrapper">
        <textarea id="chatInput" placeholder="Ask DreamyHook AI a question..."></textarea>
        <div class="chat-controls">
            <button class="attach-btn"><!-- Icon --></button>
            <div class="right-controls">
                <button class="project-btn"><!-- Icon --> Project</button>
                <button class="send-btn"><!-- Icon --></button>
            </div>
        </div>
    </div>
    <div class="action-buttons">
        <!-- 5 action buttons -->
    </div>
</div>
```

### Step 2: Style with Brand Theme
- Apply marigold/buttercup yellow accents
- Use midnight blue for text
- Add warm cream backgrounds
- Implement golden glow shadows
- Create smooth transitions

### Step 3: Add Auto-Resize Logic
```javascript
const textarea = document.getElementById('chatInput');
const MIN_HEIGHT = 60;
const MAX_HEIGHT = 200;

function adjustHeight() {
    textarea.style.height = MIN_HEIGHT + 'px';
    const newHeight = Math.min(Math.max(textarea.scrollHeight, MIN_HEIGHT), MAX_HEIGHT);
    textarea.style.height = newHeight + 'px';
}

textarea.addEventListener('input', adjustHeight);
```

### Step 4: Handle Keyboard Events
```javascript
textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (textarea.value.trim()) {
            // Submit logic here
            textarea.value = '';
            adjustHeight();
        }
    }
});
```

### Step 5: Dynamic Send Button
```javascript
function updateSendButton() {
    const sendBtn = document.querySelector('.send-btn');
    if (textarea.value.trim()) {
        sendBtn.classList.add('active');
    } else {
        sendBtn.classList.remove('active');
    }
}

textarea.addEventListener('input', updateSendButton);
```

### Step 6: Add Hover Effects
Use CSS transitions for:
- Button hover states (golden glow)
- Icon color changes
- Background color shifts
- Shadow intensity increases

### Step 7: Initialize Lucide Icons
```javascript
// After DOM loaded
lucide.createIcons();
```

## Expected Output
A single `dreamyhook-chat.html` file that:
- Opens in any modern browser
- Displays a beautiful, branded AI chat interface
- Has smooth, professional animations
- Works on mobile and desktop
- Follows DreamyHook brand guidelines
- Is fully accessible and performant

## Testing Checklist
- [ ] Textarea resizes correctly (60px - 200px)
- [ ] Enter submits, Shift+Enter adds new line
- [ ] Send button changes color when input has text
- [ ] All buttons have hover effects
- [ ] Icons display correctly
- [ ] Responsive on mobile devices
- [ ] Accessible via keyboard
- [ ] No console errors
- [ ] Smooth 60fps animations

## Design Reference
The component should feel like a modern AI chat interface (similar to v0.dev, ChatGPT, Claude) but with the warm, golden, professional aesthetic of the DreamyHook brand.

## File Naming
Save as: `dreamyhook-ai-chat-component.html`

---

**Remember**: Everything must be in a single HTML file - no external CSS or JS files. Use CDN links only for fonts and icon libraries.

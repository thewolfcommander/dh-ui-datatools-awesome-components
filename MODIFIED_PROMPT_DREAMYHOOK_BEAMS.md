# DreamyHook Beams Background Component - Integration Guide

## Overview
You are tasked with creating an animated beams background component for DreamyHook using vanilla HTML, CSS, and JavaScript in a single file.

## Brand Theme Requirements

### Color Palette
- **Primary**: Marigold Yellow (#FCBF49) - warm, golden brand color
- **Secondary**: Midnight Blue (#0A1128) - deep, sophisticated
- **Accent**: Buttercup Yellow (#FFD23F) - bright, cheerful
- **Coral**: #FF6B4A - warm accent for CTAs
- **Sky Blue**: #0ea5e9 - fresh, airy accent
- **Light Background**: #fffef9 - warm white background
- **Cream**: #fef9e7 - light cream for subtle backgrounds

### Typography
- **Sans-serif**: Inter, ui-sans-serif, system-ui, sans-serif
- **Heading**: Poppins, ui-sans-serif, system-ui, sans-serif
- **Monospace**: JetBrains Mono, ui-monospace, monospace

### Design Principles
- Light theme with warm tones
- Golden glow effects for interactive elements
- Soft shadows with warm undertones
- Smooth animations with professional feel
- Accessible contrast ratios

## Technical Requirements

### Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No frameworks or libraries
- **Single File** - All code in one HTML file

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design (mobile-first approach)
- Performance optimized (60fps animations)

## Component Specification

### Beams Background Component

Create an animated background with flowing gradient beams that:
1. Uses HTML5 Canvas for smooth animations
2. Features multiple animated beams with varying speeds and opacities
3. Implements DreamyHook brand colors in the gradient beams
4. Includes a pulsing/glowing effect
5. Responsive to different screen sizes
6. Has configurable intensity (subtle, medium, strong)

### Visual Design
- **Background**: Warm white (#fffef9) instead of dark
- **Beam Colors**: Gradient from Marigold Yellow to Buttercup Yellow to Coral
  - Hue range: 35-45 (golden/yellow range) instead of blue/cyan
  - Saturation: 85-95% for vibrant colors
  - Lightness: 50-65% for proper contrast on light background
- **Blur Effect**: Soft blur (20-30px) for dreamy effect
- **Opacity**: Lower opacity (0.15-0.25) for subtle elegance on light background
- **Animation**: Smooth flowing motion with gentle pulsing

### Content Structure
```html
<div class="beams-container">
  <canvas id="beamsCanvas"></canvas>
  <div class="beams-overlay"></div>
  <div class="beams-content">
    <h1>DreamyHook Beams</h1>
    <p>Beautiful animated backgrounds</p>
  </div>
</div>
```

## Implementation Code

Below is the complete single-file implementation with DreamyHook branding:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Beams Background</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        /* DreamyHook Theme Variables */
        :root {
            /* Brand Colors */
            --color-primary: #FCBF49;        /* Marigold Yellow */
            --color-secondary: #0A1128;      /* Midnight Blue */
            --color-accent: #FFD23F;         /* Buttercup Yellow */
            --color-coral: #FF6B4A;          /* Coral */
            --color-sky: #0ea5e9;            /* Sky Blue */

            /* Neutral Colors */
            --color-neutral-100: #ffffff;    /* Pure white */
            --color-neutral-200: #fffef9;    /* Warm white */
            --color-neutral-300: #fffdf0;    /* Cream white */
            --color-neutral-400: #fef9e7;    /* Light cream */
            --color-neutral-500: #78716c;    /* Medium warm gray */
            --color-neutral-800: #292524;    /* Almost black warm gray */

            /* Typography */
            --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
            --font-heading: 'Poppins', ui-sans-serif, system-ui, sans-serif;

            /* Shadows */
            --shadow-soft: 0 2px 15px 0 rgba(10, 17, 40, 0.05);
            --shadow-medium: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
            --shadow-warm: 0 4px 20px 0 rgba(252, 191, 73, 0.15);
            --shadow-marigold-glow: 0 0 30px 0 rgba(252, 191, 73, 0.25);
        }

        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-sans);
            background-color: var(--color-neutral-200);
            color: var(--color-secondary);
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        /* Beams Container */
        .beams-container {
            position: relative;
            min-height: 100vh;
            width: 100%;
            overflow: hidden;
            background: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%);
        }

        /* Canvas */
        #beamsCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: blur(25px);
        }

        /* Overlay for subtle animation */
        .beams-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 50% 50%, rgba(255, 254, 249, 0.1), rgba(254, 249, 231, 0.2));
            backdrop-filter: blur(50px);
            animation: pulseOverlay 10s ease-in-out infinite;
        }

        @keyframes pulseOverlay {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
        }

        /* Content */
        .beams-content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
            text-align: center;
        }

        .beams-content h1 {
            font-family: var(--font-heading);
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 700;
            color: var(--color-secondary);
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease-out forwards;
            text-shadow: var(--shadow-warm);
        }

        .beams-content p {
            font-size: clamp(1.25rem, 3vw, 2rem);
            color: var(--color-neutral-500);
            letter-spacing: -0.01em;
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .beams-content {
                padding: 1rem;
            }

            .beams-content h1 {
                margin-bottom: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="beams-container">
        <canvas id="beamsCanvas"></canvas>
        <div class="beams-overlay"></div>
        <div class="beams-content">
            <h1>DreamyHook<br>Beams Background</h1>
            <p>Beautiful animated backgrounds for your pleasure</p>
        </div>
    </div>

    <script>
        // Beams Background Animation
        class BeamsBackground {
            constructor(canvasId, options = {}) {
                this.canvas = document.getElementById(canvasId);
                this.ctx = this.canvas.getContext('2d');
                this.beams = [];
                this.animationFrame = null;
                this.MINIMUM_BEAMS = 20;

                // Configuration
                this.intensity = options.intensity || 'strong';
                this.opacityMap = {
                    subtle: 0.5,
                    medium: 0.7,
                    strong: 1
                };

                this.init();
            }

            init() {
                this.updateCanvasSize();
                window.addEventListener('resize', () => this.updateCanvasSize());
                this.animate();
            }

            updateCanvasSize() {
                const dpr = window.devicePixelRatio || 1;
                this.canvas.width = window.innerWidth * dpr;
                this.canvas.height = window.innerHeight * dpr;
                this.canvas.style.width = `${window.innerWidth}px`;
                this.canvas.style.height = `${window.innerHeight}px`;
                this.ctx.scale(dpr, dpr);

                const totalBeams = Math.floor(this.MINIMUM_BEAMS * 1.5);
                this.beams = Array.from({ length: totalBeams }, (_, i) =>
                    this.createBeam(i, totalBeams)
                );
            }

            createBeam(index, totalBeams) {
                const angle = -35 + Math.random() * 10;
                // DreamyHook colors: Marigold Yellow (40), Buttercup Yellow (50), Coral (15)
                const hueVariation = index % 3;
                let hue;
                if (hueVariation === 0) hue = 40 + Math.random() * 5;      // Marigold range
                else if (hueVariation === 1) hue = 48 + Math.random() * 5; // Buttercup range
                else hue = 15 + Math.random() * 10;                        // Coral range

                return {
                    x: Math.random() * this.canvas.width * 1.5 - this.canvas.width * 0.25,
                    y: Math.random() * this.canvas.height * 1.5 - this.canvas.height * 0.25,
                    width: 60 + Math.random() * 80,
                    length: this.canvas.height * 2.5,
                    angle: angle,
                    speed: 0.4 + Math.random() * 0.8,
                    opacity: 0.15 + Math.random() * 0.12,
                    hue: hue,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: 0.02 + Math.random() * 0.03
                };
            }

            resetBeam(beam, index, totalBeams) {
                const column = index % 3;
                const spacing = this.canvas.width / 3;

                beam.y = this.canvas.height + 100;
                beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
                beam.width = 80 + Math.random() * 100;
                beam.speed = 0.4 + Math.random() * 0.6;

                // Cycle through DreamyHook colors
                const hueVariation = index % 3;
                if (hueVariation === 0) beam.hue = 40 + Math.random() * 5;
                else if (hueVariation === 1) beam.hue = 48 + Math.random() * 5;
                else beam.hue = 15 + Math.random() * 10;

                beam.opacity = 0.15 + Math.random() * 0.1;
                return beam;
            }

            drawBeam(beam) {
                this.ctx.save();
                this.ctx.translate(beam.x, beam.y);
                this.ctx.rotate((beam.angle * Math.PI) / 180);

                // Calculate pulsing opacity
                const pulsingOpacity = beam.opacity *
                    (0.8 + Math.sin(beam.pulse) * 0.2) *
                    this.opacityMap[this.intensity];

                const gradient = this.ctx.createLinearGradient(0, 0, 0, beam.length);

                // Enhanced gradient with DreamyHook warm colors
                gradient.addColorStop(0, `hsla(${beam.hue}, 90%, 60%, 0)`);
                gradient.addColorStop(0.1, `hsla(${beam.hue}, 90%, 60%, ${pulsingOpacity * 0.5})`);
                gradient.addColorStop(0.4, `hsla(${beam.hue}, 92%, 62%, ${pulsingOpacity})`);
                gradient.addColorStop(0.6, `hsla(${beam.hue}, 92%, 62%, ${pulsingOpacity})`);
                gradient.addColorStop(0.9, `hsla(${beam.hue}, 90%, 60%, ${pulsingOpacity * 0.5})`);
                gradient.addColorStop(1, `hsla(${beam.hue}, 90%, 60%, 0)`);

                this.ctx.fillStyle = gradient;
                this.ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
                this.ctx.restore();
            }

            animate() {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.filter = 'blur(30px)';

                const totalBeams = this.beams.length;
                this.beams.forEach((beam, index) => {
                    beam.y -= beam.speed;
                    beam.pulse += beam.pulseSpeed;

                    // Reset beam when it goes off screen
                    if (beam.y + beam.length < -100) {
                        this.resetBeam(beam, index, totalBeams);
                    }

                    this.drawBeam(beam);
                });

                this.animationFrame = requestAnimationFrame(() => this.animate());
            }

            destroy() {
                if (this.animationFrame) {
                    cancelAnimationFrame(this.animationFrame);
                }
                window.removeEventListener('resize', () => this.updateCanvasSize());
            }
        }

        // Initialize the beams background
        document.addEventListener('DOMContentLoaded', () => {
            new BeamsBackground('beamsCanvas', { intensity: 'strong' });
        });
    </script>
</body>
</html>
```

## Implementation Guidelines

### Step-by-Step Integration

1. **File Creation**
   - Create a new HTML file (e.g., `dreamyhook-beams-background.html`)
   - Copy the complete code above into the file
   - Ensure proper UTF-8 encoding

2. **Customization Options**
   - **Intensity**: Change `intensity: 'strong'` to `'subtle'` or `'medium'`
   - **Colors**: Modify the `hue` values in `createBeam()` method
   - **Speed**: Adjust `speed` property (0.1-2.0 range)
   - **Beam count**: Modify `MINIMUM_BEAMS` constant (10-40 recommended)

3. **Testing**
   - Open in modern browser (Chrome, Firefox, Safari, Edge)
   - Test on different screen sizes (mobile, tablet, desktop)
   - Verify smooth 60fps animation
   - Check color contrast and readability

4. **Performance Optimization**
   - Monitor canvas rendering performance
   - Adjust beam count for mobile devices if needed
   - Consider reducing blur intensity on low-end devices

### Questions to Consider

- **Content**: What text/content will overlay the beams?
- **Intensity**: Should the beams be subtle or prominent?
- **Colors**: Do you want to stick with the default DreamyHook palette or customize?
- **Responsive**: Any specific mobile behavior requirements?
- **Integration**: Will this be a landing page or component within a larger site?

### Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Considerations

- Ensure text has sufficient contrast (WCAG AA minimum)
- Consider prefers-reduced-motion for users sensitive to animation
- Provide alternative static background option
- Test with screen readers

### Next Steps

1. Copy the code to your HTML file
2. Open in browser to preview
3. Adjust colors/intensity as needed
4. Integrate your actual content
5. Test across devices and browsers
6. Deploy to your web server

---

**Created for DreamyHook** - Beautiful, accessible, performant web experiences

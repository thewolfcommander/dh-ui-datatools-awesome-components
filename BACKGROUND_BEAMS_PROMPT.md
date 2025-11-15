# Background Beams with Collision - DreamyHook Theme Integration

## Overview
You are given a task to integrate an animated background beams component into your codebase.

The implementation should use:
- **Single HTML file** with embedded CSS and JavaScript
- **DreamyHook brand theme** with Marigold Yellow (#FCBF49), Buttercup Yellow (#FFD23F), and Midnight Blue (#0A1128)
- **Vanilla JavaScript** for animations (no external animation libraries)
- **Responsive design** using the DreamyHook scaling system

## Component Description

The Background Beams with Collision component creates an animated visual effect where:
- Multiple animated beams fall from the top of the screen
- When beams collide with a bottom surface, they create explosion effects
- The component supports custom content in the center
- All animations are smooth and performant using CSS animations and JavaScript

## DreamyHook Theme Colors

Replace the original purple/indigo gradient colors with DreamyHook brand colors:

### Original Colors (to replace):
- `from-indigo-500 via-purple-500` → Replace with DreamyHook gradient
- `from-purple-500 via-violet-500 to-pink-500` → Replace with warm golden gradient

### DreamyHook Color Palette:
```css
/* Primary Brand Colors */
--color-primary: #FCBF49;        /* Marigold Yellow */
--color-secondary: #0A1128;      /* Midnight Blue */
--color-accent: #FFD23F;         /* Buttercup Yellow */
--color-coral: #FF6B4A;          /* Coral */
--color-sky: #0ea5e9;            /* Sky Blue */

/* Gradient Recommendations */
/* For beams: Use golden gradient */
background: linear-gradient(to top, transparent, #FFD23F, #FCBF49);

/* For explosions: Use warm sunrise gradient */
background: linear-gradient(to right, #FFD23F, #FCBF49, #FF6B4A);
```

## Component Structure

### HTML File: `background-beams-collision.html`

Create a single HTML file with three sections:

1. **HTML Structure**
   - Container div with relative positioning
   - Content area for centered text/elements
   - Multiple beam elements (7-10 beams)
   - Collision surface at the bottom
   - Explosion elements (created dynamically)

2. **CSS Styling**
   - Import DreamyHook fonts (Inter, Poppins)
   - Apply DreamyHook color variables
   - Define beam animations using `@keyframes`
   - Create explosion particle animations
   - Implement responsive scaling system
   - Add warm glow effects

3. **JavaScript Animation Logic**
   - Initialize beams with different timing and positions
   - Detect collisions using getBoundingClientRect()
   - Trigger explosion animations on collision
   - Clean up and restart beam animations
   - Handle responsive behavior

## Implementation Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Beams with Collision - DreamyHook</title>
  <style>
    /* Import DreamyHook Fonts */
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap");

    /* DreamyHook Theme Variables */
    :root {
      --color-primary: #FCBF49;
      --color-secondary: #0A1128;
      --color-accent: #FFD23F;
      --color-coral: #FF6B4A;
      --color-neutral-100: #ffffff;
      --color-neutral-200: #fffef9;
      --color-neutral-300: #fffdf0;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(to bottom, var(--color-neutral-100), var(--color-neutral-300));
      overflow-x: hidden;
    }

    .beams-container {
      position: relative;
      width: 100%;
      height: 40rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: linear-gradient(to bottom, #fffef9, #fef9e7);
    }

    .content {
      position: relative;
      z-index: 20;
      text-align: center;
      padding: 2rem;
    }

    .content h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-secondary);
      margin-bottom: 1rem;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 50%, var(--color-coral) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0px 2px 4px rgba(252, 191, 73, 0.3));
    }

    .beam {
      position: absolute;
      width: 2px;
      height: 60px;
      background: linear-gradient(to top, transparent, var(--color-accent), var(--color-primary));
      border-radius: 999px;
      top: -100px;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes fall {
      from {
        transform: translateY(-200px);
      }
      to {
        transform: translateY(1800px);
      }
    }

    .collision-surface {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: var(--color-neutral-200);
      box-shadow:
        0 0 24px rgba(252, 191, 73, 0.1),
        0 1px 1px rgba(0, 0, 0, 0.05),
        0 0 0 1px rgba(252, 191, 73, 0.08);
      pointer-events: none;
    }

    .explosion {
      position: absolute;
      z-index: 50;
      pointer-events: none;
    }

    .explosion-line {
      position: absolute;
      width: 40px;
      height: 2px;
      background: linear-gradient(to right, transparent, var(--color-accent), transparent);
      filter: blur(2px);
      animation: explosionLineFade 1.5s ease-out forwards;
    }

    @keyframes explosionLineFade {
      from { opacity: 1; }
      to { opacity: 0; }
    }

    .explosion-particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: linear-gradient(to bottom, var(--color-accent), var(--color-coral));
      animation: particleMove 1.5s ease-out forwards;
    }

    @keyframes particleMove {
      from { opacity: 1; }
      to { opacity: 0; }
    }

    @media (max-width: 768px) {
      .beams-container {
        height: 30rem;
      }

      .content h2 {
        font-size: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="beams-container" id="beamsContainer">
    <div class="content">
      <h2>
        What's cooler than Beams?
        <br>
        <span class="gradient-text">Exploding beams.</span>
      </h2>
    </div>

    <div class="collision-surface" id="collisionSurface"></div>
  </div>

  <script>
    // Beam configurations with DreamyHook timing
    const beamConfigs = [
      { initialX: 10, duration: 7000, delay: 2000, height: 60 },
      { initialX: 600, duration: 3000, delay: 4000, height: 60 },
      { initialX: 100, duration: 7000, delay: 0, height: 80 },
      { initialX: 400, duration: 5000, delay: 4000, height: 60 },
      { initialX: 800, duration: 11000, delay: 0, height: 100 },
      { initialX: 1000, duration: 4000, delay: 0, height: 70 },
      { initialX: 1200, duration: 6000, delay: 2000, height: 60 }
    ];

    const container = document.getElementById('beamsContainer');
    const surface = document.getElementById('collisionSurface');

    // Create and animate beams
    function createBeam(config) {
      const beam = document.createElement('div');
      beam.className = 'beam';
      beam.style.left = `${config.initialX}px`;
      beam.style.height = `${config.height}px`;
      beam.style.animationName = 'fall';
      beam.style.animationDuration = `${config.duration}ms`;
      beam.style.animationDelay = `${config.delay}ms`;

      container.appendChild(beam);

      // Check for collisions
      const checkCollision = setInterval(() => {
        const beamRect = beam.getBoundingClientRect();
        const surfaceRect = surface.getBoundingClientRect();

        if (beamRect.bottom >= surfaceRect.top && beamRect.bottom <= surfaceRect.bottom) {
          createExplosion(beamRect.left + beamRect.width / 2, beamRect.bottom);
          clearInterval(checkCollision);
        }
      }, 50);

      // Restart beam after animation
      setTimeout(() => {
        beam.remove();
        clearInterval(checkCollision);
        setTimeout(() => createBeam(config), config.delay);
      }, config.duration + config.delay + 2000);
    }

    // Create explosion effect
    function createExplosion(x, y) {
      const explosion = document.createElement('div');
      explosion.className = 'explosion';
      explosion.style.left = `${x}px`;
      explosion.style.top = `${y}px`;
      explosion.style.transform = 'translate(-50%, -50%)';

      // Create explosion line
      const line = document.createElement('div');
      line.className = 'explosion-line';
      explosion.appendChild(line);

      // Create particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';

        const directionX = Math.random() * 80 - 40;
        const directionY = Math.random() * -50 - 10;

        particle.style.animation = `particleMove ${Math.random() * 1.5 + 0.5}s ease-out forwards`;
        particle.style.setProperty('--directionX', `${directionX}px`);
        particle.style.setProperty('--directionY', `${directionY}px`);

        // Apply transform animation
        setTimeout(() => {
          particle.style.transform = `translate(${directionX}px, ${directionY}px)`;
        }, 10);

        explosion.appendChild(particle);
      }

      container.appendChild(explosion);

      // Remove explosion after animation
      setTimeout(() => explosion.remove(), 2000);
    }

    // Initialize all beams
    beamConfigs.forEach(config => createBeam(config));
  </script>
</body>
</html>
```

## Key Features

### DreamyHook Brand Integration
- **Colors**: Marigold Yellow (#FCBF49) and Buttercup Yellow (#FFD23F) for beams
- **Gradients**: Warm golden gradients replacing purple/indigo
- **Typography**: Poppins for headings, Inter for body text
- **Light Theme**: Warm cream backgrounds (#fffef9, #fef9e7)

### Animation System
- **Beam Fall**: Linear animation from top to bottom
- **Collision Detection**: JavaScript-based using getBoundingClientRect()
- **Explosion Effect**: Radial particle burst with golden glow
- **Timing**: Staggered delays for natural movement

### Responsive Design
- Mobile-optimized (768px breakpoint)
- Scales container height and font sizes
- Maintains performance on all devices

## Customization Options

### Change Beam Colors
```css
.beam {
  background: linear-gradient(to top, transparent, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### Adjust Animation Speed
```javascript
{ duration: 5000 } // Change duration in milliseconds
```

### Add More Beams
```javascript
beamConfigs.push({ initialX: 1400, duration: 8000, delay: 1000, height: 90 });
```

### Modify Explosion Particles
```javascript
for (let i = 0; i < 30; i++) { // Change 20 to 30 for more particles
```

## Integration Steps

1. **Create the HTML file** in your project root or components directory
2. **Customize content** in the `.content` div with your own text/elements
3. **Adjust colors** to match your specific brand requirements
4. **Test animations** across different screen sizes
5. **Optimize performance** by adjusting particle count and beam quantity

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS animations and transforms
- JavaScript getBoundingClientRect() API
- No external dependencies required

## Performance Tips
- Limit beams to 7-10 for optimal performance
- Reduce particle count on mobile devices
- Use `will-change: transform` for smoother animations
- Clean up DOM elements after animations complete

## Questions to Consider

1. **Content**: What text or elements will be displayed in the center?
2. **Placement**: Where in your site will this component be used? (Hero section, background, etc.)
3. **Colors**: Do you want to customize the golden gradients further?
4. **Animation**: Should beams be faster/slower? More/fewer particles?
5. **Responsiveness**: Any specific mobile behavior requirements?

## File Structure
```
your-project/
├── background-beams-collision.html  (Single file with everything)
└── (Optional) assets/
    └── images/                       (If you want to add background images)
```

## No External Dependencies Required
This implementation uses:
- Pure HTML5
- Pure CSS3 (animations, transforms, gradients)
- Vanilla JavaScript (no libraries)
- Google Fonts CDN (Inter, Poppins)

**Note**: Unlike the original React version that requires framer-motion, this vanilla implementation has zero npm dependencies and works in any modern browser.

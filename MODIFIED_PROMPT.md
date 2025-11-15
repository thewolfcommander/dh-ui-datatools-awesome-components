# DreamyHook Interactive 3D Scene Component - Single HTML File

You are given a task to create an interactive 3D scene component using Spline in a single HTML file.

## Tech Stack Requirements
The file should support:
- **Pure HTML/CSS/JavaScript** (no frameworks, single file only)
- **DreamyHook brand theme colors**
- **Responsive design**
- **All code in one file** (inline CSS and JavaScript)

## Brand Theme Requirements

### Color Palette
- **Primary Color**: Marigold Yellow (#FCBF49)
- **Secondary Color**: Midnight Blue (#0A1128)
- **Accent Color**: Buttercup Yellow (#FFD23F)
- **Coral Accent**: #FF6B4A (for CTAs)
- **Sky Accent**: #0ea5e9 (fresh blue)

### Background Colors
- **Main Background**: Warm white (#fffef9)
- **Card Background**: Pure white (#ffffff)
- **Light Cream**: #fef9e7

### Typography
- **Heading Font**: Poppins (Google Fonts)
- **Body Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (for code)

### Shadows & Effects
- **Soft Shadow**: 0 2px 15px 0 rgba(10, 17, 40, 0.05)
- **Medium Shadow**: 0 4px 25px 0 rgba(10, 17, 40, 0.1)
- **Marigold Glow**: 0 0 30px 0 rgba(252, 191, 73, 0.25)
- **Buttercup Glow**: 0 0 30px 0 rgba(255, 210, 63, 0.3)

### Gradients
- **Golden Gradient**: linear-gradient(135deg, #FFD23F 0%, #FCBF49 100%)
- **Warm Gradient**: linear-gradient(135deg, #fffef9 0%, #fef9e7 100%)
- **Sunrise Gradient**: linear-gradient(135deg, #FFD23F 0%, #FF6B4A 100%)

## File Structure

Create this single HTML file as `spline-3d-scene.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DreamyHook - Interactive 3D Scene</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Spline Runtime -->
    <script type="module" src="https://unpkg.com/@splinetool/runtime@1.9.28/build/runtime.js"></script>

    <style>
        /* DreamyHook Brand Theme - Light Mode */

        :root {
            /* Brand Colors */
            --color-primary: #FCBF49;        /* Marigold Yellow */
            --color-secondary: #0A1128;      /* Midnight Blue */
            --color-accent: #FFD23F;         /* Buttercup Yellow */
            --color-coral: #FF6B4A;          /* Coral accent */
            --color-sky: #0ea5e9;            /* Sky Blue */

            /* Neutral Colors */
            --color-white: #ffffff;
            --color-warm-white: #fffef9;
            --color-cream: #fef9e7;
            --color-light-cream: #fffdf0;
            --color-neutral-500: #78716c;
            --color-neutral-700: #44403c;
            --color-neutral-900: #1c1917;

            /* Shadows */
            --shadow-soft: 0 2px 15px 0 rgba(10, 17, 40, 0.05);
            --shadow-medium: 0 4px 25px 0 rgba(10, 17, 40, 0.1);
            --shadow-marigold: 0 0 30px 0 rgba(252, 191, 73, 0.25);
            --shadow-buttercup: 0 0 30px 0 rgba(255, 210, 63, 0.3);

            /* Typography */
            --font-heading: 'Poppins', sans-serif;
            --font-body: 'Inter', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-body);
            background: var(--color-warm-white);
            color: var(--color-secondary);
            line-height: 1.6;
            padding: 2rem;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            max-width: 1200px;
            width: 100%;
        }

        .card {
            background: var(--color-white);
            border-radius: 1.5rem;
            overflow: hidden;
            box-shadow: var(--shadow-medium);
            position: relative;
            height: 500px;
            transition: box-shadow 0.3s ease;
        }

        .card:hover {
            box-shadow: var(--shadow-marigold);
        }

        /* Spotlight Effect */
        .spotlight-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
        }

        .spotlight {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle at center,
                rgba(255, 210, 63, 0.2) 0%,
                rgba(252, 191, 73, 0.1) 40%,
                transparent 70%);
            filter: blur(40px);
            opacity: 0;
            transition: opacity 0.3s ease;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }

        .card:hover .spotlight {
            opacity: 1;
        }

        .content-wrapper {
            display: flex;
            height: 100%;
            position: relative;
            z-index: 2;
        }

        .content-left {
            flex: 1;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(135deg,
                rgba(255, 254, 249, 0.95) 0%,
                rgba(255, 253, 240, 0.9) 100%);
        }

        .content-title {
            font-family: var(--font-heading);
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(135deg,
                var(--color-primary) 0%,
                var(--color-coral) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .content-description {
            color: var(--color-neutral-700);
            font-size: 1.125rem;
            max-width: 500px;
            line-height: 1.7;
        }

        .content-right {
            flex: 1;
            position: relative;
            background: linear-gradient(135deg,
                var(--color-cream) 0%,
                var(--color-white) 100%);
        }

        /* Spline Scene */
        #spline-scene {
            width: 100%;
            height: 100%;
        }

        /* Loading Animation */
        .loader-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: var(--color-warm-white);
        }

        .loader {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(252, 191, 73, 0.2);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media screen and (max-width: 991px) {
            .content-wrapper {
                flex-direction: column;
            }

            .content-left,
            .content-right {
                flex: none;
            }

            .content-left {
                padding: 2rem;
            }

            .content-title {
                font-size: 2.5rem;
            }

            .card {
                height: 700px;
            }
        }

        @media screen and (max-width: 767px) {
            body {
                padding: 1rem;
            }

            .content-left {
                padding: 1.5rem;
            }

            .content-title {
                font-size: 2rem;
            }

            .content-description {
                font-size: 1rem;
            }

            .card {
                height: 650px;
            }
        }

        @media screen and (max-width: 479px) {
            .content-title {
                font-size: 1.75rem;
            }

            .spotlight {
                width: 200px;
                height: 200px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card" id="card">
            <!-- Spotlight Effect -->
            <div class="spotlight-container">
                <div class="spotlight" id="spotlight"></div>
            </div>

            <!-- Content -->
            <div class="content-wrapper">
                <!-- Left Content -->
                <div class="content-left">
                    <h1 class="content-title">Interactive 3D</h1>
                    <p class="content-description">
                        Bring your UI to life with beautiful 3D scenes. Create immersive experiences
                        that capture attention and enhance your design with DreamyHook's signature style.
                    </p>
                </div>

                <!-- Right Content - Spline Scene -->
                <div class="content-right">
                    <div class="loader-container" id="loader">
                        <div class="loader"></div>
                    </div>
                    <spline-viewer
                        id="spline-scene"
                        url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        style="display: none;">
                    </spline-viewer>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Spotlight Effect
        const card = document.getElementById('card');
        const spotlight = document.getElementById('spotlight');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            spotlight.style.left = x + 'px';
            spotlight.style.top = y + 'px';
        });

        // Spline Scene Loading
        const splineScene = document.getElementById('spline-scene');
        const loader = document.getElementById('loader');

        // Show scene when loaded
        splineScene.addEventListener('load', () => {
            loader.style.display = 'none';
            splineScene.style.display = 'block';
        });

        // Fallback: show after 3 seconds even if load event doesn't fire
        setTimeout(() => {
            if (loader.style.display !== 'none') {
                loader.style.display = 'none';
                splineScene.style.display = 'block';
            }
        }, 3000);
    </script>
</body>
</html>
```

## Implementation Guidelines

1. **Spline Integration**
   - Use `<spline-viewer>` web component
   - Include Spline runtime from unpkg CDN
   - Show loading animation while scene loads
   - Handle load events properly

2. **Spotlight Effect**
   - Track mouse position on card hover
   - Create smooth radial gradient effect
   - Use DreamyHook brand colors (Buttercup and Marigold)
   - Apply blur for soft glow

3. **Responsive Behavior**
   - Desktop: Side-by-side layout (text left, 3D scene right)
   - Tablet: Stacked layout (text top, scene bottom)
   - Mobile: Optimized spacing and font sizes
   - Adjust spotlight size on smaller screens

4. **Brand Theme Compliance**
   - Use warm white background (#fffef9)
   - Apply golden gradient to title text
   - Use Poppins font for headings
   - Use Inter font for body text
   - Apply Marigold glow on card hover
   - Maintain light, warm, inviting aesthetic

5. **Performance Considerations**
   - Lazy load Spline scene
   - Show loading animation
   - Use CSS transforms for smooth animations
   - Optimize for mobile devices

## Features Included

✅ Single HTML file (no external dependencies except CDN)
✅ DreamyHook brand theme colors and gradients
✅ Interactive spotlight effect on hover
✅ Responsive design (mobile, tablet, desktop)
✅ Spline 3D scene integration
✅ Loading animation
✅ Smooth transitions and animations
✅ Google Fonts integration
✅ Accessibility-friendly

## Customization Options

You can easily customize:
- **Spline Scene URL**: Change the `url` attribute in `<spline-viewer>`
- **Title & Description**: Edit text content in `.content-left`
- **Colors**: Modify CSS variables in `:root`
- **Card Height**: Adjust `.card` height property
- **Spotlight Size**: Modify `.spotlight` width/height
- **Gradients**: Update gradient values in CSS

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## No Installation Required

This is a single HTML file. Simply:
1. Save as `spline-3d-scene.html`
2. Open in any modern web browser
3. No build tools, no npm, no dependencies to install!

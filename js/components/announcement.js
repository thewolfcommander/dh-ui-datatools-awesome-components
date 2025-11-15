/**
 * DreamyHook Announcement Component
 * A flexible badge component for announcements, tags, and notifications
 */

class AnnouncementComponent {
  constructor(element) {
    this.element = element;
    this.variant = element.dataset.variant || 'outline';
    this.themed = element.dataset.themed === 'true';
    this.dismissible = element.dataset.dismissible === 'true';
    this.init();
  }

  init() {
    // Add animation class on load
    this.element.classList.add('animate-in');

    // Add click handler if the announcement has a link
    const link = this.element.querySelector('a');
    if (link) {
      this.element.classList.add('clickable');
      this.element.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A' && !e.target.classList.contains('announcement-close')) {
          link.click();
        }
      });
    }

    // Add close button if dismissible
    if (this.dismissible) {
      this.addCloseButton();
    }
  }

  // Add close button for dismissible announcements
  addCloseButton() {
    const closeButton = document.createElement('button');
    closeButton.className = 'announcement-close';
    closeButton.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    `;
    closeButton.setAttribute('aria-label', 'Dismiss announcement');
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.dismiss();
    });
    this.element.appendChild(closeButton);
  }

  // Dismiss announcement with animation
  dismiss() {
    this.element.style.animation = 'fadeInScale 0.3s ease-out reverse';
    setTimeout(() => {
      this.element.remove();
      // Trigger custom event
      const event = new CustomEvent('announcement:dismissed', {
        detail: { element: this.element }
      });
      document.dispatchEvent(event);
    }, 300);
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

    if (tagElement && tag !== undefined) {
      tagElement.textContent = tag;
    }
    if (titleElement && title) {
      titleElement.textContent = title;
    }

    // Update or add icon
    if (iconHtml) {
      const existingIcon = this.element.querySelector('.announcement-icon');
      if (existingIcon) {
        existingIcon.remove();
      }
      iconContainer.insertAdjacentHTML('beforeend', iconHtml);
    }
  }

  // Add animation class
  animate(animationClass) {
    this.element.classList.add(animationClass);
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
    dismissible = false,
    icon = true,
    iconType = 'arrow', // arrow, bell, star, info, check
    container = document.body,
    link = null,
    animate = true
  } = options;

  // Icon templates
  const icons = {
    arrow: `<svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M7 7h10v10M7 17L17 7"/>
    </svg>`,
    bell: `<svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>`,
    star: `<svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`,
    info: `<svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>`,
    check: `<svg class="announcement-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"/>
    </svg>`
  };

  const iconSvg = icon ? (icons[iconType] || icons.arrow) : '';
  const titleContent = link ? `<a href="${link}">${title}</a>` : `<span>${title}</span>`;

  const html = `
    <div class="announcement" data-variant="${variant}" data-themed="${themed}" data-dismissible="${dismissible}">
      ${tag ? `<div class="announcement-tag">${tag}</div>` : ''}
      <div class="announcement-title">
        ${titleContent}
        ${iconSvg}
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', html);
  const element = container.lastElementChild;
  const component = new AnnouncementComponent(element);

  if (animate) {
    element.classList.add('animate-in');
  }

  return component;
}

// Create announcement bar at top of page
function createAnnouncementBar(options = {}) {
  const {
    tag = 'NEW',
    title = 'Announcement',
    variant = 'default',
    link = null,
    dismissible = true,
    position = 'top' // top or bottom
  } = options;

  // Create bar container if it doesn't exist
  let bar = document.querySelector('.announcement-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = `announcement-bar ${position}`;
    bar.style.cssText = `
      position: fixed;
      ${position}: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--theme-background);
      border-${position === 'top' ? 'bottom' : 'top'}: 1px solid rgba(10, 17, 40, 0.1);
      box-shadow: 0 4px 15px rgba(10, 17, 40, 0.05);
      z-index: 1000;
      animation: slideInTop 0.6s ease-out;
    `;
    document.body.appendChild(bar);
  }

  return createAnnouncement({
    ...options,
    container: bar
  });
}

// Auto-initialize all announcements on page
function initAnnouncements() {
  const announcements = document.querySelectorAll('.announcement:not([data-initialized])');
  announcements.forEach(el => {
    new AnnouncementComponent(el);
    el.dataset.initialized = 'true';
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnnouncements);
} else {
  initAnnouncements();
}

// Re-initialize when new elements are added
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        initAnnouncements();
      }
    });
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AnnouncementComponent,
    createAnnouncement,
    createAnnouncementBar,
    initAnnouncements
  };
}

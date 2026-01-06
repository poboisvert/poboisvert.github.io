const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])'
];

class FocusManager {
  constructor() {
    this.focusHistory = [];
    this.trapStack = [];
    this.observers = new Map();
  }

  saveFocus(element = document.activeElement) {
    if (element && element !== document.body) {
      this.focusHistory.push(element);
    }
  }

  restoreFocus() {
    const element = this.focusHistory.pop();
    if (element && typeof element.focus === 'function') {
      try {
        element.focus();

        if (element.tagName === 'BUTTON' || element.tagName === 'A') {
          element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }

        return true;
      } catch (error) {
        console.warn('Failed to restore focus:', error);
      }
    }
    return false;
  }

  clearFocusHistory() {
    this.focusHistory = [];
  }

  getFocusableElements(container = document) {
    return Array.from(
      container.querySelectorAll(FOCUSABLE_ELEMENTS.join(','))
    ).filter(el => {
      return el.offsetParent !== null &&
             !el.hasAttribute('aria-hidden') &&
             window.getComputedStyle(el).visibility !== 'hidden';
    });
  }

  announceToScreenReader(message, priority = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  initializeSkipLinks() {
    const existingSkipLink = document.querySelector('a[href="#main-content"]');
    if (existingSkipLink) {
      existingSkipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('main-content');
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus();

          target.addEventListener('blur', () => {
            target.removeAttribute('tabindex');
          }, { once: true });

          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  }
}

const focusManager = new FocusManager();

export default focusManager;

/**
 * Welcome Popup for Ink 102 Tattoos and Piercings
 * Small notification that appears from bottom for a few seconds
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  /**
   * Initialize welcome popup
   */
  function initializeWelcomePopup() {
    // Check if user has already seen the welcome popup today
    const lastShown = localStorage.getItem('ink102-welcome-shown');
    const today = new Date().toDateString();
    
    if (lastShown !== today) {
      createAndShowWelcomePopup();
      localStorage.setItem('ink102-welcome-shown', today);
    }
  }

  /**
   * Create and show the welcome popup
   */
  function createAndShowWelcomePopup() {
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'welcome-popup';
    popup.innerHTML = `
      <div class="welcome-content">
        <div class="welcome-icon">✨</div>
        <div class="welcome-text">
          <h3>Welcome to <span class="emphasis-102">Ink 102</span></h3>
          <p>Tattoos and Piercings</p>
        </div>
        <button class="welcome-close" aria-label="Close welcome popup">×</button>
      </div>
    `;

    // Add to document
    document.body.appendChild(popup);

    // Show popup with animation
    setTimeout(() => {
      popup.classList.add('show');
    }, 500); // Small delay for better UX

    // Auto-hide after 4 seconds
    const autoHideTimer = setTimeout(() => {
      hideWelcomePopup(popup);
    }, 4000);

    // Manual close button
    const closeBtn = popup.querySelector('.welcome-close');
    closeBtn.addEventListener('click', () => {
      clearTimeout(autoHideTimer);
      hideWelcomePopup(popup);
    });

    // Close on click outside (optional)
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        clearTimeout(autoHideTimer);
        hideWelcomePopup(popup);
      }
    });
  }

  /**
   * Hide welcome popup with animation
   */
  function hideWelcomePopup(popup) {
    popup.classList.add('hide');
    setTimeout(() => {
      if (popup.parentNode) {
        popup.parentNode.removeChild(popup);
      }
    }, 300);
  }

  // Initialize on page load
  initializeWelcomePopup();

  console.log('✅ Welcome Popup initialized');
});
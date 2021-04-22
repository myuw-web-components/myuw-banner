/**
 * MyUWBanner
 * From https://material.io/design/components/banners.html:
 * A banner displays an important, succinct message, and provides actions for users to 
 * address (or dismiss the banner). It requires a user action to be dismissed.
 * 
 * Banners should be displayed at the top of the screen, below a top app bar. 
 * They are persistent and nonmodal, allowing the user to either ignore them or interact with them at any time.
 */
import tpl from './myuw-banner.html';
class MyUWBanner extends HTMLElement {

  constructor() {
    super();

    // Create a shadowroot for this element
    this.attachShadow({mode: 'open'});

    // Append the custom HTML to the shadowroot
    this.shadowRoot.appendChild(MyUWBanner.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'message',
      'icon',
      'action-label',
      'action-aria-label',
      'action-url',
      'action-callback',
      'learn-more-aria-label',
      'learn-more-url'
    ];
  }

  /**
  *   Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    if (this.$messageText && this.$illustration && this.$actionButton) {
      this.updateComponent();
    }
  }

  /**
  *   When component is first attached to the DOM,
  *   get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['message']               = this.getAttribute('message') || '';
    this['icon']                  = this.getAttribute('icon') || '';
    this['action-label']       = this.getAttribute('action-label') || '';
    this['action-aria-label']       = this.getAttribute('action-aria-label') || '';
    this['action-url']        = this.getAttribute('action-url') || '';
    this['action-callback']   = this.getAttribute('action-callback') || '';
    this['learn-more-aria-label']       = this.getAttribute('learn-more-aria-label') || '';
    this['learn-more-url']       = this.getAttribute('learn-more-url') || '';

    this.$banner = this.shadowRoot.getElementById('myuw-banner');
    this.$message = this.shadowRoot.getElementById('myuw-banner__message');
    this.$messageText = this.shadowRoot.getElementById('myuw-banner__text');
    this.$illustration = this.shadowRoot.getElementById('myuw-banner__illustration');
    this.$learnMoreButton = this.shadowRoot.getElementById('myuw-banner__actions--learn-more');
    this.$actionButton = this.shadowRoot.getElementById('myuw-banner__actions--action');

    // Listen for open events and set positioning

    this.$actionButton.addEventListener('click', () => {
      // Dismiss the banner upon taking action
      this.$banner.classList.remove('open');
    });

    if (this.$messageText != null && this['message'].length > 0) {
      this.updateComponent();
    }
  }

  /**
  *   Update the component state
  */
  updateComponent() {
    // Set message text
    this.$messageText.innerHTML = this['message'];

    // Set icon
    if (this['icon'].length > 0) {
      this.$illustration.innerHTML = this['icon'];
      this.$illustration.style.display = '';
    } else {
      this.$illustration.style.display = 'none';
    }

    this.$actionButton.innerText = this['action-label'];
    this.$actionButton.setAttribute('aria-label', this['action-aria-label']);

    if (this['action-url'].length > 0) {
      this.$actionButton.setAttribute('href', this['action-url']);
      this.$actionButton.setAttribute('target', '_blank');
    }

    if (this['learn-more-url'].length > 0) {
      this.$learnMoreButton.setAttribute('href', this['learn-more-url']);
      this.$learnMoreButton.setAttribute('target', '_blank');
      this.$learnMoreButton.setAttribute('aria-label', this['learn-more-aria-label']);
      this.$learnMoreButton.style.display = '';
    } else {
      this.$learnMoreButton.style.display = 'none';
    }

    // Show banner
    this.$banner.classList.add('open');
  }
}

MyUWBanner.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-banner', MyUWBanner);

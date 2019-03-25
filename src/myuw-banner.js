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
      'confirming-text',
      'confirming-url',
      'dismissive-text'
    ];
  }

  /**
  *   Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    this.updateComponent();
  }

  /**
  *   When component is first attached to the DOM,
  *   get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['message']               = this.getAttribute('message') || '';
    this['icon']                  = this.getAttribute('icon') || '';
    this['confirming-text']       = this.getAttribute('confirming-text') || '';
    this['confirming-url']        = this.getAttribute('confirming-url') || '';
    this['dismissive-text']       = this.getAttribute('dismissive-text') || '';
    
    this.$banner = this.shadowRoot.getElementById('myuw-banner');
    this.$message = this.shadowRoot.getElementById('myuw-banner__message');
    this.$messageText = this.shadowRoot.getElementById('myuw-banner__text');
    this.$illustration = this.shadowRoot.getElementById('myuw-banner__illustration');
    this.$dismissiveButton = this.shadowRoot.getElementById('myuw-banner__actions--dismissive');
    this.$confirmingButton = this.shadowRoot.getElementById('myuw-banner__actions--confirming');

    // Listen for open events and set positioning
    this.$dismissiveButton.addEventListener('click', () => {
      // Dismiss the banner
      this.$banner.classList.remove('open');
    });

    this.$confirmingButton.addEventListener('click', () => {
      // Dismiss the banner
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
    } else {
      this.$illustration.style.display = 'none';
    }
    
    // Set up buttons
    this.$dismissiveButton.innerText = this['dismissive-text'];
    this.$dismissiveButton.setAttribute('aria-label', this['dismissive-text']);

    this.$confirmingButton.innerText = this['confirming-text'];
    this.$confirmingButton.setAttribute('aria-label', this['confirming-text']);
    this.$confirmingButton.setAttribute('href', this['confirming-url']);

    // Show  banner
    this.$banner.classList.add('open');
  }
}

MyUWBanner.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-banner', MyUWBanner);

(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var tpl = " <style> :host {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  }\n\n  :host([hidden]) {\n      display: none;\n  }\n\n  #myuw-banner {\n    width: 100%;\n    min-height: 0;\n    max-height: 0;\n    overflow-y: hidden;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    font-family: var( --myuw-font, Arial, sans-serif);\n    font-size: var(--myuw-base-font-size, 16px);\n    align-content: center;\n    border-bottom: 1px solid #ccc;\n    background: var(--myuw-banner-bg, #fff);\n    color: var(--myuw-on-banner, #222);\n    transition: all 0.3s cubic-bezier(0, 1, 0.5, 1);\n  }\n\n  #myuw-banner.open {\n    min-height: 54px;\n    max-height: 120px; \n  }\n\n  #myuw-banner__illustration {\n    min-width: 40px;\n    margin-right: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5rem;\n    color: var(--myuw-anchor-color, #0479a8);\n  }\n\n  #myuw-banner__message {\n    display: flex;\n    flex: 1 auto;\n    align-items: center;\n    padding: 8px;\n  }\n\n  #myuw-banner__actions {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    justify-content: flex-end;\n    flex: 1 auto;\n  }\n\n  #myuw-banner__actions button,\n  #myuw-banner__actions a {\n    display: inline-flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    min-height: 36px;\n    min-width: 64px;\n    margin: 0 8px;\n    padding: 0 8px;\n    color: var(--myuw-anchor-color, #0479a8);\n    background-color: transparent;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: .875em;\n    line-height: 2.25em;\n    font-weight: 500;\n    text-decoration: none;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-appearance: none;\n    overflow: hidden;\n    vertical-align: middle;\n    border-radius: 4px;\n    border: none;\n  }\n\n  #myuw-banner__actions button:hover,\n  #myuw-banner__actions a:hover {\n    background: var(--myuw-button-transparency, rgba(0,0,0,0.12));\n  }\n\n  #myuw-banner__actions--confirming {\n    margin-left: 8px;\n  }\n\n  /*\n    On mobile, they scroll off-screen with content, at the same elevation as app content.\n    On desktop, they remain fixed at the top of the screen, at the same elevation as the top app bar.\n  */\n\n  @media all and (min-width: 720px) {\n    #myuw-banner.open {\n      min-height: 52px;\n      padding: 0 24px;\n      /* z-index: var(--z-index, 80);\n      box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);\n      border-bottom: none;\n      position: fixed;\n      top: var(--myuw-top-bar-height, 64px); */\n    }\n\n    #myuw-banner.open #myuw-banner__actions {\n      margin-left: 90px;\n    }\n\n    #myuw-banner__illustration {\n      margin-right: 12px;\n    }\n  } </style> <div id=\"myuw-banner\"> <div id=\"myuw-banner__message\"> <i id=\"myuw-banner__illustration\" class=\"material-icons\"></i> <span id=\"myuw-banner__text\"></span> </div> <div id=\"myuw-banner__actions\"> <button id=\"myuw-banner__actions--dismissive\"></button> <a id=\"myuw-banner__actions--confirming\"></a> </div> </div> ";

  var MyUWBanner =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWBanner, _HTMLElement);

    function MyUWBanner() {
      var _this;

      _classCallCheck(this, MyUWBanner);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWBanner).call(this)); // Create a shadowroot for this element

      _this.attachShadow({
        mode: 'open'
      }); // Append the custom HTML to the shadowroot


      _this.shadowRoot.appendChild(MyUWBanner.template.content.cloneNode(true));

      return _this;
    }

    _createClass(MyUWBanner, [{
      key: "attributeChangedCallback",

      /**
      *   Web component lifecycle hook to update changed properties
      */
      value: function attributeChangedCallback(name, oldValue, newValue) {
        // Update the attribute internally
        this[name] = newValue; // Update the component

        if (this.$messageText && this.$illustration && this.$confirmingButton && this.$dismissiveButton) {
          this.updateComponent();
        }
      }
      /**
      *   When component is first attached to the DOM,
      *   get its defined attributes and set up listeners
      */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        // Get all attributes
        this['message'] = this.getAttribute('message') || '';
        this['icon'] = this.getAttribute('icon') || '';
        this['confirming-text'] = this.getAttribute('confirming-text') || '';
        this['confirming-url'] = this.getAttribute('confirming-url') || '';
        this['confirming-callback'] = this.getAttribute('confirming-callback') || '';
        this['dismissive-text'] = this.getAttribute('dismissive-text') || '';
        this.$banner = this.shadowRoot.getElementById('myuw-banner');
        this.$message = this.shadowRoot.getElementById('myuw-banner__message');
        this.$messageText = this.shadowRoot.getElementById('myuw-banner__text');
        this.$illustration = this.shadowRoot.getElementById('myuw-banner__illustration');
        this.$dismissiveButton = this.shadowRoot.getElementById('myuw-banner__actions--dismissive');
        this.$confirmingButton = this.shadowRoot.getElementById('myuw-banner__actions--confirming'); // Listen for open events and set positioning

        this.$dismissiveButton.addEventListener('click', function () {
          // Dismiss the banner
          _this2.$banner.classList.remove('open');
        });
        this.$confirmingButton.addEventListener('click', function () {
          // Dismiss the banner
          _this2.$banner.classList.remove('open');
        });

        if (this.$messageText != null && this['message'].length > 0) {
          this.updateComponent();
        }
      }
      /**
      *   Update the component state
      */

    }, {
      key: "updateComponent",
      value: function updateComponent() {
        // Set message text
        this.$messageText.innerHTML = this['message']; // Set icon

        if (this['icon'].length > 0) {
          this.$illustration.innerHTML = this['icon'];
        } else {
          this.$illustration.style.display = 'none';
        } // Set up buttons


        this.$dismissiveButton.innerText = this['dismissive-text'];
        this.$dismissiveButton.setAttribute('aria-label', this['dismissive-text']);
        this.$confirmingButton.innerText = this['confirming-text'];
        this.$confirmingButton.setAttribute('aria-label', this['confirming-text']);

        if (this['confirming-url'].length > 0) {
          this.$confirmingButton.setAttribute('href', this['confirming-url']);
          this.$confirmingButton.setAttribute('target', '_blank');
        } else if (this['confirming-callback'].length > 0) {
          this.$confirmingButton.setAttribute('onclick', this['confirming-callback']);
        } // Show  banner


        this.$banner.classList.add('open');
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['message', 'icon', 'confirming-text', 'confirming-url', 'confirming-callback', 'dismissive-text'];
      }
    }]);

    return MyUWBanner;
  }(_wrapNativeSuper(HTMLElement));

  MyUWBanner.template = function template(src) {
    var template = document.createElement('template');
    template.innerHTML = src;
    return template;
  }(tpl);

  window.customElements.define('myuw-banner', MyUWBanner);

}());

# myuw-banner

A component for displaying slightly-interruptive messages via a banner below the top app bar.

## Getting Started

Include the component as follows:

```html
<!-- import the module -->
<script type="module" src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-banner@latest/myuw-banner.min.mjs"></script>

<!-- fallback for browsers without ES2015 module support -->
<script nomodule src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-banner@latest/myuw-banner.min.js"></script>

<myuw-banner
  message="MyUW"
  icon=""
  confirming-text=""
  confirming-url=""
  confirming-callback=""
  dismissive-text=""
></myuw-banner>
```

_Note:_ The evergreen "latest" version can be used for convenience, but in production settings it is recommended to use the latest [release version](https://github.com/myuw-web-components/myuw-banner/releases) specifically, and upgrade only after testing!

### Configurable properties via attributes

- **message:** Sets the message to display in the banner
- **icon:** Sets an icon to go with the message (optional)
- **confirming-text:** Sets the text for the rightmost button (take action/confirmation)
- **confirming-url:** Sets the url to go to when the confirming button is clicked (optional)
- **confirming-callback:** Sets the onclick event for the button (optional). Must be used if no `confirming-url` is set (and vice versa).
- **dismissive-text:** Sets the text for the leftmost button (skip action/dismiss banner)

### Styling the banner

MyUW app bar exposes custom CSS properties so users can change some of its styles.

- `--myuw-banner-bg`: Sets the banner's background color
- `--myuw-on-banner`: Sets the text color of banner text
- `--myuw-anchor-color`: Used for the button and icon colors (also used to set link colors)
- `--myuw-button-transparency`: Used for the on-hover background color for buttons


For more information about CSS variables and how they work with MyUW Web Components, [reference the styles component](https://github.com/myuw-web-components/myuw-app-styles "reference the styles component")

#### How to use custom CSS properties

Add the following selector to your CSS:

```css
myuw-banner {
  --myuw-banner-bg: #c5050c;
  --myuw-on-banner: #fff;
}
```

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```

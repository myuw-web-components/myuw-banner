# myuw-banner

A component for displaying slightly-interruptive messages via a banner below the top app bar.

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-banner@^1?module"></script>
<script nomodule scr="https://unpkg.com/@myuw-web-components/myuw-banner@^1"></script>
```

**Important**: For responsiveness to many screen sizes, ensure you have included the viewport meta tag in your application:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-banner
    message="MyUW"
    icon=""
    confirming-text=""
    confirming-url=""
    dismissive-text=""
>
</myuw-banner>
```

### Configurable properties via attributes

- **message:** Sets the message to display in the banner
- **icon:** Sets an icon to go with the message (optional)
- **confirming-text:** Sets the text for the rightmost button (take action/confirmation)
- **confirming-url:** Sets the url to go to when the confirming button is clicked
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
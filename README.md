# myuw-banner
**`myuw-banner` is not currently maintained.**

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
  action-label=""
  action-aria-label=""
  action-url=""
  learn-more-aria-label=""
  learn-more-url=""
></myuw-banner>
```

_Note:_ The evergreen "latest" version can be used for convenience, but in production settings it is recommended to use the latest [release version](https://github.com/myuw-web-components/myuw-banner/releases) specifically, and upgrade only after testing!

### Configurable properties via attributes

- **message:** Sets the message to display in the banner
- **icon:** Sets an icon to go with the message (optional)
- **action-label:** Sets the text for the rightmost button (take action/confirmation)
- **action-aria-label:** Sets the aria label for the action button.
  Whereas a label like "Sign up" might make little sense out of context,
  an ARIA label like "Sign up for a vaccination appointment"
  clarifies what one is signing up for.
- **action-url:** Sets the url to go to when the confirming button is clicked
  (required)
- **learn-more-aria-label:** Sets the aria-label for the secondary button.
  This addresses the usability problem that
  for a typical user a label like "Learn more" might be sufficient
  because the context is visually apparent from the placement of the button,
  but for a user consuming the links out of context
  (e.g., jumping between links in a screen reader browser),
  a label like "Learn more" prompts the question "Learn more *about what???*".
  This ARIA label is a chance to make it apparent what it is one would learn more about.
  A reasonable value for this might be "Learn more about making a COVID-19 vaccination appointment."
  (optional; required if learn-more-url is set)
- **learn-more-url:** Sets the href for the secondary button.
  (optional: if not set, button does not appear)

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

## Releasing

To release a new version:

- Pick an appropriate version number, semantically versioning.
  - Backwards-compatible bugfix? patch version.
  - Backwards-compatible new or changed feature? minor version.
  - Breaking change of any kind? major version.
- Ensure `package.json` and `package-lock.json` reflect this version,
  and that there's a tag for the version pushed to the canonical git repository.
  (One good way to do this is `npm version {type}` and then pushing the tag.)
- `npm publish` to publish the version as now described in `package.json`
- tada! once the version publishes to npm,
  unpkg picks it up, making it available by named version and as latest.
- Ensure the `CHANGELOG.md` reflects this version and its release date.

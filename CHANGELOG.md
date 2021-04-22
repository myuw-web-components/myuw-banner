# myuw-banner versions

## 3.0.0 - 2021-04-22

BREAKING CHANGES:

+ Removed dismiss feature.
  Dismiss had not been, in practice, implemented in a way that persisted anyway.
+ Added learn more link feature.
+ Removed hard-coded learn more link specific to 2020 WRS ETF SoB.
+ Re-named attributes.

## 2.0.0 - 2021-04-12

+ BREAKING, goofy change: replaces the dismiss button with a hard-coded
  "Learn more" link supporting the banner message about availability of the
  2020 WRS ETF Statement of Benefits.

## 1.2.4

+ Removed max-height property of the banner
  to ensure content fits in the view
+ Updated padding around the content

## 1.2.3

+ Updated max-width of the banner
  to avoid the content being too distant from the action buttons
  on screens above 1400px

## 1.2.2

+ Add style to make main call-to-action more prominent

## 1.2.1

+ ARIA implementation for minor accessibility improvements

## 1.2.0

(No functional changes.)

## 1.1.1

+ Adjusted vertical alignment of elements to be more attractive
  on many screen sizes.

## 1.1.0

+ New attribute `confirming-callback`
  sets the `onclick` attribute for the confirmation button.
  If both `confirming-callback` and `confirming-url` are present,
  the component will prefer `confirming-url`.

## 1.0.2

+ Button font-size to `em` for consistency with banner font
+ Adjust layout on different screen sizes
+ Banner no longer displays on large screens when it should be hidden

## 1.0.1

+ Banner closes when buttons are clicked (animated slide)

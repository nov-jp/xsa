[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# XSA CSS (@nov-xsa/css)

A collection of CSS files requiring no scripts or build steps. XSA properties to be used must be selected manually.

## Description of Files

* **xsa.css**: A bundled version of XSA CSS, excluding `xsa-transitions.css` and `xsa-token.css`.
  
  ```
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa.min.css" />
  ```
  
  * xsa-align.css
  * xsa-border.css
  * xsa-border-radius.css
  * xsa-box-margin.css
  * xsa-box-padding.css
  * xsa-color.css
  * xsa-display.css
  * xsa-gaps.css
  * xsa-images.css
  * xsa-layout-flexbox.css
  * xsa-layout-gap.css
  * xsa-layout-multicol.css
  * xsa-lists.css
  * xsa-overflow.css
  * xsa-sizing.css
  * xsa-tables.css
  * xsa-text.css
  * xsa-z-index.css
  
* **xsa-align.css**: Allows you to configure settings related to item alignment.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-align.min.css" />
  ```
  
  * `--(cqi-(s|m|l|xl)_)?place-content--`
  * `--(cqi-(s|m|l|xl)_)?place-items--`
  * `--(cqi-(s|m|l|xl)_)?place-self--`
  
* **xsa-border.css**: Allows you to configure box borders and shadows.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-border.min.css" />
  ```
  
  * `--(d-of-dd-dt-td-th_|c_)?border(-block(-start|-end)?|-inline(-start|-end)?)?(-style|-width|-color)?--`
  * `--(d-of-dd-dt-td-th_|c_)?box-shadow--`
  
* **xsa-border-radius.css**: Allows you to configure border radiuses (rounded corners).
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-border-radius.min.css" />
  ```
  
  * `--(d-of-dd-dt-td-th_|c_)?border-radius--`
  
* **xsa-box-margin.css**: Allows you to configure box margins (outer spacing).
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-box-margin.min.css" />
  ```
  
  * `--(d-of-dd-dt-td-th_|c_)?margin(-block(-start|-end)?|-inline(-start|-end)?)?--`
  
* **xsa-box-padding.css**: Allows you to configure box paddings (inner spacing).
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-box-padding.min.css" />
  ```
  
  * `--(d-of-dd-dt-td-th_|c_)?padding(-block(-start|-end)?|-inline(-start|-end)?)?--`
  
* **xsa-color.css**: Allows you to configure background colors and text colors.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-color.min.css" />
  ```
  
  * `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?background--`
  * `--background-attachment--: fixed;`
  * `--background-color--`
  * `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?color--`
  
* **xsa-display.css**: Allows you to configure display-related settings.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-display.min.css" />
  ```
  
  * `--display--`
  * `--(cqi-(s|m|l|xl)_)?order--`
  
* **xsa-gaps.css**: Allows you to configure settings related to gaps.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-gaps.min.css" />
  ```
  
  * `--(cqi-(s|m|l|xl)_)?(row-|column-)?gap--`
  
* **xsa-images.css**: Allows you to configure settings for replaced elements such as images.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-images.min.css" />
  ```
  
  * `--object-fit--`
  * `--object-position--`
  
* **xsa-layout-flexbox.css**: Allows you to configure settings related to Flexbox layouts.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-layout-flexbox.min.css" />
  ```
  
  * `--container-type--`
  * `--(cqi-(s|m|l|xl)_|c_)?flex--`
  * `--(cqi-(s|m|l|xl)_)?flex-flow--`
  
* **xsa-layout-grid.css**: Allows you to configure settings related to Grid layouts.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-layout-grid.min.css" />
  ```
  
  * `--container-type--`
  * `--(cqi-(s|m|l|xl)_)?grid--`
  * `--(cqi-(s|m|l|xl)_|c_)?grid-area--`
  
* **xsa-layout-multicol.css**: Allows you to configure settings related to multi-column layouts.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-layout-multicol.min.css" />
  ```
  
  * `--columns--`
  * `--column-fill--`
  * `--column-rule--`
  * `--column-span--`
  * `--column-gap--`
  * `--c_margin-block-start--`
  * `--c_margin-block-end--`
  
* **xsa-lists.css**: Allows you to configure settings related to lists.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-lists.min.css" />
  ```
  
  * `--list-style(-type|-image|-position)?--`
  
* **xsa-overflow.css**: Allows you to configure settings related to overflow.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-overflow.min.css" />
  ```
  
  * `--overflow--`
  
* **xsa-sizing.css**: Allows you to configure settings related to sizing.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-sizing.min.css" />
  ```
  
  * `--aspect-ratio--`
  * `--block-size--`
  * `--min-block-size--`
  * `--max-block-size--`
  * `--inline-size--`
  * `--min-inline-size--`
  * `--max-inline-size--`
  
* **xsa-tables.css**: Allows you to configure settings related to tables.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-tables.min.css" />
  ```
  
  * `--border-collapse--`
  * `--border-spacing--`
  * `--caption-side--`
  * `--empty-cells--`
  * `--table-layout--`
  
* **xsa-text.css**: Allows you to configure settings related to text decoration and typography.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-text.min.css" />
  ```
  
  * `--font(-family|-size|-style|-weight)--`
  * `--text-align--`
  * `--text-decoration--`
  * `--text-emphasis--`
  * `--text-shadow--`
  * `--text-stroke--`
  * `--text-wrap--`
  * `--vertical-align--`
  * `--white-space--`
  * `--x-text-marker--` (Custom implementation)
  
* **xsa-transitions.css**: Allows you to configure settings for user-action pseudo-classes and transitions.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-transitions.min.css" />
  ```
  
  * `--transition--`
  * `--(hover_|active_|focus-visible_)background--`
  * `--(hover_|active_|focus-visible_)border-color--`
  * `--(hover_|active_|focus-visible_)box-shadow--`
  * `--(hover_|active_|focus-visible_)color--`
  * `--(hover_|active_|focus-visible_)filter--`
  * `--(hover_|active_|focus-visible_)transform--`
  
* **xsa-z-index.css**: Allows you to configure settings related to stacking levels.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-z-index.min.css" />
  ```
  
  * `--(cqi-(s|m|l|xl)_)?z-index--`
  
* **xsa-token.css**: A sample design token sheet for XSA setups that do not natively have design tokens.
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-token.min.css" />
  ```
  
  * `Opacity: --a_(xl|l|m|h|xh)`
  * `Font Size: --em_(xxs|xs|s|m|l|xl|xxl|xxxl)`
  * `Elevation (Shadow): --elev_(xl|l|m|h|xh)`
  * `Border Width: --l_(xf|f|m|b|xb)`
  * `Border Radius: --r_(xs|s|m|l|xl)`
  * `Spacing: --sp_(xxs|xs|s|m|l|xl|xxl)`
  * `Red: --(sheer-|sheerer-|sheerest-)?red`
  * `Yellow: --(sheer-|sheerer-|sheerest-)?yellow`
  * `Green: --(sheer-|sheerer-|sheerest-)?green`
  * `Blue: --(sheer-|sheerer-|sheerest-)?blue`
  * `Gray: --(sheer-|sheerer-|sheerest-)?gray`
  * `White: --(sheer-|sheerer-|sheerest-)?white`
  * `Black: --(sheer-|sheerer-|sheerest-)?black`
  * `Text Color: --(sheer|sheerer|sheerest)-text`

## Installation

If you are using a build tool, you can install and import it.

```Bash
npm install @nov-xsa/css
```

In environments where files are loaded via CSS, import them as follows:

```CSS
/* All modules */
@import "@nov-xsa/css";
@import "@nov-xsa/css/effects";

/* Specific module */
@import "@nov-xsa/css/text";

/* Specific module specified by file name */
@import "@nov-xsa/css/dist/xsa-text.min.css";
```

In environments where files are loaded via JavaScript, import them as follows:

```JS
/* All modules */
import "@nov-xsa/css";
import "@nov-xsa/css/effects";

/* Specific module */
import "@nov-xsa/css/text";

/* Specific module specified by file name */
import "@nov-xsa/css/dist/xsa-text.min.css";
```

## Usage

This is an example using a CDN.

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-border.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-box-padding.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-color.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-sizing.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-table.min.css" />
…
<table style="--border--: solid thin; --border-collapse--: collapse; --inline-size--: 100%; --table-layout--: fixed; --d-of-dd-dt-td-th_border--: var(--border--); --d-of-dd-dt-td-th_padding-block--: calc(0.5lh - 0.5em); --d-of-dd-dt-td-th_padding-inline--: calc(1lh - 1em); --d-of-dt-th_background--: color-mix(in srgb, transparent, currentcolor 6.25%);">
  <thead>
    <tr> … </tr>
  </thead>
  <tbody style="--c-nth-odd_background--: var(in srgb, transparent, currentcolor 6.25%);">
    <tr> … </tr>
    …
  </tbody>
</table>
```

---

The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/).

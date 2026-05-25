[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# XSA JS (@xsa/js)

A script that generates CSS code from XSA properties and injects it into a `style` element.

## Installation

If you are using a build tool, you can install and import it.

```Bash
npm install @xsa/js
```

```JS
import XSA from '@xsa/js';
new XSA().init();
```

## Usage

This is an example using a CDN.

```HTML
<script src="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/js/dist/xsa.min.js"></script>
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

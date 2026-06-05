[English](README.md) | [日本語](README.ja.md)

---

# XSA JS (@nov-xsa/js)

A script that generates CSS code from XSA properties and outputs it to a `style` element.

## Installation

If you are using a build tool, you can install and import it.

```Bash
npm install @nov-xsa/js
```

```JS
import XSA from '@nov-xsa/js';
new XSA().init();
```

## Usage

This is an example using a CDN.

```HTML
<script src="https://cdn.jsdelivr.net/gh/nov-jp/xsa@1.0/packages/js/dist/xsa.min.js"></script>
…
<table style="
    --border--: solid thin;
    --border-collapse--: collapse;
    --inline-size--: 100%;
    --table-layout--: fixed;
    --c3_border--: var(--border--);
    --c3_padding-block--: calc(0.5lh - 0.5em);
    --c3_padding-inline--: calc(1lh - 1em);
    --c3-of-th_background--: color-mix(in srgb, transparent, currentcolor 12.5%);
    ">
  <thead>
    <tr> … </tr>
  </thead>
  <tbody style="
      --c-nth-odd_background--: var(in srgb, transparent, currentcolor 6.25%);
      --c_hover_background--: var(in srgb, transparent, currentcolor 25%);
      ">
    <tr> … </tr>
    …
  </tbody>
</table>
```

---

The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/).

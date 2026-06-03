[日本語](README.md) | [English](README.en.md)

---

# XSA JS (@nov-xsa/js)

XSAプロパティ から CSSコード の生成と style要素 への出力を行うスクリプトです。

## インストール

ビルドツールを使用している場合はインストールとインポートができます。

```Bash
npm install @nov-xsa/js
```

```JS
import XSA from '@nov-xsa/js';
new XSA().init();
```

## 使用例

CDN を利用した場合の例です。

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

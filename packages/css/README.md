[日本語](README.md) | [English](README.en.md)

---

# XSA CSS (@nov-xsa/css)

使用する XSAプロパティ を手動で選択するスクリプトなし・ビルドなしの CSSファイル群 です。

## 各種ファイルの説明

- **xsa.css**: xsa-transitions.css と xsa-token.css を除く XSA CSS を1つにまとめたものです。
  
  ```
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa.min.css" />
  ```
  
  - xsa-align.css
  - xsa-border.css
  - xsa-border-radius.css
  - xsa-box-margin.css
  - xsa-box-padding.css
  - xsa-color.css
  - xsa-display.css
  - xsa-gaps.css
  - xsa-images.css
  - xsa-layout-flexbox.css
  - xsa-layout-gap.css
  - xsa-layout-multicol.css
  - xsa-lists.css
  - xsa-overflow.css
  - xsa-sizing.css
  - xsa-tables.css
  - xsa-text.css
  - xsa-z-index.css
  
- **xsa-align.css**: アイテムの配置に関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-align.min.css" />
  ```
  
  - `--(cqi-(s|m|l|xl)_)?place-content--`
  - `--(cqi-(s|m|l|xl)_)?place-items--`
  - `--(cqi-(s|m|l|xl)_)?place-self--`
  
- **xsa-border.css**: ボックスの境界と影が設定できるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-border.min.css" />
  ```
  
  - `--(d-of-dd-dt-td-th_|c_)?border(-block(-start|-end)?|-inline(-start|-end)?)?(-style|-width|-color)?--`
  - `--(d-of-dd-dt-td-th_|c_)?box-shadow--`
  
- **xsa-border-radius.css**: 角丸の設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-border-radius.min.css" />
  ```
  
  - `--(d-of-dd-dt-td-th_|c_)?border-radius--`
  
- **xsa-box-margin.css**: ボックスの外側の余白が設定できるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-box-margin.min.css" />
  ```
  
  - `--(d-of-dd-dt-td-th_|c_)?margin(-block(-start|-end)?|-inline(-start|-end)?)?--`
  
- **xsa-box-padding.css**: ボックスの内側の余白が設定できるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-box-padding.min.css" />
  ```
  
  - `--(d-of-dd-dt-td-th_|c_)?padding(-block(-start|-end)?|-inline(-start|-end)?)?--`
  
- **xsa-color.css**: 背景色と文字色が設定できるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-color.min.css" />
  ```
  
  - `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?background--`
  - `--background-attachment--: fixed;`
  - `--background-color--`
  - `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?color--`
  
- **xsa-display.css**: 表示に関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-display.min.css" />
  ```
  
  - `--display--`
  - `--(cqi-(s|m|l|xl)_)?order--`
  
- **xsa-gaps.css**: ギャップに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-gaps.min.css" />
  ```
  
  - `--(cqi-(s|m|l|xl)_)?(row-|column-)?gap--`
  
- **xsa-images.css**: 画像などの置換要素に関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-images.min.css" />
  ```
  
  - `--object-fit--`
  - `--object-position--`
  
- **xsa-layout-flexbox.css**: フレックスボックスレイアウトに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-layout-flexbox.min.css" />
  ```
  
  - `--container-type--`
  - `--(cqi-(s|m|l|xl)_|c_)?flex--`
  - `--(cqi-(s|m|l|xl)_)?flex-flow--`
  
- **xsa-layout-grid.css**: グリッドレイアウトに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-layout-grid.min.css" />
  ```
  
  - `--container-type--`
  - `--(cqi-(s|m|l|xl)_)?grid--`
  - `--(cqi-(s|m|l|xl)_|c_)?grid-area--`
  
- **xsa-layout-multicol.css**: 段組みレイアウトに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-layout-multicol.min.css" />
  ```
  
  - `--columns--`
  - `--column-fill--`
  - `--column-rule--`
  - `--column-span--`
  - `--column-gap--`
  - `--c_margin-block-start--`
  - `--c_margin-block-end--`
  
- **xsa-lists.css**: リストに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-lists.min.css" />
  ```
  
  - `--list-style(-type|-image|-position)?--`
  
- **xsa-overflow.css**: オーバーフローに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-overflow.min.css" />
  ```
  
  - `--overflow--`
  
- **xsa-sizing.css**: サイズに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-sizing.min.css" />
  ```
  
  - `--aspect-ratio--`
  - `--block-size--`
  - `--min-block-size--`
  - `--max-block-size--`
  - `--inline-size--`
  - `--min-inline-size--`
  - `--max-inline-size--`
  
- **xsa-tables.css**: テーブルに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-tables.min.css" />
  ```
  
  - `--border-collapse--`
  - `--border-spacing--`
  - `--caption-side--`
  - `--empty-cells--`
  - `--table-layout--`
  
- **xsa-text.css**: テキスト装飾に関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-text.min.css" />
  ```
  
  - `--font(-family|-size|-style|-weight)--`
  - `--text-align--`
  - `--text-decoration--`
  - `--text-emphasis--`
  - `--text-shadow--`
  - `--text-stroke--`
  - `--text-wrap--`
  - `--vertical-align--`
  - `--white-space--`
  - `--x-text-marker--` (独自実装)
  
- **xsa-transitions.css**: ユーザー操作擬似クラスとトランジションの設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-transitions.min.css" />
  ```
  
  - `--transition--`
  - `--(hover_|active_|focus-visible_)background--`
  - `--(hover_|active_|focus-visible_)border-color--`
  - `--(hover_|active_|focus-visible_)box-shadow--`
  - `--(hover_|active_|focus-visible_)color--`
  - `--(hover_|active_|focus-visible_)filter--`
  - `--(hover_|active_|focus-visible_)transform--`
  
- **xsa-z-index.css**: スタックレベルに関する設定ができるようになります。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-z-index.min.css" />
  ```
  
  - `--(cqi-(s|m|l|xl)_)?z-index--`
  
- **xsa-token.css**: デザイントークンを持たない XSA のためのデザイントークン・サンプルです。
  
  ```HTML
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/xsa@main/packages/css/dist/xsa-token.min.css" />
  ```
  
  - `不透明度: --a_(xl|l|m|h|xh)`
  - `文字の大きさ: --em_(xxs|xs|s|m|l|xl|xxl|xxxl)`
  - `影を作る高度: --elev_(xl|l|m|h|xh)`
  - `線の太さ: --l_(xf|f|m|b|xb)`
  - `角丸の半径: --r_(xs|s|m|l|xl)`
  - `スペース: --sp_(xxs|xs|s|m|l|xl|xxl)`
  - `赤色: --(sheer-|sheerer-|sheerest-)?red`
  - `黄色: --(sheer-|sheerer-|sheerest-)?yellow`
  - `緑色:--(sheer-|sheerer-|sheerest-)?green`
  - `青色: --(sheer-|sheerer-|sheerest-)?blue`
  - `灰色: --(sheer-|sheerer-|sheerest-)?gray`
  - `白色: --(sheer-|sheerer-|sheerest-)?white`
  - `黒色: --(sheer-|sheerer-|sheerest-)?black`
  - `文字色: --(sheer|sheerer|sheerest)-text`

## インストール

ビルドツールを使用している場合はインストールとインポートができます。

```Bash
npm install @nov-xsa/css
```

CSS で読み込む環境では次のようにインポートします。

```CSS
/* 全部 */
@import "@nov-xsa/css";
@import "@nov-xsa/css/effects";

/* 任意のモジュール */
@import "@nov-xsa/css/text";

/* 任意のモジュールをファイル名で指定 */
@import "@nov-xsa/css/dist/xsa-text.min.css";
```

JavaScript で読み込む環境では次のようにインポートします。

```JS
/* 全部 */
import "@nov-xsa/css";
import "@nov-xsa/css/effects";

/* 任意のモジュール */
import "@nov-xsa/css/text";

/* 任意のモジュールをファイル名で指定 */
import "@nov-xsa/css/dist/xsa-text.min.css";
```

## 使用例

CDN を利用した場合の例です。

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

[日本語](README.md) | [English](README.en.md)

---

# ExStyle CSS (@exstyle/css)

ExStyle CSS は、link要素 で読み込む、使用する ExStyleプロパティ を限定した CSSファイル群 です。

## 特徴

- **導入が簡単**: 複雑なビルドプロセスを介さず、スタイルを読み込ませるだけという手軽さです。
- **無駄がない構成**: ExStyle JS や ExStyle PHP で生成される CSSコード に比べ、構成に無駄がありません。
- **必要最小限**: 本当に必要なものだけを選択して使うことができます。

## 各種ファイルの説明

- **exstyle.css**: 以下の各種 ExStyle CSS を1つにまとめたものです。
  ```
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle.min.css" />
  ```
  - **exstyle-box-margin.css**: ボックス外側の余白が設定できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-box-margin.min.css" />
    ```
    - `--(d-of-dd-dt-td-th_|c_)?margin(-block(-start|-end)?|-inline(-start|-end)?)?--`
  - **exstyle-box-padding.css**: ボックス内側の余白が設定できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-box-padding.min.css" />
    ```
    - `--(d-of-dd-dt-td-th_|c_)?padding(-block(-start|-end)?|-inline(-start|-end)?)?--`
  - **exstyle-color.css**: 色を設定する各種プロパティが使用できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-color.min.css" />
    ```
    - `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?background--`
    - `--background-attachment--: fixed;`
    - `--background-color--`
    - `--(d-of-dd-dt-td-th_|c_)?border(-block(-start|-end)?|-inline(-start|-end)?)?(-style|-width|-color)?--`
    - `--(d-of-dd-dt-td-th_|c_)?border-radius--`
    - `--(d-of-dd-dt-td-th_|c_)?box-shadow--`
    - `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?color--`
  - **exstyle-layout.css**: レイアウトに関する各種プロパティが使用できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-layout.min.css" />
    ```
    - `--columns--`
    - `--column-fill--`
    - `--column-rule--`
    - `--column-span--`
    - `--container-type--`
    - `--display--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_|c_)?flex--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?flex-flow--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?(row-|column-)?gap--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?grid--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_|c_)?grid-area--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?order--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?place-content--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?place-items--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?place-self--`
    - `--(cq-i-s_|cq-i-m_|cq-i-l_|cq-i-xl_)?z-index--`
  - **exstyle-lists.css**: リストに関する各種プロパティが使用できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-lists.min.css" />
    ```
    - `--list-style(-type|-image|-position)?--`
  - **exstyle-sizing.css**: 要素のサイズに関する各種プロパティが使用できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-sizing.min.css" />
    ```
    - `--aspect-ratio--`
    - `--block-size--`
    - `--min-block-size--`
    - `--max-block-size--`
    - `--inline-size--`
    - `--min-inline-size--`
    - `--max-inline-size--`
    - `--object-fit--`
    - `--object-position--`
    - `--overflow--`
  - **exstyle-table.css**: テーブルに関する各種プロパティが使用できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-table.min.css" />
    ```
    - `--border-collapse--`
    - `--border-spacing--`
    - `--caption-side--`
    - `--empty-cells--`
    - `--table-layout--`
  - **exstyle-text.css**: 文字の装飾に関する各種プロパティが使用できるようになります。
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-text.min.css" />
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
    - `--x-text-marker--`
- **exstyle-effects.css**: ユーザー操作擬似クラスとトランジションによるエフェクトが使用できるようになります。
  ```
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-effects.min.css" />
  ```
  - `--transition--`
  - `--(hover_|active_|focus-visible_)background--`
  - `--(hover_|active_|focus-visible_)border-color--`
  - `--(hover_|active_|focus-visible_)box-shadow--`
  - `--(hover_|active_|focus-visible_)color--`
  - `--(hover_|active_|focus-visible_)filter--`
  - `--(hover_|active_|focus-visible_)transform--`
  - `--(hover_|active_|focus-visible_)z-index--`

## 使用例

ビルドツールなどを使用している場合はインストールと、

```Bash
npm install @exstyle/css
```

インポートができます。

```CSS
/* 全部 */
@import "@exstyle/css";
@import "@exstyle/css/effects";

/* 任意のモジュール */
@import "@exstyle/css/color";
@import "@exstyle/css/text";

/* 任意のモジュールをファイル名で指定 */
@import "@exstyle/css/dist/exstyle-color.min.css";
@import "@exstyle/css/dist/exstyle-text.min.css";
```

JavaScript で CSS を読み込む環境では次のようにインポートします。

```JS
/* 全部 */
import "@exstyle/css";

/* 任意のモジュール */
import "@exstyle/css/color";
import "@exstyle/css/text";

/* 任意のモジュールをファイル名で指定 */
import "@exstyle/css/dist/exstyle-color.min.css";
import "@exstyle/css/dist/exstyle-text.min.css";
```

次の例では、[Open Props](https://open-props.style/) と共に CDN を利用しています。

```HTML
<!-- 1つにまとめられた ExStyle CSS を読み込む場合 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle.min.css" />

<!-- 必要なファイルだけ選んで読み込む場合 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-box-padding.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-color.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-sizing.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/css/dist/exstyle-table.min.css" />

<link rel="stylesheet" href="https://unpkg.com/open-props" />
…
<table style="
    --border--: solid var(--border-size-1) var(--gray-6);
    --border-collapse--: collapse;
    --inline-size--: 100%;
    --table-layout--: fixed;
    --d-of-dd-dt-td-th_border--: var(--border--);
    --d-of-dd-dt-td-th_padding-block--: var(--size-2);
    --d-of-dd-dt-td-th_padding-inline--: var(--size-3);
    --x_background--: var(--gray-1);
    ">
  <thead>
    <tr> … </tr>
  </thead>
  <tbody style="
      --c-nth-odd_background--: var(--gray-2);
      --c-nth-even_background--: var(--gray-0);
      ">
    <tr> … </tr>
    <tr> … </tr>
    …
  </tbody>
</table>
```

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

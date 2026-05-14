[日本語](README.md) | [English](README.en.md)

---

# ExStyle CSS (@exstyle/css)

ExStyle CSS は、link要素 で読み込む、厳選・限定された ExStyleプロパティ集 です。

## 特徴

- **導入が簡単**: 複雑なビルドプロセスを介さず、スタイルを読み込ませるだけという手軽さです。
- **無駄がない構成**: ExStyle JS や ExStyle PHP で生成される CSSコード に比べ、構成に無駄がありません。
- **必要最小限**: 本当に必要なものだけを選択して使うことができます。

## 各種ファイルの説明

- **exstyle.css**
  ```
  &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle.min.css)&quot; /&gt;
  ```
  以下の各種 ExStyle CSS を1つにまとめたものです。
  - **exstyle-box-margin.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-box-margin.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-box-margin.min.css)&quot; /&gt;
    ```
    ボックス外側の余白が設定できるようになります。
    - `--(d-of-dd-dt-td-th_|c_)?margin(-block(-start|-end)?|-inline(-start|-end)?)?--`
  - **exstyle-box-padding.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-box-padding.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-box-padding.min.css)&quot; /&gt;
    ```
    ボックス内側の余白が設定できるようになります。
    - `--(d-of-dd-dt-td-th_|c_)?padding(-block(-start|-end)?|-inline(-start|-end)?)?--`
  - **exstyle-color.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-color.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-color.min.css)&quot; /&gt;
    ```
    色を設定する各種プロパティが使用できるようになります。
    - `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?background--`
    - `--background-attachment--: fixed;`
    - `--background-color--`
    - `--(d-of-dd-dt-td-th_|c_)?border(-block(-start|-end)?|-inline(-start|-end)?)?(-style|-width|-color)?--`
    - `--(d-of-dd-dt-td-th_|c_)?border-radius--`
    - `--(d-of-dd-dt-td-th_|c_)?box-shadow--`
    - `--(d-of-dd-dt-td-th_|d-of-dt-th_|d-of-dd-td_|c_|c-nth-even_|c-nth-odd_)?color--`
  - **exstyle-layout.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-layout.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-layout.min.css)&quot; /&gt;
    ```
    レイアウトに関する各種プロパティが使用できるようになります。
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
  - **exstyle-lists.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-lists.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-lists.min.css)&quot; /&gt;
    ```
    リストに関する各種プロパティが使用できるようになります。
    - `--list-style--`
    - `--list-style-type--`
    - `--list-style-image--`
    - `--list-style-position--`
  - **exstyle-sizing.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-sizing.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-sizing.min.css)&quot; /&gt;
    ```
    要素のサイズに関する各種プロパティが使用できるようになります。
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
  - **exstyle-table.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-table.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-table.min.css)&quot; /&gt;
    ```
    テーブルに関する各種プロパティが使用できるようになります。
    - `--border-collapse--`
    - `--border-spacing--`
    - `--caption-side--`
    - `--empty-cells--`
    - `--table-layout--`
  - **exstyle-text.css**
    ```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-text.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-text.min.css)&quot; /&gt;
    ```
    文字の装飾に関する各種プロパティが使用できるようになります。
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
- **exstyle-effects.css**
  ```
  &lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-effects.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-effects.min.css)&quot; /&gt;
  ```
  ユーザー操作擬似クラスとトランジションによるエフェクトが使用できるようになります。
  - `--transition--`
  - `--(hover_|active_|focus-visible_)background--`
  - `--(hover_|active_|focus-visible_)border-color--`
  - `--(hover_|active_|focus-visible_)box-shadow--`
  - `--(hover_|active_|focus-visible_)color--`
  - `--(hover_|active_|focus-visible_)filter--`
  - `--(hover_|active_|focus-visible_)transform--`
  - `--(hover_|active_|focus-visible_)z-index--`

## 使用例

ここでは、ExStyleプロパティ の値に [Open Props](https://open-props.style/) を使用しています。

```HTML
&lt;!-- 1つにまとめられた ExStyle CSS を読み込む場合 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle.min.css)&quot; /&gt;

&lt;!-- 必要なファイルだけ選んで読み込む場合 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-box-padding.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-box-padding.min.css)&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-color.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-color.min.css)&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-sizing.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-sizing.min.css)&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;[https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-table.min.css](https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle-table.min.css)&quot; /&gt;

&lt;link rel=&quot;stylesheet&quot; href=&quot;[https://unpkg.com/open-props](https://unpkg.com/open-props)&quot; /&gt;
…
&lt;table style=&quot;
    --border--: solid var(--border-size-1) var(--gray-6);
    --border-collapse--: collapse;
    --inline-size--: 100%;
    --table-layout--: fixed;
    --d-of-dd-dt-td-th_border--: var(--border--);
    --d-of-dd-dt-td-th_padding-block--: var(--size-2);
    --d-of-dd-dt-td-th_padding-inline--: var(--size-3);
    --x_background--: var(--gray-1);
    &quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;…&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody style=&quot;
      --c-nth-odd_background--: var(--gray-2);
      --c-nth-even_background--: var(--gray-0);
      &quot;&gt;
    &lt;tr&gt;…&lt;/tr&gt;
    &lt;tr&gt;…&lt;/tr&gt;
    …
  &lt;/tbody&gt;
&lt;/table&gt;
```

---

## License

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

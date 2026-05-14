[日本語](README.md) | [English](README.en.md)

---

# ExStyle (@exstyle)

ExStyle は、CSS のカスタムプロパティと属性セレクタを使用して、HTML の style属性 を限界突破させる、スタイリング・インフラを確立するためのメタ・フレームワークです。

「HTML は文書構造、CSS は体裁」という古くからある理想論を「HTML は設計書」という現実論に昇華させ、創造性と合理性を両立させたウェブサイトを構築します。

## 概要

CSSプロパティ の前後に `--` を付け、`--CSSプロパティ--` のようにカスタムプロパティ化したものを ExStyleプロパティ と呼称します。
この ExStyleプロパティ を style属性 に設定したとき、

```HTML
&lt;p style=&quot;--color--: var(--red);&quot;&gt; &hellip; &lt;/p&gt;
```

その CSSプロパティ に値が適用されるスタイリング・インフラを確立します。


```CSS
[style*=&quot;--color--:&quot;] { color: var(--color--); }
```

style属性 は通常、設定した要素に対するスタイリングしかできませんが、カスタムプロパティの継承と特殊なプレフィックスを組み合わせることで、

```HTML
&lt;ul style=&quot;--cq-i-s_hover_c-first-child_active_after_content--: 'Hello, World!';&quot; &hellip; &lt;/ul&gt;
```

子孫要素と擬似要素へのスタイリングや、メディアクエリ、コンテナクエリ、擬似クラスによる条件分岐を可能にします。

```CSS
@container (inline-size &gt; 480px) and (inline-size &gt; 30rem) {
  [style*=&quot;--cq-i-s_hover_c-first-child_active_after_content--:&quot;]:where(:hover) > *:where(:first-child):where(:active)::after { content: var(--cq-i-s_hover_c-first-child_active_after_content--); }
}
```

これが限界突破した style属性 (Extended Style attribute)、ExStyle です。

## 特徴

- **Web標準 の遵守**: class属性 には論理的な値、style属性 には物理的な値を設定するという、それぞれの属性の本来あるべき状態を実現します。
- **HTMLコード への集約**: ユーティリティファーストのような使い方も可能で、素早くウェブページを作成することができます。
- **コードを最少化**: `.what-do` のような単一の役割しかない class属性値 が不要となり、`--what--` と `var(--do)` に分けられるため、CSSコード を削減できます。
- **!important いらず**: ExStyle の CSSコード は基本的に属性セレクタ1つ分の詳細度しかないため、!important を使うことなく簡単に上書きや無効化ができます。
- **高い汎用性**: ExStyleプロパティ は値を自由に設定できるため、特定のデザイントークンを押し付けません。
- **少ない学習コスト**: CSSプロパティ の前後に `--` とプレフィックスを付けるだけなので、CSS初心者 にも優しいです。
- **AIフレンドリー**: `--what--` と `var(--do)` が明確なので、AI にとっても学習コストが少なく、バイブコーディングにも最適です。
- **UIフレンドリー**: UI に入力された値を ExStyleプロパティ に直接設定できるので、WordPress をはじめとする CMS や、ノーコードアプリ・ローコードアプリとも相性が良いです。

## パッケージ

ExStyleプロパティ を機能させるためのパッケージは複数あります。プロジェクトに応じて最適なものを使用してください。

| パッケージ | 名称 | 動作環境 | メリット | デメリット | 説明 |
| --- | --- | --- | --- | --- | --- |
| `@exstyle/css` | ExStyle CSS | ブラウザ | 導入が簡単 | 自由度が低い, 未使用コードを含む | ExStyleプロパティ を厳選・限定した、スクリプトなし・ビルドなしの CSSファイル群。 |
| `@exstyle/js` | ExStyle JS | ブラウザ | 導入が簡単, 自由度が高い | クライアントサイドに依存 | ExStyleプロパティ から動的に CSSコード を生成し、style要素 で適用するスクリプト。 |
| `@exstyle/php` | ExStyle PHP | サーバ | 自由度が高い | PHP実行環境が必要 | WordPress等 の PHP実行環境 で ExStyleプロパティ から CSSコード を生成するヘルパークラス。 |
| `@exstyle/postcss` | ExStyle PostCSS | 開発環境 | 自由度が高い | ビルド環境が必要 | ビルドプロセスに組み込み、ExStyleプロパティ から CSSコード を生成し、CSSファイル への出力を行うツール。 |
| `@exstyle/ai` | ExStyle AI | ブラウザ, 開発環境 | - | < | AI に ExStyle を理解してもらうための仕様書。 |

## ExStyleプロパティ について

ExStyle は ExStyleプロパティ の命名規則と、名称に則したスタイリング・インフラを確立します。ExStyleプロパティ の命名規則を正規表現で表すと次のようになります。

```
--(QUERY_)?(PSEUDO-CLASS_)?(COMBINATOR(-TREE-STRUCTURE)?_)?(PSEUDO-CLASS_)?(PSEUDO-ELEMENT_)?PROPERTY--
```

使用できるクエリ (QUERY), 結合子 (COMBINATOR), ツリー構造 (TREE-STRUCTURE), 擬似クラス (PSEUDO-CLASS), 擬似要素 (PSEUDO-ELEMENT), CSSプロパティ (PROPERTY) は次のとおりです。

| 分類 | 名称 | CSSコード |
| --- | --- | --- |
| QUERY | <abbr title="container query">cq</abbr>-<abbr title="inline-size">i</abbr>-<abbr title="small">s</abbr> | @container (inline-size &gt; 480px) and (inline-size &gt; 30rem) |
| ^ | <abbr title="container query">cq</abbr>-<abbr title="inline-size">i</abbr>-<abbr title="medium">m</abbr> | @container (inline-size &gt; 720px) and (inline-size &gt; 45rem) |
| ^ | <abbr title="container query">cq</abbr>-<abbr title="inline-size">i</abbr>-<abbr title="large">l</abbr> | @container (inline-size &gt; 960px) and (inline-size &gt; 60rem) |
| ^ | <abbr title="container query">cq</abbr>-<abbr title="inline-size">i</abbr>-<abbr title="x-large">xl</abbr> | @container (inline-size &gt; 1200px) and (inline-size &gt; 75rem) |
| ^ | <abbr title="media query">mq</abbr>-<abbr title="width">w</abbr>-<abbr title="small">s</abbr> | @media (width &gt; 480px) and (width &gt; 30rem) |
| ^ | <abbr title="media query">mq</abbr>-<abbr title="width">w</abbr>-<abbr title="medium">m</abbr> | @media (width &gt; 720px) and (width &gt; 45rem) |
| ^ | <abbr title="media query">mq</abbr>-<abbr title="width">w</abbr>-<abbr title="large">l</abbr> | @media (width &gt; 960px) and (width &gt; 60rem) |
| ^ | <abbr title="media query">mq</abbr>-<abbr title="width">w</abbr>-<abbr title="x-large">xl</abbr> | @media (width &gt; 1200px) and (width &gt; 75rem) |
| COMBINATOR | <abbr title="descendant">d</abbr> | &amp; * |
| ^ | <abbr title="child">c</abbr> | &amp; &gt; * |
| ^ | <abbr title="child of 2nd level">c2</abbr> | &amp; &gt; * &gt; * |
| ^ | <abbr title="child of 3rd level">c3</abbr> | &amp; &gt; * &gt; * &gt; * |
| TREE-STRUCTURE | empty | :empty |
| ^ | first-child | :first-child |
| ^ | last-child | :last-child |
| ^ | only-child | :only-child |
| ^ | nth-child-m2n-p-4-of-p | :nth-child(-2n + 4 of p) |
| ^ | nth-child-m2n-p-4-of-td-th | :nth-child(-2n + 4 of :is(td, th)) |
| ^ | nth-child-m2n-p-4-of-attr-style | :nth-child(-2n + 4 of [style]) |
| ^ | nth-child-m2n-p-4-of-pseudo-focus | :nth-child(-2n + 4 of :focus) |
| ^ | nth-last-child-m2n-p-4-of-p | :nth-last-child(-2n + 4 of p) |
| ^ | nth-last-child-m2n-p-4-of-td-th | :nth-last-child(-2n + 4 of :is(td, th)) |
| ^ | nth-last-child-m2n-p-4-of-attr-style | :nth-last-child(-2n + 4 of [style]) |
| ^ | nth-last-child-m2n-p-4-of-pseudo-focus | :nth-last-child(-2n + 4 of :focus) |
| ^ | first-of-type | :first-of-type |
| ^ | last-of-type | :last-of-type |
| ^ | only-of-type | :only-of-type |
| ^ | nth-of-type-m2n-p-4 | :nth-of-type(-2n + 4) |
| ^ | nth-last-of-type-m2n-p-4 | :nth-last-of-type(-2n + 4) |
| ^ | of-p | :nth-child(n of p) |
| ^ | of-td-th | :nth-child(n of :is(td, th)) |
| ^ | of-attr-style | :nth-child(n of [style]) |
| ^ | of-pseudo-focus | :nth-child(n of :focus) |
| PSEUDO-CLASS | any-link | :any-link |
| ^ | link | :link |
| ^ | visited | :visited |
| ^ | target | :target |
| ^ | hover | :hover |
| ^ | active | :active |
| ^ | focus | :focus |
| ^ | focus-visible | :focus-visible |
| ^ | focus-within | :focus-within |
| ^ | open | :open |
| ^ | popover-open | :popover-open |
| ^ | modal | :modal |
| ^ | fullscreen | :fullscreen |
| ^ | picture-in-picture | :picture-in-picture |
| ^ | enabled | :enabled |
| ^ | disabled | :disabled |
| ^ | read-only | :read-only |
| ^ | read-write | :read-write |
| ^ | placeholder-shown | :placeholder-shown |
| ^ | autofill | :autofill |
| ^ | default | :default |
| ^ | checked | :checked |
| ^ | unchecked | :unchecked |
| ^ | indeterminate | :indeterminate |
| ^ | valid | :valid |
| ^ | invalid | :invalid |
| ^ | in-range | :in-range |
| ^ | out-of-range | :out-of-range |
| ^ | required | :required |
| ^ | optional | :optional |
| ^ | user-valid | :user-valid |
| ^ | user-invalid | :user-invalid |
| ^ | ANY-PSEUDO-CLASS-<abbr title="next-sibling">n</abbr> | :is(:ANY-PSEUDO-CLASS + *) |
| ^ | ANY-PSEUDO-CLASS-<abbr title="subsequent-sibling">s</abbr> | :is(:ANY-PSEUDO-CLASS ~ *) |
| ^ | <abbr title="next-sibling">n</abbr>-ANY-PSEUDO-CLASS | :has(+ :ANY-PSEUDO-CLASS) |
| ^ | <abbr title="subsequent-sibling">s</abbr>-ANY-PSEUDO-CLASS | :has(~ :ANY-PSEUDO-CLASS) |
| ^ | <abbr title="descendant">d</abbr>-ANY-PSEUDO-CLASS | :has(:ANY-PSEUDO-CLASS) |
| ^ | <abbr title="child">c</abbr>-ANY-PSEUDO-CLASS | :has(&gt; :ANY-PSEUDO-CLASS) |
| ^ | <abbr title="child of 2nd level">c2</abbr>-ANY-PSEUDO-CLASS | :has(&gt; * &gt; :ANY-PSEUDO-CLASS) |
| ^ | <abbr title="child of 3rd level">c3</abbr>-ANY-PSEUDO-CLASS | :has(&gt; * &gt; * &gt; :ANY-PSEUDO-CLASS) |
| ^ | not-ANY-PSEUDO-CLASS | :not(:ANY-PSEUDO-CLASS) |
| ^ | not-ANY-PSEUDO-CLASS-<abbr title="next-sibling">n</abbr> | :not(:ANY-PSEUDO-CLASS + *) |
| ^ | not-ANY-PSEUDO-CLASS-<abbr title="subsequent-sibling">s</abbr> | :not(:ANY-PSEUDO-CLASS ~ *) |
| ^ | not-<abbr title="next-sibling">n</abbr>-ANY-PSEUDO-CLASS | :not(:has(+ :ANY-PSEUDO-CLASS)) |
| ^ | not-<abbr title="subsequent-sibling">s</abbr>-ANY-PSEUDO-CLASS | :not(:has(~ :ANY-PSEUDO-CLASS)) |
| ^ | not-<abbr title="descendant">d</abbr>-ANY-PSEUDO-CLASS | :not(:has(:ANY-PSEUDO-CLASS)) |
| ^ | not-<abbr title="child">c</abbr>-ANY-PSEUDO-CLASS | :not(:has(&gt; :ANY-PSEUDO-CLASS)) |
| ^ | not-<abbr title="child of 2nd level">c2</abbr>-ANY-PSEUDO-CLASS | :not(:has(&gt; * &gt; :ANY-PSEUDO-CLASS)) |
| ^ | not-<abbr title="child of 3rd level">c3</abbr>-ANY-PSEUDO-CLASS | :not(:has(&gt; * &gt; * &gt; :ANY-PSEUDO-CLASS)) |
| PSEUDO-ELEMENT | backdrop | ::backdrop |
| ^ | first-line | ::first-line |
| ^ | first-letter | ::first-letter |
| ^ | selection | ::selection |
| ^ | search-text | ::search-text |
| ^ | target-text | ::target-text |
| ^ | spelling-error | ::spelling-error |
| ^ | grammar-error | ::grammar-error |
| ^ | before | ::before |
| ^ | after | ::after |
| ^ | file-selector-button | ::file-selector-button |
| ^ | details-content | ::details-content |
| PROPERTY | NORMAL-PROPERTY | &amp; { NORMAL-PROPERTY: var(--(PREFIX_)?NORMAL-PROPERTY--); } |
| ^ | aspect-ratio | & { aspect-ratio: var(--(PREFIX_)?aspect-ratio--); } <br> :not(_):not(_):where(&:is(iframe)) { block-size: auto; } |
| ^ | background | & { background: var(--(PREFIX_)?background--); background-attachment: scroll; } |
| ^ | background-attachment | & { clip-path: inset(0); } <br> &::before { background: inherit; content: &quot;&quot;; position: fixed; inset: 0; z-index: -1; } <br> &::after { content: none; } |
| ^ | columns | & { columns: var(--(PREFIX_)?columns--); } <br> :not(_):not(_):where(&) { & &gt; * { break-inside: avoid-column; contain: layout; } <br> & &gt; :first-child { margin-block-start: 0; } <br> & &gt; :last-child { margin-block-end: 0; } <br> &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | column-count | & { column-count: var(--(PREFIX_)?column-count--); } <br> :not(_):not(_):where(&) { & &gt; * { break-inside: avoid-column; contain: layout; } <br> & &gt; :first-child { margin-block-start: 0; } <br> & &gt; :last-child { margin-block-end: 0; } <br> &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | column-width | & { column-width: var(--(PREFIX_)?column-width--); } <br> :not(_):not(_):where(&) { & &gt; * { break-inside: avoid-column; contain: layout; } <br> & &gt; :first-child { margin-block-start: 0; } <br> & &gt; :last-child { margin-block-end: 0; } <br> &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | flex-flow | & { flex-flow: var(--(PREFIX_)?flex-flow--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | flex-direction | & { flex-direction: var(--(PREFIX_)?flex-direction--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | flex-wrap | & { flex-wrap: var(--(PREFIX_)?flex-wrap--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | font-size | & { font-size: var(--(PREFIX_)?font-size--); } <br> :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | font-style | & { font-style: var(--(PREFIX_)?font-style--); } <br> :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | font-weight | & { font-weight: var(--(PREFIX_)?font-weight--); } <br> :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | grid | & { grid: var(--(PREFIX_)?grid--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | grid-template | & { grid-template: var(--(PREFIX_)?grid-template--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | grid-template-rows | & { grid-template-rows: var(--(PREFIX_)?grid-template-rows--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | grid-template-columns | & { grid-template-columns: var(--(PREFIX_)?grid-template-columns--); } <br> :not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } <br> &:where(ul, menu) { list-style-type: &quot;&quot;; } <br> &:where(dl) &gt; :where(div) &gt; *, & &gt; *, &:where(li, dt, dd) { margin:0; } <br> } |
| ^ | text-decoration | & { text-decoration: var(--(PREFIX_)?text-decoration--); } <br> :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | text-emphasis | & { text-emphasis: var(--(PREFIX_)?text-emphasis--); } <br> :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | text-shadow | & { text-shadow: var(--(PREFIX_)?text-shadow--); } <br> :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | text-stroke | & { -webkit-text-stroke: var(--(PREFIX_)?text-stroke--); text-stroke: var(--(PREFIX_)?text-stroke--); } <br> :not(_):not(_):where(&) { paint-order: stroke; background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |
| ^ | x-text-marker | & { text-decoration: underline 50% var(--(PREFIX_)?x-text-marker--); } <br> :not(_):not(_):where(&) { text-decoration-skip-ink: none; text-underline-offset: -50%; text-underline-position: under; background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; } |

ExStyle CSS で使用可能な CSSプロパティ とプレフィックスこそ限定的ですが、ExStyle JS, ExStyle PHP, ExStyle PostCSS は、すべての CSSプロパティ を様々なプレフィックスと共に使用できます。

## デザイントークンについて

ExStyle はデザイントークンを持たないので、カスタムプロパティで定義しておき、ExStyleプロパティ で使用できるようにしておくことを推奨します。
デザイントークンは、[Open Props](https://open-props.style/) などでも代用できますが、AI の学習効率・生成効率を優先するなら、基準値とその相対値で定義するのがベストです。

```CSS
:root {
  /* アルファ値。m (middle) を基準に xl (extra low) から xh (extra high) まで。 */
  --alpha_xl: 12.5%; /* calc(100% * 1 / 8) */
  --alpha_l:  25%;   /* calc(100% * 1 / 4) */
  --alpha_m:  50%;   /* calc(100% * 1 / 2) */
  --alpha_h:  75%;   /* calc(100% * 3 / 4) */
  --alpha_xh: 87.5%; /* calc(100% * 7 / 8) */

  /* 1文字の大きさ。m (medium) を基準に xxs (double extra small) から xxxl (triple extra large) まで。 */
  --em_xxs:  0.666666em; /* calc(1em * 6 / 9) */
  --em_xs:   0.75em;     /* calc(1em * 6 / 8) */
  --em_s:    0.857142em; /* calc(1em * 6 / 7) */
  --em_m:    1em;        /* calc(1em * 6 / 6) */
  --em_l:    1.2em;      /* calc(1em * 6 / 5) */
  --em_xl:   1.5em;      /* calc(1em * 6 / 4) */
  --em_xxl:  2em;        /* calc(1em * 6 / 3) */
  --em_xxxl: 3em;        /* calc(1em * 6 / 2) */

  /* 高度毎の影。m (middle) を基準に xl (extra low) から xh (extra high) まで。 */
  --eval_xl: 0 1px 4px -1px;    /* 0 calc(4px * 1 / 4) calc(16px * 1 / 4) calc(-4px * 1 / 4) */
  --eval_l:  0 2px 8px -2px;    /* 0 calc(4px * 1 / 2) calc(16px * 1 / 2) calc(-4px * 1 / 2) */
  --eval_m:  0 4px 16px -4px;   /* 0 calc(4px * 1)     calc(16px * 1)     calc(-4px * 1) */
  --eval_h:  0 8px 32px -8px;   /* 0 calc(4px * 2)     calc(16px * 2)     calc(-4px * 2) */
  --eval_xh: 0 16px 64px -16px; /* 0 calc(4px * 4)     calc(16px * 4)     calc(-4px * 4) */

  /* 線の太さ。m (medium) を基準に xf (extra fine) から xb (extra broad) まで。 */
  --line_xf: 1px;  /* calc(4px * 1 / 4) */
  --line_f:  2px;  /* calc(4px * 1 / 2) */
  --line_m:  4px;  /* calc(4px * 1) */
  --line_b:  8px;  /* calc(4px * 2) */
  --line_xb: 16px; /* calc(4px * 4) */

  /* 角丸の半径。m (medium) を基準に xs (extra small) から xl (extra large) まで。 */
  --radius_xs: 2px;  /* calc(8px * 1 / 4) */
  --radius_s:  4px;  /* calc(8px * 1 / 2) */
  --radius_m:  8px;  /* calc(8px * 1) */
  --radius_l:  16px; /* calc(8px * 2) */
  --radius_xl: 32px; /* calc(8px * 4) */

  /* 余白の量。m (medium) を基準に xxs (double extra small) から xxl (double extra large) まで。 */
  --sp_xxs: 0.125rem; /* calc(1rem * 1 / 8) */
  --sp_xs:  0.25rem;  /* calc(1rem * 1 / 4) */
  --sp_s:   0.5rem;   /* calc(1rem * 1 / 2) */
  --sp_m:   1rem;     /* calc(1rem * 1) */
  --sp_l:   2rem;     /* calc(1rem * 2) */
  --sp_xl:  4rem;     /* calc(1rem * 4) */
  --sp_xxl: 8rem;     /* calc(1rem * 8) */

  /* 基本色 */
  --red:    #f75;
  --yellow: #d91;
  --green:  #5b3;
  --blue:   #59f;
  --gray:   #999;
  --white:  #fff;
  --black:  #111;

  /* カラーモード */
  --light-dark: light-dark(var(--white), var(--black));
  --dark-light: light-dark(var(--black), var(--white));

  /* カラーモードに対応したコントラストに基づくカラーパレット */
  --lowest-red:    color-mix(in srgb, var(--light-dark), var(--red) var(--alpha_xl));
  --lowest-yellow: color-mix(in srgb, var(--light-dark), var(--yellow) var(--alpha_xl));
  --lowest-green:  color-mix(in srgb, var(--light-dark), var(--green) var(--alpha_xl));
  --lowest-blue:   color-mix(in srgb, var(--light-dark), var(--blue) var(--alpha_xl));
  --lowest-gray:   color-mix(in srgb, var(--light-dark), var(--gray) var(--alpha_xl));
  --lower-red:    color-mix(in srgb, var(--light-dark), var(--red) var(--alpha_l));
  --lower-yellow: color-mix(in srgb, var(--light-dark), var(--yellow) var(--alpha_l));
  --lower-green:  color-mix(in srgb, var(--light-dark), var(--green) var(--alpha_l));
  --lower-blue:   color-mix(in srgb, var(--light-dark), var(--blue) var(--alpha_l));
  --lower-gray:   color-mix(in srgb, var(--light-dark), var(--gray) var(--alpha_l));
  --low-red:    color-mix(in srgb, var(--light-dark), var(--red) var(--alpha_m));
  --low-yellow: color-mix(in srgb, var(--light-dark), var(--yellow) var(--alpha_m));
  --low-green:  color-mix(in srgb, var(--light-dark), var(--green) var(--alpha_m));
  --low-blue:   color-mix(in srgb, var(--light-dark), var(--blue) var(--alpha_m));
  --low-gray:   color-mix(in srgb, var(--light-dark), var(--gray) var(--alpha_m));
  --high-red:    color-mix(in srgb, var(--dark-light), var(--red) var(--alpha_m));
  --high-yellow: color-mix(in srgb, var(--dark-light), var(--yellow) var(--alpha_m));
  --high-green:  color-mix(in srgb, var(--dark-light), var(--green) var(--alpha_m));
  --high-blue:   color-mix(in srgb, var(--dark-light), var(--blue) var(--alpha_m));
  --high-gray:   color-mix(in srgb, var(--dark-light), var(--gray) var(--alpha_m));
  --higher-red:    color-mix(in srgb, var(--dark-light), var(--red) var(--alpha_l));
  --higher-yellow: color-mix(in srgb, var(--dark-light), var(--yellow) var(--alpha_l));
  --higher-green:  color-mix(in srgb, var(--dark-light), var(--green) var(--alpha_l));
  --higher-blue:   color-mix(in srgb, var(--dark-light), var(--blue) var(--alpha_l));
  --higher-gray:   color-mix(in srgb, var(--dark-light), var(--gray) var(--alpha_l));
  --highest-red:    color-mix(in srgb, var(--dark-light), var(--red) var(--alpha_xl));
  --highest-yellow: color-mix(in srgb, var(--dark-light), var(--yellow) var(--alpha_xl));
  --highest-green:  color-mix(in srgb, var(--dark-light), var(--green) var(--alpha_xl));
  --highest-blue:   color-mix(in srgb, var(--dark-light), var(--blue) var(--alpha_xl));
  --highest-gray:   color-mix(in srgb, var(--dark-light), var(--gray) var(--alpha_xl));
}
```

## ExStyleプロパティ の使用例

### 表の装飾

```HTML
&lt;table style=&quot;
    --border--: solid var(--line_xf) var(--gray);
    --border-collapse--: collapse;
    --inline-size--: 100%;
    --table-layout--: fixed;
    --c2-of-td-th_border--: var(--border--);
    --c2-of-td-th_padding-block--: var(--sp_s);
    --c2-of-td-th_padding-inline--: var(--sp_m);
    &quot;&gt;
  &lt;tbody style=&quot;
      --c-nth-odd_background--: var(--lowest-gray);
      &quot;&gt;
    &lt;tr&gt;…&lt;/tr&gt;
    …
  &lt;/tbody&gt;
&lt;/table&gt;
```

### コンポーネントの拡張 その1

```HTML
&lt;style&gt;
.button {
  border-style: solid;
  inline-size: auto; /* --inline-size-- が設定されていても無視 */
  …
  /* ExStyleプロパティ が設定されなかった場合のデフォルト設定 */
  &:not([style*=&quot;--background--:&quot;]) {
    background: none;
  }
  &:not([style*=&quot;--border-width--:&quot;]) {
    border-width: var(--line_xf);
  }
  &:not([style*=&quot;--border-color--:&quot;]) {
    border-color: transparent;
  }
  &:not([style*=&quot;--color--:&quot;]) {
    color: currentcolor;
  }
}
&lt;/style&gt;
…
&lt;p&gt;&lt;button class=&quot;button&quot;&gt;枠線のボタン&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--background--: var(--red); --color--: var(--white);&quot;&gt;赤いボタン&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--border-radius--: var(--radius_xl);&quot;&gt;角丸のボタン&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--inline-size--: 50%;&quot;&gt;横長のボタン&lt;/button&gt;&lt;/p&gt;&lt;!-- inline-size: auto; があるため横長にはならない --&gt;
```

### コンポーネントの拡張 その2

```HTML
&lt;style&gt;
.button {
  /* ExStyleプロパティ で上書きされなかった場合のデフォルト設定 */
  --background--: none;
  --border-width--: var(--line_xf);
  --border-color--: transparent;
  --color--: currentcolor;
  
  background: var(--background--);
  border: solid var(--border-width--) var(--border-color--);
  color: var(--color--);
  inline-size: auto; /* --inline-size-- が設定されていても無視 */
  …
}
&lt;/style&gt;
…
&lt;p&gt;&lt;button class=&quot;button&quot;&gt;枠線のボタン&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--background--: var(--red); --color--: var(--white);&quot;&gt;赤いボタン&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--border-radius--: var(--radius_xl);&quot;&gt;角丸のボタン&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--inline-size--: 50%;&quot;&gt;横長のボタン&lt;/button&gt;&lt;/p&gt;&lt;!-- inline-size: auto; があるため横長にはならない --&gt;
```

### 段組みレイアウト

```HTML
&lt;ul style=&quot;--columns--: 4 16em; --column-rule--: dotted var(--line_xf); --column-gap--: var(--sp_l); --c_margin-block-end--: var(--sp_m);&quot;&gt;
  &lt;li&gt;…&lt;/li&gt;
  &lt;li&gt;…&lt;/li&gt;
  &lt;li&gt;…&lt;/li&gt;
  &lt;li&gt;…&lt;/li&gt;
&lt;/ul&gt;
```

### フレックスレイアウト

```HTML
&lt;div style=&quot;--container-type--: inline-size; --flex-flow--: row wrap; --gap--: var(--sp_m); --c_flex--: 1 1 100%;&quot;&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
&lt;/div&gt;
```

### グリッドレイアウト

```HTML
&lt;div style=&quot;--container-type--: inline-size; --grid--: auto-flow / repeat(12, 1fr); --gap--: var(--sp_m); --c_grid-area--: auto / span 12;&quot;&gt;
  &lt;div style=&quot;--cq-i-m_grid-area--: auto / span 3;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_grid-area--: auto / span 3;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_grid-area--: auto / span 3;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_grid-area--: auto / span 3;&quot;&gt;…&lt;/div&gt;
&lt;/div&gt;
```

---

## License

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

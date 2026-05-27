[日本語](README.md) | [English](README.en.md)

---

# XSA (@nov-xsa)

XSA は、CSS の属性セレクタとカスタムプロパティを使用して、HTML の style属性 を限界突破させる、スタイリング・インフラを確立するためのメタ・フレームワークです。

## 概要

```HTML
<div style="--color--: var(--red);"> … </div>
```

CSSプロパティ の前後に `--` を付けてカスタムプロパティ化した XSAプロパティ を style属性 に設定したとき、

```CSS
[style*="--color--:"] {
  color: var(--color--);
}
```

その CSSプロパティ に値が適用されるスタイリング・インフラを確立します。

```HTML
<div style="--cqi-s_c3-first_hover_color--: var(--red);" … </div>
```

カスタムプロパティの継承と CSSセレクタ をエンコードした XSAプレフィックス によって、

```CSS
@container (inline-size > 480px) {
  [style*="--cqi-s_c3-first_hover_color--:"] > * > * > *:where(:first-child):where(:hover) {
    color: var(--cqi-s_c3-first_hover_color--);
  }
}
```

子孫要素と擬似要素へのスタイリングや、メディアクエリ、コンテナクエリ、擬似クラスによる条件分岐を可能にします。

これが限界突破した style属性 (EXtended Style Attribute)、XSA です。

## パッケージ

XSAプロパティ を機能させるためのパッケージは複数あります。プロジェクトに応じて最適なものが使用できます。

| パッケージ | 名称 | 動作環境 | メリット | デメリット | 説明 |
| --- | --- | --- | --- | --- | --- |
| `@nov-xsa/css` | XSA CSS | ブラウザ | 導入が簡単 | 自由度が低い | 使用する XSAプロパティ を手動で選択するスクリプトなし・ビルドなしの CSSファイル群 です。 |
| `@nov-xsa/js` | XSA JS | ブラウザ | 導入が簡単, 自由度が高い | クライアントサイドに依存 | XSAプロパティ から CSSコード の生成と style要素 への出力を行うスクリプトです。 |
| `@nov-xsa/php` | XSA PHP | サーバ | 自由度が高い | PHP実行環境が必要 | PHP実行環境 で XSAプロパティ から CSSコード を生成するヘルパークラスです。 |
| `@nov-xsa/postcss` | XSA PostCSS | 開発環境 | 自由度が高い | ビルド環境が必要 | プロジェクト内の XSAプロパティ から CSSコード の生成と CSSファイル への出力を行うツールです。 |

## XSAプロパティ の構文リファレンス

XSAプロパティ の命名規則を正規表現で表すと次のようになります。

```RegExp
--(QUERY_)?(PSEUDO-CLASS_)?(COMBINATOR(-SIBLING)?_)?(PSEUDO-CLASS_)?(PSEUDO-ELEMENT_)?PROPERTY--
```

そして、QUERY (クエリ), COMBINATOR (結合子), SIBLING (兄弟擬似クラス), PSEUDO-CLASS (擬似クラス), PSEUDO-ELEMENT (擬似要素), PROPERTY (CSSプロパティ) は以下の文字列に対応しています。

| 分類 | 名称 | CSSコード |
| --- | --- | --- |
| QUERY | cqi-s | `@container (inline-size > 480px) and (inline-size > 30rem)` |
| " | cqi-m | `@container (inline-size > 720px) and (inline-size > 45rem)` |
| " | cqi-l | `@container (inline-size > 960px) and (inline-size > 60rem)` |
| " | cqi-xl | `@container (inline-size > 1200px) and (inline-size > 75rem)` |
| " | vw-s | `@media (width > 480px) and (width > 30rem)` |
| " | vw-m | `@media (width > 720px) and (width > 45rem)` |
| " | vw-l | `@media (width > 960px) and (width > 60rem)` |
| " | vw-xl | `@media (width > 1200px) and (width > 75rem)` |
| COMBINATOR | d | `& *` |
| " | c | `& > *` |
| " | c2 | `& > * > *` |
| " | c3 | `& > * > * > *` |
| SIBLING | first | `:where(:first-child)` |
| " | last | `:where(:last-child)` |
| " | only | `:where(:only-child)` |
| " | nth-N-of-S | `:where(:nth-child(N of S))` |
| " | nth-last-N-of-S | `:where(:nth-last-child(N of S))` |
| " | of-S | `:where(:nth-child(n of S))` |
| PSEUDO-CLASS | open | `:where(:open)` |
| " | popover-open | `:where(:popover-open)` |
| " | modal | `:where(:modal)` |
| " | fullscreen | `:where(:fullscreen)` |
| " | picture-in-picture | `:where(:picture-in-picture)` |
| " | enabled | `:where(:enabled)` |
| " | disabled | `:where(:disabled)` |
| " | read-only | `:where(:read-only)` |
| " | read-write | `:where(:read-write)` |
| " | placeholder-shown | `:where(:placeholder-shown)` |
| " | autofill | `:where(:autofill)` |
| " | default | `:where(:default)` |
| " | checked | `:where(:checked)` |
| " | indeterminate | `:where(:indeterminate)` |
| " | valid | `:where(:valid)` |
| " | invalid | `:where(:invalid)` |
| " | in-range | `:where(:in-range)` |
| " | out-of-range | `:where(:out-of-range)` |
| " | required | `:where(:required)` |
| " | optional | `:where(:optional)` |
| " | user-valid | `:where(:user-valid)` |
| " | user-invalid | `:where(:user-invalid)` |
| " | any-link | `:where(:any-link)` |
| " | link | `:where(:link)` |
| " | visited | `:where(:visited)` |
| " | target | `:where(:target)` |
| " | scope | `:where(:scope)` |
| " | playing | `:where(:playing)` |
| " | paused | `:where(:paused)` |
| " | seeking | `:where(:seeking)` |
| " | buffering | `:where(:buffering)` |
| " | stalled | `:where(:stalled)` |
| " | muted | `:where(:muted)` |
| " | volume-locked | `:where(:volume-locked)` |
| " | empty | `:where(:empty)` |
| " | hover | `:where(:hover)` |
| " | active | `:where(:active)` |
| " | focus | `:where(:focus)` |
| " | focus-visible | `:where(:focus-visible)` |
| " | focus-within | `:where(:focus-within)` |
| " | target-current | `:where(:target-current)` |
| " | PSEUDO-CLASS-n | `:where(:PSEUDO-CLASS + *)` |
| " | PSEUDO-CLASS-s | `:where(:PSEUDO-CLASS ~ *)` |
| " | n-PSEUDO-CLASS | `:where(:has(+ :PSEUDO-CLASS))` |
| " | s-PSEUDO-CLASS | `:where(:has(~ :PSEUDO-CLASS))` |
| " | d-PSEUDO-CLASS | `:where(:has(:PSEUDO-CLASS))` |
| " | c-PSEUDO-CLASS | `:where(:has(> :PSEUDO-CLASS))` |
| " | c2-PSEUDO-CLASS | `:where(:has(> * > :PSEUDO-CLASS))` |
| " | c3-PSEUDO-CLASS | `:where(:has(> * > * > :PSEUDO-CLASS))` |
| " | S-is-PSEUDO-CLASS-n | `:where(:nth-child(n of S):is(:PSEUDO-CLASS) + *)` |
| " | S-is-PSEUDO-CLASS-s | `:where(:nth-child(n of S):is(:PSEUDO-CLASS) ~ *)` |
| " | n-S-is-PSEUDO-CLASS | `:where(:has(+ :nth-child(n of S):is(:PSEUDO-CLASS)))` |
| " | s-S-is-PSEUDO-CLASS | `:where(:has(~ :nth-child(n of S):is(:PSEUDO-CLASS)))` |
| " | d-of-S-is-PSEUDO-CLASS | `:where(:has(:nth-child(n of S):is(:PSEUDO-CLASS)))` |
| " | c-of-S-is-PSEUDO-CLASS | `:where(:has(> :nth-child(n of S):is(:PSEUDO-CLASS)))` |
| " | c2-of-S-is-PSEUDO-CLASS | `:where(:has(> * > :nth-child(n of S):is(:PSEUDO-CLASS)))` |
| " | c3-of-S-is-PSEUDO-CLASS | `:where(:has(> * > * > :nth-child(n of S):is(:PSEUDO-CLASS)))` |
| " | nth-N-is-PSEUDO-CLASS-n | `:where(:nth-child(N):is(:PSEUDO-CLASS) + *)` |
| " | nth-N-is-PSEUDO-CLASS-s | `:where(:nth-child(N):is(:PSEUDO-CLASS) ~ *)` |
| " | n-nth-N-is-PSEUDO-CLASS | `:where(:has(+ :nth-child(N):is(:PSEUDO-CLASS)))` |
| " | s-nth-N-is-PSEUDO-CLASS | `:where(:has(~ :nth-child(N):is(:PSEUDO-CLASS)))` |
| " | d-nth-N-is-PSEUDO-CLASS | `:where(:has(:nth-child(N):is(:PSEUDO-CLASS)))` |
| " | c-nth-N-is-PSEUDO-CLASS | `:where(:has(> :nth-child(N):is(:PSEUDO-CLASS)))` |
| " | c2-nth-N-is-PSEUDO-CLASS | `:where(:has(> * > :nth-child(N):is(:PSEUDO-CLASS)))` |
| " | c3-nth-N-is-PSEUDO-CLASS | `:where(:has(> * > * > :nth-child(N):is(:PSEUDO-CLASS)))` |
| " | nth-N-of-S-is-PSEUDO-CLASS-n | `:where(:nth-child(N of S):is(:PSEUDO-CLASS) + *)` |
| " | nth-N-of-S-is-PSEUDO-CLASS-s | `:where(:nth-child(N of S):is(:PSEUDO-CLASS) ~ *)` |
| " | n-nth-N-of-S-is-PSEUDO-CLASS | `:where(:has(+ :nth-child(N of S):is(:PSEUDO-CLASS)))` |
| " | s-nth-N-of-S-is-PSEUDO-CLASS | `:where(:has(~ :nth-child(N of S):is(:PSEUDO-CLASS)))` |
| " | d-nth-N-of-S-is-PSEUDO-CLASS | `:where(:has(:nth-child(N of S):is(:PSEUDO-CLASS)))` |
| " | c-nth-N-of-S-is-PSEUDO-CLASS | `:where(:has(> :nth-child(N of S):is(:PSEUDO-CLASS)))` |
| " | c2-nth-N-of-S-is-PSEUDO-CLASS | `:where(:has(> * > :nth-child(N of S):is(:PSEUDO-CLASS)))` |
| " | c3-nth-N-of-S-is-PSEUDO-CLASS | `:where(:has(> * > * > :nth-child(N of S):is(:PSEUDO-CLASS)))` |
| " | nth-last-N-is-PSEUDO-CLASS-n | `:where(:nth-last-child(N):is(:PSEUDO-CLASS) + *)` |
| " | nth-last-N-is-PSEUDO-CLASS-s | `:where(:nth-last-child(N):is(:PSEUDO-CLASS) ~ *)` |
| " | n-nth-last-N-is-PSEUDO-CLASS | `:where(:has(+ :nth-last-child(N):is(:PSEUDO-CLASS)))` |
| " | s-nth-last-N-is-PSEUDO-CLASS | `:where(:has(~ :nth-last-child(N):is(:PSEUDO-CLASS)))` |
| " | d-nth-last-N-is-PSEUDO-CLASS | `:where(:has(:nth-last-child(N):is(:PSEUDO-CLASS)))` |
| " | c-nth-last-N-is-PSEUDO-CLASS | `:where(:has(> :nth-last-child(N):is(:PSEUDO-CLASS)))` |
| " | c2-nth-last-N-is-PSEUDO-CLASS | `:where(:has(> * > :nth-last-child(N):is(:PSEUDO-CLASS)))` |
| " | c3-nth-last-N-is-PSEUDO-CLASS | `:where(:has(> * > * > :nth-last-child(N):is(:PSEUDO-CLASS)))` |
| " | nth-last-N-of-S-is-PSEUDO-CLASS-n | `:where(:nth-last-child(N of S):is(:PSEUDO-CLASS) + *)` |
| " | nth-last-N-of-S-is-PSEUDO-CLASS-s | `:where(:nth-last-child(N of S):is(:PSEUDO-CLASS) ~ *)` |
| " | n-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:has(+ :nth-last-child(N of S):is(:PSEUDO-CLASS)))` |
| " | s-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:has(~ :nth-last-child(N of S):is(:PSEUDO-CLASS)))` |
| " | d-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:has(:nth-last-child(N of S):is(:PSEUDO-CLASS)))` |
| " | c-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:has(> :nth-last-child(N of S):is(:PSEUDO-CLASS)))` |
| " | c2-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:has(> * > :nth-last-child(N of S):is(:PSEUDO-CLASS)))` |
| " | c3-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:has(> * > * > :nth-last-child(N of S):is(:PSEUDO-CLASS)))` |
| " | not-PSEUDO-CLASS | `:where(:not(:PSEUDO-CLASS))` |
| " | not-PSEUDO-CLASS-n | `:where(:not(:PSEUDO-CLASS + *))` |
| " | not-PSEUDO-CLASS-s | `:where(:not(:PSEUDO-CLASS ~ *))` |
| " | not-n-PSEUDO-CLASS | `:where(:not(:has(+ :PSEUDO-CLASS)))` |
| " | not-s-PSEUDO-CLASS | `:where(:not(:has(~ :PSEUDO-CLASS)))` |
| " | not-d-PSEUDO-CLASS | `:where(:not(:has(:PSEUDO-CLASS)))` |
| " | not-c-PSEUDO-CLASS | `:where(:not(:has(> :PSEUDO-CLASS)))` |
| " | not-c2-PSEUDO-CLASS | `:where(:not(:has(> * > :PSEUDO-CLASS)))` |
| " | not-c3-PSEUDO-CLASS | `:where(:not(:has(> * > * > :PSEUDO-CLASS)))` |
| " | not-S-is-PSEUDO-CLASS-n | `:where(:not(:nth-child(n of S):is(:PSEUDO-CLASS) + *))` |
| " | not-S-is-PSEUDO-CLASS-s | `:where(:not(:nth-child(n of S):is(:PSEUDO-CLASS) ~ *))` |
| " | not-n-S-is-PSEUDO-CLASS | `:where(:not(:has(+ :nth-child(n of S):is(:PSEUDO-CLASS))))` |
| " | not-s-S-is-PSEUDO-CLASS | `:where(:not(:has(~ :nth-child(n of S):is(:PSEUDO-CLASS))))` |
| " | not-d-of-S-is-PSEUDO-CLASS | `:where(:not(:has(:nth-child(n of S):is(:PSEUDO-CLASS))))` |
| " | not-c-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> :nth-child(n of S):is(:PSEUDO-CLASS))))` |
| " | not-c2-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> * > :nth-child(n of S):is(:PSEUDO-CLASS))))` |
| " | not-c3-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> * > * > :nth-child(n of S):is(:PSEUDO-CLASS))))` |
| " | not-nth-N-is-PSEUDO-CLASS-n | `:where(:not(:nth-child(N):is(:PSEUDO-CLASS) + *))` |
| " | not-nth-N-is-PSEUDO-CLASS-s | `:where(:not(:nth-child(N):is(:PSEUDO-CLASS) ~ *))` |
| " | not-n-nth-N-is-PSEUDO-CLASS | `:where(:not(:has(+ :nth-child(N):is(:PSEUDO-CLASS))))` |
| " | not-s-nth-N-is-PSEUDO-CLASS | `:where(:not(:has(~ :nth-child(N):is(:PSEUDO-CLASS))))` |
| " | not-d-nth-N-is-PSEUDO-CLASS | `:where(:not(:has(:nth-child(N):is(:PSEUDO-CLASS))))` |
| " | not-c-nth-N-is-PSEUDO-CLASS | `:where(:not(:has(> :nth-child(N):is(:PSEUDO-CLASS))))` |
| " | not-c2-nth-N-is-PSEUDO-CLASS | `:where(:not(:has(> * > :nth-child(N):is(:PSEUDO-CLASS))))` |
| " | not-c3-nth-N-is-PSEUDO-CLASS | `:where(:not(:has(> * > * > :nth-child(N):is(:PSEUDO-CLASS))))` |
| " | not-nth-N-of-S-is-PSEUDO-CLASS-n | `:where(:not(:nth-child(N of S):is(:PSEUDO-CLASS) + *))` |
| " | not-nth-N-of-S-is-PSEUDO-CLASS-s | `:where(:not(:nth-child(N of S):is(:PSEUDO-CLASS) ~ *))` |
| " | not-n-nth-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(+ :nth-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-s-nth-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(~ :nth-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-d-nth-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(:nth-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-c-nth-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> :nth-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-c2-nth-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> * > :nth-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-c3-nth-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> * > * > :nth-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-nth-last-N-is-PSEUDO-CLASS-n | `:where(:not(:nth-last-child(N):is(:PSEUDO-CLASS) + *))` |
| " | not-nth-last-N-is-PSEUDO-CLASS-s | `:where(:not(:nth-last-child(N):is(:PSEUDO-CLASS) ~ *))` |
| " | not-n-nth-last-N-is-PSEUDO-CLASS | `:where(:not(:has(+ :nth-last-child(N):is(:PSEUDO-CLASS))))` |
| " | not-s-nth-last-N-is-PSEUDO-CLASS | `:where(:not(:has(~ :nth-last-child(N):is(:PSEUDO-CLASS))))` |
| " | not-d-nth-last-N-is-PSEUDO-CLASS | `:where(:not(:has(:nth-last-child(N):is(:PSEUDO-CLASS))))` |
| " | not-c-nth-last-N-is-PSEUDO-CLASS | `:where(:not(:has(> :nth-last-child(N):is(:PSEUDO-CLASS))))` |
| " | not-c2-nth-last-N-is-PSEUDO-CLASS | `:where(:not(:has(> * > :nth-last-child(N):is(:PSEUDO-CLASS))))` |
| " | not-c3-nth-last-N-is-PSEUDO-CLASS | `:where(:not(:has(> * > * > :nth-last-child(N):is(:PSEUDO-CLASS))))` |
| " | not-nth-last-N-of-S-is-PSEUDO-CLASS-n | `:where(:not(:nth-last-child(N of S):is(:PSEUDO-CLASS) + *))` |
| " | not-nth-last-N-of-S-is-PSEUDO-CLASS-s | `:where(:not(:nth-last-child(N of S):is(:PSEUDO-CLASS) ~ *))` |
| " | not-n-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(+ :nth-last-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-s-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(~ :nth-last-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-d-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(:nth-last-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-c-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> :nth-last-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-c2-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> * > :nth-last-child(N of S):is(:PSEUDO-CLASS))))` |
| " | not-c3-nth-last-N-of-S-is-PSEUDO-CLASS | `:where(:not(:has(> * > * > :nth-last-child(N of S):is(:PSEUDO-CLASS))))` |
| PSEUDO-ELEMENT | first-line | `::first-line` |
| " | first-letter | `::first-letter` |
| " | cue | `::cue` |
| " | grammar-error | `::grammar-error` |
| " | selection | `::selection` |
| " | spelling-error | `::spelling-error` |
| " | target-text | `::target-text` |
| " | before | `::before` |
| " | after | `::after` |
| " | column | `::column` |
| " | marker | `::marker` |
| " | backdrop | `::backdrop` |
| " | scroll-marker | `::scroll-marker` |
| " | scroll-marker-group | `::scroll-marker-group` |
| " | details-content | `::details-content` |
| " | checkmark | `::checkmark` |
| " | file-selector-button | `::file-selector-button` |
| " | picker-icon | `::picker-icon` |
| " | placeholder | `::placeholder` |
| PROPERTY | NORMAL-PROPERTY | `& { NORMAL-PROPERTY: var(--XSA-PROPERTY--); }` |
| " | aspect-ratio | `& { aspect-ratio: var(--XSA-PROPERTY--); } :not(_):not(_):where(&:is(iframe)) { block-size: auto; }` |
| " | background | `& { background: var(--XSA-PROPERTY--); background-attachment: scroll; }` |
| " | background-attachment | `& { clip-path: inset(0); } &::before { background: inherit; content: ""; position: fixed; inset: 0; z-index: -1; } &::after { content: none; }` |
| " | columns | `& { columns: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & > * { break-inside: avoid-column; contain: layout; } & > :first-child { margin-block-start: 0; } & > :last-child { margin-block-end: 0; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | column-count | `& { column-count: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & > * { break-inside: avoid-column; contain: layout; } & > :first-child { margin-block-start: 0; } & > :last-child { margin-block-end: 0; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | column-width | `& { column-width: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & > * { break-inside: avoid-column; contain: layout; } & > :first-child { margin-block-start: 0; } & > :last-child { margin-block-end: 0; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | flex-flow | `& { flex-flow: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: flex; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | flex-direction | `& { flex-direction: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: flex; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | flex-wrap | `& { flex-wrap: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: flex; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | font-size | `& { font-size: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | font-style | `& { font-style: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | font-weight | `& { font-weight: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | grid | `& { grid: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: grid; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | grid-template | `& { grid-template: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: grid; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | grid-template-rows | `& { grid-template-rows: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: grid; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | grid-template-columns | `& { grid-template-columns: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { & { display: grid; } &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | text-decoration | `& { text-decoration: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | text-emphasis | `& { text-emphasis: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | text-shadow | `& { text-shadow: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | text-stroke | `& { -webkit-text-stroke: var(--XSA-PROPERTY--); text-stroke: var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { paint-order: stroke; background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | x-text-marker | `& { text-decoration: underline 50% var(--XSA-PROPERTY--); } :not(_):not(_):where(&) { text-decoration-skip-ink: none; text-underline-offset: -50%; text-underline-position: under; background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |

### nth系擬似クラス の引数

- 'N'
  - /[0-9]+/
  - 'even' = '2n'
  - '2n' = '2n'
  - 'odd' = '2n+1'
  - '2nP1' = '2n+1'
  - '2nM1' = '2n-1'
- 'S'
  - 'name' = 'name'
  - 'name-name' = ':is(name, name)'
  - 'ID-name' = '#name'
  - 'CLASS-name' = '.name'
  - 'PSEUDO-name' = ':name'
  - 'ATTR-name' = '[name]'
  - 'ATTR-name-EQ-value' = '[name="value"]'
  - 'ATTR-name-A-EQ-value' = '[name*="value"]'
  - 'ATTR-name-C-EQ-value' = '[name^="value"]'
  - 'ATTR-name-D-EQ-value' = '[name$="value"]'
  - 'ATTR-name-T-EQ-value' = '[name~="value"]'
  - 'ATTR-name-P-EQ-value' = '[name|="value"]'

## XSAプロパティ の使用例

### 表の装飾

```HTML
<table style="--border--: solid thin; --border-collapse--: collapse; --inline-size--: 100%; --table-layout--: fixed; --c3_border--: var(--border--); --c3_padding-block--: calc(0.5lh - 0.5em); --c3_padding-inline--: calc(1lh - 1em); --c3-of-th_background--: color-mix(in srgb, transparent, currentcolor 6.25%);">
  <thead>
    <tr> … </tr>
  </thead>
  <tbody style="--c-nth-odd_background--: var(in srgb, transparent, currentcolor 6.25%);">
    <tr> … </tr>
    …
  </tbody>
</table>
```

### 段組みレイアウト

```HTML
<ul style="--columns--: 4 16em; --column-rule--: dotted thin; --column-gap--: 2em; --c_margin-block-end--: 1lh;">
  <li> … </li>
  <li> … </li>
  <li> … </li>
  <li> … </li>
</ul>
```

### フレックスレイアウト

```HTML
<div style="--container-type--: inline-size; --flex-flow--: row wrap; --gap--: 1lh 1em; --c_flex--: 1 1 100%;">
  <div style="--cqi-m_flex--: 1 1 0%;"> … </div>
  <div style="--cqi-m_flex--: 1 1 0%;"> … </div>
  <div style="--cqi-m_flex--: 1 1 0%;"> … </div>
  <div style="--cqi-m_flex--: 1 1 0%;"> … </div>
</div>
```

### グリッドレイアウト

```HTML
<div style="--container-type--: inline-size; --grid--: auto-flow / repeat(12, 1fr); --gap--: 1lh 1em; --c_grid-area--: auto / span 12;">
  <div style="--cqi-m_grid-area--: auto / span 2;"> … </div>
  <div style="--cqi-m_grid-area--: auto / span 4;"> … </div>
  <div style="--cqi-m_grid-area--: auto / span 6;"> … </div>
</div>
```

### コンポーネントの拡張例1

```HTML
<style>
.button {
  border-style: solid;
  …
  &:not([style*="--background--:"]) {
    background: none;
  }
  &:not([style*="--border-width--:"]) {
    border-width: thin;
  }
  &:not([style*="--border-color--:"]) {
    border-color: currentcolor;
  }
  &:not([style*="--color--:"]) {
    color: currentcolor;
  }
  &[style*="--background--:"] {
    border-color: transparent;
  }
}
</style>
…
<p><button class="button">枠線のボタン</button></p>
<p><button class="button" style="--background--: var(--red); --color--: var(--white);">赤色のボタン</button></p>
<p><button class="button" style="--inline-size--: 100%;">横長のボタン</button></p>
```

### コンポーネントの拡張例2

```HTML
<style>
.button {
  --background--: none;
  --border-width--: thin;
  --border-color--: currentcolor;
  --color--: currentcolor;
  background: var(--background--);
  border: solid var(--border-width--) var(--border-color--);
  color: var(--color--);
  …
  &[style*="--background--:"] {
    border-color: transparent;
  }
}
</style>
…
<p><button class="button">枠線のボタン</button></p>
<p><button class="button" style="--background--: var(--red); --color--: var(--white);">赤色のボタン</button></p>
<p><button class="button" style="--inline-size--: 100%;">横長のボタン</button></p>
```

---

The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/).

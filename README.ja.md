[English](README.md) | [日本語](README.ja.md)

---

# XSA (@nov-xsa)

XSA (EXtended Style Attribute) は、CSS の属性セレクタとカスタムプロパティで、HTML の style属性 を限界突破させる、シンプルなメタ・フレームワークです。

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

それ自体をトリガーとして CSSプロパティ に値を設定します。

```HTML
<div style="--cqi-s_c3-first_hover_color--: var(--red);" … </div>
```

クエリやセレクタをエンコードした XSAプレフィックス とカスタムプロパティの継承を組み合わせることで、

```CSS
@container (inline-size > 480px) {
  [style*="--cqi-s_c3-first_hover_color--:"] > * > * > *:where(:first-child):where(:hover) {
    color: var(--cqi-s_c3-first_hover_color--);
  }
}
```

子孫要素や擬似要素のスタイリングと、メディアクエリ、コンテナクエリ、擬似クラスによる条件分岐を可能にします。

## パッケージ

XSAプロパティ を機能させるためのパッケージは複数あり、プロジェクトに応じて最適なものが使用できます。

| パッケージ | 名称 | 動作環境 | メリット | デメリット | 説明 |
| --- | --- | --- | --- | --- | --- |
| `@nov-xsa/css` | XSA CSS | ブラウザ | 導入が簡単 | 自由度が低い | XSAプロパティ を選んで使用するスクリプトなし・ビルドなしの CSSライブラリ です。 |
| `@nov-xsa/js` | XSA JS | ブラウザ | 導入が簡単, 自由度が高い | クライアントサイドに依存 | XSAプロパティ から CSSコード の生成と style要素 への出力を行うスクリプトです。 |
| `@nov-xsa/postcss` | XSA PostCSS | 開発環境 | 自由度が高い | ビルド環境が必要 | プロジェクト内の XSAプロパティ から CSSコード の生成と CSSファイル への出力を行うツールです。 |
| `@nov-xsa/php` | XSA PHP | サーバ | 自由度が高い | PHP実行環境が必要 | PHP実行環境 で XSAプロパティ から CSSコード を生成するヘルパークラスです。 |

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
| PSEUDO-CLASS | PC | `:where(:PC)` |
| " | PC-n | `:where(:PC + *)` |
| " | nth-N-is-PC-n | `:where(:nth-child(N):is(:PC) + *)` |
| " | nth-N-of-S-is-PC-n | `:where(:nth-child(N of S):is(:PC) + *)` |
| " | nth-last-N-is-PC-n | `:where(:nth-last-child(N):is(:PC) + *)` |
| " | nth-last-N-of-S-is-PC-n | `:where(:nth-last-child(N of S):is(:PC) + *)` |
| " | S-is-PC-n | `:where(:nth-child(n of S):is(:PC) + *)` |
| " | PC-s | `:where(:PC ~ *)` |
| " | nth-N-is-PC-s | `:where(:nth-child(N):is(:PC) ~ *)` |
| " | nth-N-of-S-is-PC-s | `:where(:nth-child(N of S):is(:PC) ~ *)` |
| " | nth-last-N-is-PC-s | `:where(:nth-last-child(N):is(:PC) ~ *)` |
| " | nth-last-N-of-S-is-PC-s | `:where(:nth-last-child(N of S):is(:PC) ~ *)` |
| " | S-is-PC-s | `:where(:nth-child(n of S):is(:PC) ~ *)` |
| " | n-PC | `:where(:has(+ :PC))` |
| " | n-nth-N-is-PC | `:where(:has(+ :nth-child(N):is(:PC)))` |
| " | n-nth-N-of-S-is-PC | `:where(:has(+ :nth-child(N of S):is(:PC)))` |
| " | n-nth-last-N-is-PC | `:where(:has(+ :nth-last-child(N):is(:PC)))` |
| " | n-nth-last-N-of-S-is-PC | `:where(:has(+ :nth-last-child(N of S):is(:PC)))` |
| " | n-S-is-PC | `:where(:has(+ :nth-child(n of S):is(:PC)))` |
| " | s-PC | `:where(:has(~ :PC))` |
| " | s-nth-N-is-PC | `:where(:has(~ :nth-child(N):is(:PC)))` |
| " | s-nth-N-of-S-is-PC | `:where(:has(~ :nth-child(N of S):is(:PC)))` |
| " | s-nth-last-N-is-PC | `:where(:has(~ :nth-last-child(N):is(:PC)))` |
| " | s-nth-last-N-of-S-is-PC | `:where(:has(~ :nth-last-child(N of S):is(:PC)))` |
| " | s-S-is-PC | `:where(:has(~ :nth-child(n of S):is(:PC)))` |
| " | d-PC | `:where(:has(:PC))` |
| " | d-nth-N-is-PC | `:where(:has(:nth-child(N):is(:PC)))` |
| " | d-nth-N-of-S-is-PC | `:where(:has(:nth-child(N of S):is(:PC)))` |
| " | d-nth-last-N-is-PC | `:where(:has(:nth-last-child(N):is(:PC)))` |
| " | d-nth-last-N-of-S-is-PC | `:where(:has(:nth-last-child(N of S):is(:PC)))` |
| " | d-of-S-is-PC | `:where(:has(:nth-child(n of S):is(:PC)))` |
| " | c-PC | `:where(:has(> :PC))` |
| " | c-nth-N-is-PC | `:where(:has(> :nth-child(N):is(:PC)))` |
| " | c-nth-N-of-S-is-PC | `:where(:has(> :nth-child(N of S):is(:PC)))` |
| " | c-nth-last-N-is-PC | `:where(:has(> :nth-last-child(N):is(:PC)))` |
| " | c-nth-last-N-of-S-is-PC | `:where(:has(> :nth-last-child(N of S):is(:PC)))` |
| " | c-of-S-is-PC | `:where(:has(> :nth-child(n of S):is(:PC)))` |
| " | c2-PC | `:where(:has(> * > :PC))` |
| " | c2-nth-N-is-PC | `:where(:has(> * > :nth-child(N):is(:PC)))` |
| " | c2-nth-N-of-S-is-PC | `:where(:has(> * > :nth-child(N of S):is(:PC)))` |
| " | c2-nth-last-N-is-PC | `:where(:has(> * > :nth-last-child(N):is(:PC)))` |
| " | c2-nth-last-N-of-S-is-PC | `:where(:has(> * > :nth-last-child(N of S):is(:PC)))` |
| " | c2-of-S-is-PC | `:where(:has(> * > :nth-child(n of S):is(:PC)))` |
| " | c3-PC | `:where(:has(> * > * > :PC))` |
| " | c3-nth-N-is-PC | `:where(:has(> * > * > :nth-child(N):is(:PC)))` |
| " | c3-nth-N-of-S-is-PC | `:where(:has(> * > * > :nth-child(N of S):is(:PC)))` |
| " | c3-nth-last-N-is-PC | `:where(:has(> * > * > :nth-last-child(N):is(:PC)))` |
| " | c3-nth-last-N-of-S-is-PC | `:where(:has(> * > * > :nth-last-child(N of S):is(:PC)))` |
| " | c3-of-S-is-PC | `:where(:has(> * > * > :nth-child(n of S):is(:PC)))` |
| " | not-PC | `:where(:not(:PC))` |
| " | not-PC-n | `:where(:not(:PC + *))` |
| " | not-nth-N-is-PC-n | `:where(:not(:nth-child(N):is(:PC) + *))` |
| " | not-nth-N-of-S-is-PC-n | `:where(:not(:nth-child(N of S):is(:PC) + *))` |
| " | not-nth-last-N-is-PC-n | `:where(:not(:nth-last-child(N):is(:PC) + *))` |
| " | not-nth-last-N-of-S-is-PC-n | `:where(:not(:nth-last-child(N of S):is(:PC) + *))` |
| " | not-S-is-PC-n | `:where(:not(:nth-child(n of S):is(:PC) + *))` |
| " | not-PC-s | `:where(:not(:PC ~ *))` |
| " | not-nth-N-is-PC-s | `:where(:not(:nth-child(N):is(:PC) ~ *))` |
| " | not-nth-N-of-S-is-PC-s | `:where(:not(:nth-child(N of S):is(:PC) ~ *))` |
| " | not-nth-last-N-is-PC-s | `:where(:not(:nth-last-child(N):is(:PC) ~ *))` |
| " | not-nth-last-N-of-S-is-PC-s | `:where(:not(:nth-last-child(N of S):is(:PC) ~ *))` |
| " | not-S-is-PC-s | `:where(:not(:nth-child(n of S):is(:PC) ~ *))` |
| " | not-n-PC | `:where(:not(:has(+ :PC)))` |
| " | not-n-nth-N-is-PC | `:where(:not(:has(+ :nth-child(N):is(:PC))))` |
| " | not-n-nth-N-of-S-is-PC | `:where(:not(:has(+ :nth-child(N of S):is(:PC))))` |
| " | not-n-nth-last-N-is-PC | `:where(:not(:has(+ :nth-last-child(N):is(:PC))))` |
| " | not-n-nth-last-N-of-S-is-PC | `:where(:not(:has(+ :nth-last-child(N of S):is(:PC))))` |
| " | not-n-S-is-PC | `:where(:not(:has(+ :nth-child(n of S):is(:PC))))` |
| " | not-s-PC | `:where(:not(:has(~ :PC)))` |
| " | not-s-nth-N-is-PC | `:where(:not(:has(~ :nth-child(N):is(:PC))))` |
| " | not-s-nth-N-of-S-is-PC | `:where(:not(:has(~ :nth-child(N of S):is(:PC))))` |
| " | not-s-nth-last-N-is-PC | `:where(:not(:has(~ :nth-last-child(N):is(:PC))))` |
| " | not-s-nth-last-N-of-S-is-PC | `:where(:not(:has(~ :nth-last-child(N of S):is(:PC))))` |
| " | not-s-S-is-PC | `:where(:not(:has(~ :nth-child(n of S):is(:PC))))` |
| " | not-d-PC | `:where(:not(:has(:PC)))` |
| " | not-d-nth-N-is-PC | `:where(:not(:has(:nth-child(N):is(:PC))))` |
| " | not-d-nth-N-of-S-is-PC | `:where(:not(:has(:nth-child(N of S):is(:PC))))` |
| " | not-d-nth-last-N-is-PC | `:where(:not(:has(:nth-last-child(N):is(:PC))))` |
| " | not-d-nth-last-N-of-S-is-PC | `:where(:not(:has(:nth-last-child(N of S):is(:PC))))` |
| " | not-d-of-S-is-PC | `:where(:not(:has(:nth-child(n of S):is(:PC))))` |
| " | not-c-PC | `:where(:not(:has(> :PC)))` |
| " | not-c-nth-N-is-PC | `:where(:not(:has(> :nth-child(N):is(:PC))))` |
| " | not-c-nth-N-of-S-is-PC | `:where(:not(:has(> :nth-child(N of S):is(:PC))))` |
| " | not-c-nth-last-N-is-PC | `:where(:not(:has(> :nth-last-child(N):is(:PC))))` |
| " | not-c-nth-last-N-of-S-is-PC | `:where(:not(:has(> :nth-last-child(N of S):is(:PC))))` |
| " | not-c-of-S-is-PC | `:where(:not(:has(> :nth-child(n of S):is(:PC))))` |
| " | not-c2-PC | `:where(:not(:has(> * > :PC)))` |
| " | not-c2-nth-N-is-PC | `:where(:not(:has(> * > :nth-child(N):is(:PC))))` |
| " | not-c2-nth-N-of-S-is-PC | `:where(:not(:has(> * > :nth-child(N of S):is(:PC))))` |
| " | not-c2-nth-last-N-is-PC | `:where(:not(:has(> * > :nth-last-child(N):is(:PC))))` |
| " | not-c2-nth-last-N-of-S-is-PC | `:where(:not(:has(> * > :nth-last-child(N of S):is(:PC))))` |
| " | not-c2-of-S-is-PC | `:where(:not(:has(> * > :nth-child(n of S):is(:PC))))` |
| " | not-c3-PC | `:where(:not(:has(> * > * > :PC)))` |
| " | not-c3-nth-N-is-PC | `:where(:not(:has(> * > * > :nth-child(N):is(:PC))))` |
| " | not-c3-nth-N-of-S-is-PC | `:where(:not(:has(> * > * > :nth-child(N of S):is(:PC))))` |
| " | not-c3-nth-last-N-is-PC | `:where(:not(:has(> * > * > :nth-last-child(N):is(:PC))))` |
| " | not-c3-nth-last-N-of-S-is-PC | `:where(:not(:has(> * > * > :nth-last-child(N of S):is(:PC))))` |
| " | not-c3-of-S-is-PC | `:where(:not(:has(> * > * > :nth-child(n of S):is(:PC))))` |
| PC | open | `:open` |
| " | popover-open | `:popover-open` |
| " | modal | `:modal` |
| " | fullscreen | `:fullscreen` |
| " | picture-in-picture | `:picture-in-picture` |
| " | enabled | `:enabled` |
| " | disabled | `:disabled` |
| " | read-only | `:read-only` |
| " | read-write | `:read-write` |
| " | placeholder-shown | `:placeholder-shown` |
| " | autofill | `:autofill` |
| " | default | `:default` |
| " | checked | `:checked` |
| " | indeterminate | `:indeterminate` |
| " | valid | `:valid` |
| " | invalid | `:invalid` |
| " | in-range | `:in-range` |
| " | out-of-range | `:out-of-range` |
| " | required | `:required` |
| " | optional | `:optional` |
| " | user-valid | `:user-valid` |
| " | user-invalid | `:user-invalid` |
| " | any-link | `:any-link` |
| " | link | `:link` |
| " | visited | `:visited` |
| " | target | `:target` |
| " | scope | `:scope` |
| " | playing | `:playing` |
| " | paused | `:paused` |
| " | seeking | `:seeking` |
| " | buffering | `:buffering` |
| " | stalled | `:stalled` |
| " | muted | `:muted` |
| " | volume-locked | `:volume-locked` |
| " | empty | `:empty` |
| " | hover | `:hover` |
| " | active | `:active` |
| " | focus | `:focus` |
| " | focus-visible | `:focus-visible` |
| " | focus-within | `:focus-within` |
| " | target-current | `:target-current` |
| N (example) | odd | `odd` |
| " | even | `even` |
| " | n | `n` |
| " | 2 | `2` |
| " | 2n | `2n` |
| " | nP9 | `n+9` |
| " | 2nP1 | `2n+1` |
| " | 2nM1 | `2n-1` |
| " | MnP8 | `-n+8` |
| " | M2nP8 | `-2n+8` |
| S (example) | name | `name` |
| " | name-name | `:is(name, name)` |
| " | ID-name | `#name` |
| " | CLASS-name | `.name` |
| " | PSEUDO-name | `:name` |
| " | ATTR-name | `[name]` |
| " | ATTR-name-EQ-value | `[name="value"]` |
| " | ATTR-name-A-EQ-value | `[name*="value"]` |
| " | ATTR-name-C-EQ-value | `[name^="value"]` |
| " | ATTR-name-D-EQ-value | `[name$="value"]` |
| " | ATTR-name-T=EQ-value | `[name~="value"]` |
| " | ATTR-name-P-EQ-value | `[name|="value"]` |
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
| " | background-attachment | `& { clip-path: inset(0); } &::before { background: inherit; background-attachment: scroll; content: ""; position: fixed; inset: 0; z-index: -1; } &::after { content: none; }` |
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

## XSAプロパティ の使用例

### 表の装飾

```HTML
<table style="
    --border--: solid thin;
    --border-collapse--: collapse;
    --inline-size--: 100%;
    --c3_border--: var(--border--);
    --c3_padding-block--: calc(0.5lh - 0.5em);
    --c3_padding-inline--: calc(1lh - 1em);
    --c3-of-th_background--: color-mix(in srgb, transparent, currentcolor 6.25%);
    ">
  <thead>
    <tr> … </tr>
  </thead>
  <tbody style="
      --c-nth-odd_background--: var(in srgb, transparent, currentcolor 12.5%);
      --c_hover_background--: var(in srgb, transparent, currentcolor 25%);
      ">
    <tr> … </tr>
    …
  </tbody>
</table>
```

### 段組みレイアウト

```HTML
<ul style="
    --columns--: 4 16em;
    --column-rule--: dotted thin;
    --column-gap--: 2em;
    --c_margin-block-end--: 1lh;
    ">
  <li> … </li>
  <li> … </li>
  <li> … </li>
  <li> … </li>
</ul>
```

### フレックスボックスレイアウト

```HTML
<div style="
    --container-type--: inline-size;
    --flex-flow--: row wrap;
    --gap--: 1lh 1em;
    --c_flex--: 1 1 100%;
    ">
  <div style="--cqi-m_flex-basis--: 0%;"> … </div>
  <div style="--cqi-m_flex-basis--: 0%;"> … </div>
  <div style="--cqi-m_flex-basis--: 0%;"> … </div>
  <div style="--cqi-m_flex-basis--: 0%;"> … </div>
</div>
```

### グリッドレイアウト

```HTML
<div style="
    --container-type--: inline-size;
    --grid--: auto-flow / repeat(12, 1fr);
    --gap--: 1lh 1em;
    --c_grid-column--: span 12;
    ">
  <div style="--cqi-m_grid-column--: span 3;"> … </div>
  <div style="--cqi-m_grid-column--: span 3;"> … </div>
  <div style="--cqi-m_grid-column--: span 3;"> … </div>
  <div style="--cqi-m_grid-column--: span 3;"> … </div>
</div>
```

### コンポーネントの拡張例

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

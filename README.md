[English](README.md) | [日本語](README.ja.md)

---

# XSA (@nov-xsa)

XSA (EXtended Style Attribute) is a simple meta-framework that breaks through the limitations of the HTML `style` attribute using CSS attribute selectors and custom properties.

## Overview

```HTML
<div style="--color--: var(--red);"> … </div>
```

By appending double hyphens (`--`) to both the beginning and end of a standard CSS property, we convert it into an XSA Property. When declared inside an inline style attribute,

```CSS
[style*="--color--:"] {
  color: var(--color--);
}
```

the declaration itself acts as a trigger, dynamically mapping the scoped value back to the native CSS property to render the style.

These underlying CSS rules can be loaded via a lightweight core stylesheet or automatically generated on the fly using JavaScript or PHP compilation scripts.

```HTML
<div style="--cqi-s_c3-first_hover_color--: var(--red);" … </div>
```

By combining an XSA Prefix (which encodes complex media/container queries and descendant selectors) with the native cascading inheritance of CSS custom properties,

```CSS
@container (inline-size > 480px) {
  [style*="--cqi-s_c3-first_hover_color--:"] > * > * > *:where(:first-child):where(:hover) {
    color: var(--cqi-s_c3-first_hover_color--);
  }
}
```

XSA unlocks advanced responsive queries, pseudo-classes, and deep descendant targetings directly from the HTML layer?capabilities previously impossible with native inline styles.

## Packages

Multiple packages are available to make XSA properties work, allowing you to choose the best option for your project.

| Package | Name | Environment | Pros | Cons | Description |
| --- | --- | --- | --- | --- | --- |
| `@nov-xsa/css` | XSA CSS | Browser | Easy to introduce | Low flexibility | A script-free, build-free CSS library where you select and use specific XSA properties. |
| `@nov-xsa/js` | XSA JS | Browser | Easy to introduce, high flexibility | Dependent on client-side | A script that generates CSS rule from XSA properties and outputs it to a `style` element. |
| `@nov-xsa/postcss` | XSA PostCSS | Dev Environment | High flexibility | Requires build environment | A tool that generates CSS rule from XSA properties within a project and outputs it to a CSS file. |
| `@nov-xsa/php` | XSA PHP | Server | High flexibility | Requires PHP environment | A helper class for generating CSS rule from XSA properties within a PHP execution environment. |

## XSA Property Syntax Reference

The naming convention for XSA properties can be expressed as the following regular expression:

```RegExp
--(QUERY_)?(PSEUDO-CLASS_)?(COMBINATOR(-SIBLING)?_)?(PSEUDO-CLASS_)?(PSEUDO-ELEMENT_)?PROPERTY--
```

The components QUERY, COMBINATOR, SIBLING, PSEUDO-CLASS, PSEUDO-ELEMENT, and PROPERTY map to specific character strings below:

| Classification | Name | CSS Code |
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

## XSA Property Examples

### Table Decoration

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

### Multi-column Layout

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

### Flexbox Layout

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

### Grid Layout

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

### Component Extension Example

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
<p><button class="button">Outlined Button</button></p>
<p><button class="button" style="--background--: var(--red); --color--: var(--white);">Red Button</button></p>
<p><button class="button" style="--inline-size--: 100%;">Full-width Button</button></p>
```

---

The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/).

[For those who want to learn more about XSA, we offer an XSA HTML Manual for sale. Please consider purchasing it.](https://xsa.lemonsqueezy.com/)

[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle (@exstyle)

ExStyle is a styling infrastructure meta-framework that breaks the limits of the HTML `style` attribute by leveraging CSS custom properties and attribute selectors.

It elevates the traditional ideal of "HTML for structure, CSS for presentation" into the practical reality of "HTML as a blueprint," enabling the construction of websites that balance creativity with logical reasoning.

## Overview

A CSS property wrapped in double hyphens, such as `--css-property--`, is defined as an **ExStyle Property**. When you set an ExStyle Property within a `style` attribute:

```HTML
<p style="--color--: var(--red);"> … </p>
```

It establishes a styling infrastructure where the value is applied to the corresponding CSS property.

```CSS
[style*="--color--:"] { color: var(--color--); }
```

While the standard `style` attribute is limited to styling the element it is attached to, ExStyle utilizes custom property inheritance and specific prefixes to enable:

```HTML
<ul style="--cq-i-s_hover_c-first-child_active_after_content--: 'Hello, World!';" … </ul>
```

Styling of descendants and pseudo-elements, as well as conditional branching via Media Queries, Container Queries, and pseudo-classes.

```CSS
@container (inline-size > 480px) and (inline-size > 30rem) {
  [style*="--cq-i-s_hover_c-first-child_active_after_content--:"]:where(:hover) > *:where(:first-child):where(:active)::after { content: var(--cq-i-s_hover_c-first-child_active_after_content--); }
}
```

This is the "Extended Style attribute" - **ExStyle**.

## Features

* **Web Standards Compliance**: Achieves the ideal state where the `class` attribute handles logical values and the `style` attribute handles physical/visual values.
* **HTML Consolidation**: Allows for a utility-first workflow, enabling rapid webpage development.
* **Code Minimization**: Eliminates the need for single-purpose classes like `.what-do`. By separating logic into `--what--` and `var(--do)`, CSS boilerplate is significantly reduced.
* **No !important Needed**: ExStyle CSS typically uses a single attribute selector's specificity, allowing for easy overrides or resets without resorting to `!important`.
* **High Versatility**: Does not force specific design tokens; ExStyle properties accept any valid value.
* **Low Learning Curve**: Since it simply involves adding `--` and prefixes to standard CSS properties, it is accessible to CSS beginners.
* **AI-Friendly**: The clear structure of `--what--` and `var(--do)` results in low training overhead for AI, making it ideal for "Vibe Coding."
* **UI-Friendly**: Since UI input values can be mapped directly to ExStyle properties, it integrates seamlessly with CMSs like WordPress and no-code/low-code applications.

## Packages

Multiple packages are available to power ExStyle properties. Choose the best fit for your project.

| Package | Name | Environment | Pros | Cons | Description |
| --- | --- | --- | --- | --- | --- |
| `@exstyle/css` | ExStyle CSS | Browser | Easy to install | Low flexibility; includes unused code | A collection of scriptless, buildless CSS files with a predefined set of ExStyle properties. |
| `@exstyle/js` | ExStyle JS | Browser | Easy to install; high flexibility | Dependency on client-side JS | A script that dynamically generates CSS and injects it into a `style` element based on ExStyle properties. |
| `@exstyle/php` | ExStyle PHP | Server | High flexibility | Requires PHP environment | A helper class for generating CSS from ExStyle properties in environments like WordPress. |
| `@exstyle/postcss` | ExStyle PostCSS | Build Environment | High flexibility | Requires build setup | A tool integrated into the build process to generate CSS from ExStyle properties and output it to a CSS file. |
| `@exstyle/ai` | ExStyle AI | Browser / Build Env | - | - | A specification set to help AI understand ExStyle and output HTML code using ExStyle properties. |

## About ExStyle Properties

ExStyle establishes a naming convention for properties and the infrastructure that supports them. The naming convention can be expressed by the following regular expression:

```
--(QUERY_)?(PSEUDO-CLASS_)?(COMBINATOR(-TREE-STRUCTURE)?_)?(PSEUDO-CLASS_)?(PSEUDO-ELEMENT_)?PROPERTY--
```

The available names for Query (QUERY), Combinator (COMBINATOR), Tree-structure pseudo-classes (TREE-STRUCTURE), Pseudo-classes (PSEUDO-CLASS), Pseudo-elements (PSEUDO-ELEMENT), and CSS Properties (PROPERTY) are as follows:

| Category | Name | Corresponding CSS |
| --- | --- | --- |
| QUERY | cq-i-s | `@container (inline-size > 480px) and (inline-size > 30rem)` |
| " | cq-i-m | `@container (inline-size > 720px) and (inline-size > 45rem)` |
| " | cq-i-l | `@container (inline-size > 960px) and (inline-size > 60rem)` |
| " | cq-i-xl | `@container (inline-size > 1200px) and (inline-size > 75rem)` |
| " | mq-w-s | `@media (width > 480px) and (width > 30rem)` |
| " | mq-w-m | `@media (width > 720px) and (width > 45rem)` |
| " | mq-w-l | `@media (width > 960px) and (width > 60rem)` |
| " | mq-w-xl | `@media (width > 1200px) and (width > 75rem)` |
| COMBINATOR | d | `& *` |
| " | c | `& > *` |
| " | c2 | `& > * > *` |
| " | c3 | `& > * > * > *` |
| TREE-STRUCTURE | empty | `:empty` |
| " | first-child | `:first-child` |
| " | last-child | `:last-child` |
| " | only-child | `:only-child` |
| " | nth-child-m2n-p-4-of-p | `:nth-child(-2n + 4 of p)` |
| " | nth-child-m2n-p-4-of-td-th | `:nth-child(-2n + 4 of :is(td, th))` |
| " | nth-child-m2n-p-4-of-attr-style | `:nth-child(-2n + 4 of [style])` |
| " | nth-child-m2n-p-4-of-pseudo-focus | `:nth-child(-2n + 4 of :focus)` |
| " | nth-last-child-m2n-p-4-of-p | `:nth-last-child(-2n + 4 of p)` |
| " | nth-last-child-m2n-p-4-of-td-th | `:nth-last-child(-2n + 4 of :is(td, th))` |
| " | nth-last-child-m2n-p-4-of-attr-style | `:nth-last-child(-2n + 4 of [style])` |
| " | nth-last-child-m2n-p-4-of-pseudo-focus | `:nth-last-child(-2n + 4 of :focus)` |
| " | first-of-type | `:first-of-type` |
| " | last-of-type | `:last-of-type` |
| " | only-of-type | `:only-of-type` |
| " | nth-of-type-m2n-p-4 | `:nth-of-type(-2n + 4)` |
| " | nth-last-of-type-m2n-p-4 | `:nth-last-of-type(-2n + 4)` |
| " | of-p | `:nth-child(n of p)` |
| " | of-td-th | `:nth-child(n of :is(td, th))` |
| " | of-attr-style | `:nth-child(n of [style])` |
| " | of-pseudo-focus | `:nth-child(n of :focus)` |
| PSEUDO-CLASS | any-link | `:any-link` |
| " | link | `:link` |
| " | visited | `:visited` |
| " | target | `:target` |
| " | hover | `:hover` |
| " | active | `:active` |
| " | focus | `:focus` |
| " | focus-visible | `:focus-visible` |
| " | focus-within | `:focus-within` |
| " | open | `:open` |
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
| " | unchecked | `:unchecked` |
| " | indeterminate | `:indeterminate` |
| " | valid | `:valid` |
| " | invalid | `:invalid` |
| " | in-range | `:in-range` |
| " | out-of-range | `:out-of-range` |
| " | required | `:required` |
| " | optional | `:optional` |
| " | user-valid | `:user-valid` |
| " | user-invalid | `:user-invalid` |
| " | ANY-PSEUDO-CLASS-n | `:is(:ANY-PSEUDO-CLASS + *)` |
| " | ANY-PSEUDO-CLASS-s | `:is(:ANY-PSEUDO-CLASS ~ *)` |
| " | n-ANY-PSEUDO-CLASS | `:has(+ :ANY-PSEUDO-CLASS)` |
| " | s-ANY-PSEUDO-CLASS | `:has(~ :ANY-PSEUDO-CLASS)` |
| " | d-ANY-PSEUDO-CLASS | `:has(:ANY-PSEUDO-CLASS)` |
| " | c-ANY-PSEUDO-CLASS | `:has(> :ANY-PSEUDO-CLASS)` |
| " | c2-ANY-PSEUDO-CLASS | `:has(> * > :ANY-PSEUDO-CLASS)` |
| " | c3-ANY-PSEUDO-CLASS | `:has(> * > * > :ANY-PSEUDO-CLASS)` |
| " | not-ANY-PSEUDO-CLASS | `:not(:ANY-PSEUDO-CLASS)` |
| " | not-ANY-PSEUDO-CLASS-n | `:not(:ANY-PSEUDO-CLASS + *)` |
| " | not-ANY-PSEUDO-CLASS-s | `:not(:ANY-PSEUDO-CLASS ~ *)` |
| " | not-n-ANY-PSEUDO-CLASS | `:not(:has(+ :ANY-PSEUDO-CLASS))` |
| " | not-s-ANY-PSEUDO-CLASS | `:not(:has(~ :ANY-PSEUDO-CLASS))` |
| " | not-d-ANY-PSEUDO-CLASS | `:not(:has(:ANY-PSEUDO-CLASS))` |
| " | not-c-ANY-PSEUDO-CLASS | `:not(:has(> :ANY-PSEUDO-CLASS))` |
| " | not-c2-ANY-PSEUDO-CLASS | `:not(:has(> * > :ANY-PSEUDO-CLASS))` |
| " | not-c3-ANY-PSEUDO-CLASS | `:not(:has(> * > * > :ANY-PSEUDO-CLASS))` |
| PSEUDO-ELEMENT | backdrop | `::backdrop` |
| " | first-line | `::first-line` |
| " | first-letter | `::first-letter` |
| " | selection | `::selection` |
| " | search-text | `::search-text` |
| " | target-text | `::target-text` |
| " | spelling-error | `::spelling-error` |
| " | grammar-error | `::grammar-error` |
| " | before | `::before` |
| " | after | `::after` |
| " | file-selector-button | `::file-selector-button` |
| " | details-content | `::details-content` |
| PROPERTY | NORMAL-PROPERTY | `& { NORMAL-PROPERTY: var(--(PREFIX_)?NORMAL-PROPERTY--); }` |
| " | aspect-ratio | `& { aspect-ratio: var(--(PREFIX_)?aspect-ratio--); }` <br> `:not(_):not(_):where(&:is(iframe)) { block-size: auto; }` |
| " | background | `& { background: var(--(PREFIX_)?background--); background-attachment: scroll; }` |
| " | background-attachment | `& { clip-path: inset(0); }` <br> `&::before { background: inherit; content: ""; position: fixed; inset: 0; z-index: -1; }` <br> `&::after { content: none; }` |
| " | columns | `& { columns: var(--(PREFIX_)?columns--); }` <br> `:not(_):not(_):where(&) { & > * { break-inside: avoid-column; contain: layout; } & > :first-child { margin-block-start: 0; } & > :last-child { margin-block-end: 0; } }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | column-count | `& { column-count: var(--(PREFIX_)?column-count--); }` <br> `:not(_):not(_):where(&) { & > * { break-inside: avoid-column; contain: layout; } & > :first-child { margin-block-start: 0; } & > :last-child { margin-block-end: 0; } }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | column-width | `& { column-width: var(--(PREFIX_)?column-width--); }` <br> `:not(_):not(_):where(&) { & > * { break-inside: avoid-column; contain: layout; } & > :first-child { margin-block-start: 0; } & > :last-child { margin-block-end: 0; } }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | flex-flow | `& { flex-flow: var(--(PREFIX_)?flex-flow--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | flex-direction | `& { flex-direction: var(--(PREFIX_)?flex-direction--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | flex-wrap | `& { flex-wrap: var(--(PREFIX_)?flex-wrap--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | font-size | `& { font-size: var(--(PREFIX_)?font-size--); }` <br> `:not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | font-style | `& { font-style: var(--(PREFIX_)?font-style--); }` <br> `:not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | font-weight | `& { font-weight: var(--(PREFIX_)?font-weight--); }` <br> `:not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | grid | `& { grid: var(--(PREFIX_)?grid--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | grid-template | `& { grid-template: var(--(PREFIX_)?grid-template--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | grid-template-rows | `& { grid-template-rows: var(--(PREFIX_)?grid-template-rows--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | grid-template-columns | `& { grid-template-columns: var(--(PREFIX_)?grid-template-columns--); }` <br> `:not(_):not(_):where(&) { &:where(ol, ul, menu) { list-style-position: inside; padding: 0; } &:where(ul, menu) { list-style-type: ""; } &:where(dl) > :where(div) > *, & > *, &:where(li, dt, dd) { margin:0; } }` |
| " | text-decoration | `& { text-decoration: var(--(PREFIX_)?text-decoration--); }` <br> `:not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | text-emphasis | `& { text-emphasis: var(--(PREFIX_)?text-emphasis--); }` <br> `:not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | text-shadow | `& { text-shadow: var(--(PREFIX_)?text-shadow--); }` <br> `:not(_):not(_):where(&) { background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | text-stroke | `& { -webkit-text-stroke: var(--(PREFIX_)?text-stroke--); text-stroke: var(--(PREFIX_)?text-stroke--); }` <br> `:not(_):not(_):where(&) { paint-order: stroke; background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |
| " | x-text-marker | `& { text-decoration: underline 50% var(--(PREFIX_)?x-text-marker--); }` <br> `:not(_):not(_):where(&) { text-decoration-skip-ink: none; text-underline-offset: -50%; text-underline-position: under; background: none; color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; text-decoration: none; }` |

While **ExStyle CSS** is limited to specific properties and prefixes, **ExStyle JS**, **ExStyle PHP**, and **ExStyle PostCSS** allow any CSS property to be used with a wide array of prefixes.

## Design Tokens

ExStyle does not come with built-in design tokens. It is recommended to define them as custom properties to be used within ExStyle properties.
While [Open Props](https://open-props.style/) is a great alternative, for maximum AI training and generation efficiency, it is best to define tokens based on base values and their relative scales. Below is an example:

```CSS
:root {
  /* Alpha values. Based on m (middle), from xl (extra low) to xh (extra high). */
  --alpha_xl: 12.5%;
  --alpha_l:  25%;
  --alpha_m:  50%;
  --alpha_h:  75%;
  --alpha_xh: 87.5%;

  /* Font sizing (em). Based on m (medium). */
  --em_xxs:  0.666666em;
  --em_xs:   0.75em;
  --em_s:    0.857142em;
  --em_m:    1em;
  --em_l:    1.2em;
  --em_xl:   1.5em;
  --em_xxl:  2em;
  --em_xxxl: 3em;

  /* Elevation shadows. Based on m (middle). */
  --eval_xl: 0 1px 4px -1px;
  --eval_l:  0 2px 8px -2px;
  --eval_m:  0 4px 16px -4px;
  --eval_h:  0 8px 32px -8px;
  --eval_xh: 0 16px 64px -16px;

  /* Line thickness. Based on m (medium). */
  --line_xf: 1px;
  --line_f:  2px;
  --line_m:  4px;
  --line_b:  8px;
  --line_xb: 16px;

  /* Border radius. Based on m (medium). */
  --radius_xs: 2px;
  --radius_s:  4px;
  --radius_m:  8px;
  --radius_l:  16px;
  --radius_xl: 32px;

  /* Spacing/Margins. Based on m (medium). */
  --sp_xxs: 0.125rem;
  --sp_xs:  0.25rem;
  --sp_s:   0.5rem;
  --sp_m:   1rem;
  --sp_l:   2rem;
  --sp_xl:  4rem;
  --sp_xxl: 8rem;

  /* Base Colors */
  --red:    #f75;
  --yellow: #d91;
  --green:  #5b3;
  --blue:   #59f;
  --gray:   #999;
  --white:  #fff;
  --black:  #111;

  /* Color Modes */
  --light-dark: light-dark(var(--white), var(--black));
  --dark-light: light-dark(var(--black), var(--white));

  /* Color Palette based on contrast corresponding to color mode */
  --lowest-red:     color-mix(in srgb, var(--light-dark), var(--red) var(--alpha_xl));
  --lowest-yellow:  color-mix(in srgb, var(--light-dark), var(--yellow) var(--alpha_xl));
  --lowest-green:   color-mix(in srgb, var(--light-dark), var(--green) var(--alpha_xl));
  --lowest-blue:    color-mix(in srgb, var(--light-dark), var(--blue) var(--alpha_xl));
  --lowest-gray:    color-mix(in srgb, var(--light-dark), var(--gray) var(--alpha_xl));
  --lower-red:      color-mix(in srgb, var(--light-dark), var(--red) var(--alpha_l));
  --lower-yellow:   color-mix(in srgb, var(--light-dark), var(--yellow) var(--alpha_l));
  --lower-green:    color-mix(in srgb, var(--light-dark), var(--green) var(--alpha_l));
  --lower-blue:     color-mix(in srgb, var(--light-dark), var(--blue) var(--alpha_l));
  --lower-gray:     color-mix(in srgb, var(--light-dark), var(--gray) var(--alpha_l));
  --low-red:        color-mix(in srgb, var(--light-dark), var(--red) var(--alpha_m));
  --low-yellow:     color-mix(in srgb, var(--light-dark), var(--yellow) var(--alpha_m));
  --low-green:      color-mix(in srgb, var(--light-dark), var(--green) var(--alpha_m));
  --low-blue:       color-mix(in srgb, var(--light-dark), var(--blue) var(--alpha_m));
  --low-gray:       color-mix(in srgb, var(--light-dark), var(--gray) var(--alpha_m));
  --high-red:       color-mix(in srgb, var(--dark-light), var(--red) var(--alpha_m));
  --high-yellow:    color-mix(in srgb, var(--dark-light), var(--yellow) var(--alpha_m));
  --high-green:     color-mix(in srgb, var(--dark-light), var(--green) var(--alpha_m));
  --high-blue:      color-mix(in srgb, var(--dark-light), var(--blue) var(--alpha_m));
  --high-gray:      color-mix(in srgb, var(--dark-light), var(--gray) var(--alpha_m));
  --higher-red:     color-mix(in srgb, var(--dark-light), var(--red) var(--alpha_l));
  --higher-yellow:  color-mix(in srgb, var(--dark-light), var(--yellow) var(--alpha_l));
  --higher-green:   color-mix(in srgb, var(--dark-light), var(--green) var(--alpha_l));
  --higher-blue:    color-mix(in srgb, var(--dark-light), var(--blue) var(--alpha_l));
  --higher-gray:    color-mix(in srgb, var(--dark-light), var(--gray) var(--alpha_l));
  --highest-red:    color-mix(in srgb, var(--dark-light), var(--red) var(--alpha_xl));
  --highest-yellow: color-mix(in srgb, var(--dark-light), var(--yellow) var(--alpha_xl));
  --highest-green:  color-mix(in srgb, var(--dark-light), var(--green) var(--alpha_xl));
  --highest-blue:   color-mix(in srgb, var(--dark-light), var(--blue) var(--alpha_xl));
  --highest-gray:   color-mix(in srgb, var(--dark-light), var(--gray) var(--alpha_xl));
}
```

## Usage Examples

### Table Decoration

```HTML
<table style="
    --border--: solid var(--line_xf) var(--gray);
    --border-collapse--: collapse;
    --inline-size--: 100%;
    --table-layout--: fixed;
    --c2-of-td-th_border--: var(--border--);
    --c2-of-td-th_padding-block--: var(--sp_s);
    --c2-of-td-th_padding-inline--: var(--sp_m);
    ">
  <tbody style="
      --c-nth-odd_background--: var(--lowest-gray);
      ">
    <tr> … </tr>
    …
  </tbody>
</table>
```

### Component Extension Example 1

```HTML
<style>
.button {
  border-style: solid;
  inline-size: auto; /* Ignores --inline-size-- even if set */
  …
  /* Default settings if ExStyle properties are not set */
  &:not([style*="--background--:"]) {
    background: none;
  }
  &:not([style*="--border-width--:"]) {
    border-width: var(--line_xf);
  }
  &:not([style*="--border-color--:"]) {
    border-color: transparent;
  }
  &:not([style*="--color--:"]) {
    color: currentcolor;
  }
}
</style>
…
<p><button class="button">Outlined Button</button></p>
<p><button class="button" style="--background--: var(--red); --color--: var(--white);">Red Button</button></p>
<p><button class="button" style="--border-radius--: var(--radius_xl);">Rounded Button</button></p>
<p><button class="button" style="--inline-size--: 50%;">Wide Button</button></p><!-- Won't be wide due to inline-size: auto; override -->
```

### Component Extension Example 2

```HTML
<style>
.button {
  /* Default settings if not overridden by ExStyle properties */
  --background--: none;
  --border-width--: var(--line_xf);
  --border-color--: transparent;
  --color--: currentcolor;
  
  background: var(--background--);
  border: solid var(--border-width--) var(--border-color--);
  color: var(--color--);
  inline-size: auto; /* Ignores --inline-size-- even if set */
  …
}
</style>
```

### Column Layout

```HTML
<ul style="--columns--: 4 16em; --column-rule--: dotted var(--line_xf); --column-gap--: var(--sp_l); --c_margin-block-end--: var(--sp_m);">
  <li> … </li>
  <li> … </li>
  <li> … </li>
  <li> … </li>
</ul>
```

### Flex Layout

```HTML
<div style="--container-type--: inline-size; --flex-flow--: row wrap; --gap--: var(--sp_m); --c_flex--: 1 1 100%;">
  <div style="--cq-i-m_flex--: 1 1 0%;"> … </div>
  <div style="--cq-i-m_flex--: 1 1 0%;"> … </div>
  <div style="--cq-i-m_flex--: 1 1 0%;"> … </div>
  <div style="--cq-i-m_flex--: 1 1 0%;"> … </div>
</div>
```

### Grid Layout

```HTML
<div style="--container-type--: inline-size; --grid--: auto-flow / repeat(12, 1fr); --gap--: var(--sp_m); --c_grid-area--: auto / span 12;">
  <div style="--cq-i-m_grid-area--: auto / span 3;"> … </div>
  <div style="--cq-i-m_grid-area--: auto / span 3;"> … </div>
  <div style="--cq-i-m_grid-area--: auto / span 3;"> … </div>
  <div style="--cq-i-m_grid-area--: auto / span 3;"> … </div>
</div>
```

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

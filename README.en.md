[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle (@exstyle)

ExStyle is a meta-framework designed to establish a "styling infrastructure" that pushes the boundaries of the HTML `style` attribute by leveraging CSS Custom Properties and Attribute Selectors.

It elevates the traditional idealism of "HTML for structure, CSS for appearance" into the practical reality of "**HTML as a Design Specification,**" enabling the construction of websites that balance creativity with rational efficiency.

## Overview

A CSS property wrapped in double hyphens, such as `--property--`, is converted into a Custom Property known as an **ExStyle Property**. When this ExStyle Property is set within a `style` attribute:

```HTML
&lt;p style=&quot;--color--: var(--red);&quot;&gt; … &lt;/p&gt;
```

It establishes a styling infrastructure where the value is applied to that specific CSS property:

```CSS
[style*=&quot;--color--:&quot;] { color: var(--color--); }
```

Typically, the `style` attribute can only target the element it is defined on. However, by combining **Custom Property inheritance** with **specialized prefixes**, ExStyle enables:

```HTML
&lt;ul style=&quot;--cq-i-s_hover_c-first-child_active_after_content--: 'Hello, World!';&quot;&gt; … &lt;/ul&gt;
```

styling of descendant and pseudo-elements, as well as conditional branching via Media Queries, Container Queries, and Pseudo-classes.

```CSS
@container (inline-size &gt; 480px) and (inline-size &gt; 30rem) {
  [style*=&quot;--cq-i-s_hover_c-first-child_active_after_content--:&quot;]:where(:hover) &gt; *:where(:first-child):where(:active)::after { content: var(--cq-i-s_hover_c-first-child_active_after_content--); }
}
```

This is the **Extended Style attribute**, or ExStyle.

## Features

* **Adherence to Web Standards**: Realizes the ideal state where the `class` attribute holds logical/semantic values and the `style` attribute holds physical/presentational values.
* **Consolidation into HTML**: Enables a &quot;Utility-First&quot; workflow, allowing for rapid web page development.
* **Code Minimization**: Eliminates the need for single-purpose class values (e.g., `.what-do`). By decoupling into `--what--` and `var(--do)`, total CSS code is reduced.
* **No `!important` Required**: ExStyle CSS code generally has the specificity of a single attribute selector, allowing for easy overrides or resets without `!important`.
* **High Versatility**: ExStyle Properties allow for free value assignment, meaning no specific design tokens are enforced.
* **Low Learning Curve**: Since it only requires adding `--` and prefixes to standard CSS properties, it is accessible even to CSS beginners.
* **AI-Friendly**: The explicit mapping of `--what--` and `var(--do)` makes it easy for AI to learn and ideal for &quot;vibe coding.&quot;
* **UI-Friendly**: Values entered into a UI can be mapped directly to ExStyle Properties, making it highly compatible with CMSs like WordPress, as well as no-code/low-code applications.

## Packages

Multiple packages are available to make ExStyle Properties functional. Choose the one best suited for your project.

| Package | Name | Environment | Pros | Cons | Description |
| --- | --- | --- | --- | --- | --- |
| `@exstyle/css` | ExStyle CSS | Browser | Easy to implement | Low flexibility, includes unused code | A collection of CSS files with selected/limited ExStyle Properties. No scripts or build required. |
| `@exstyle/js` | ExStyle JS | Browser | Easy to implement, high flexibility | Dependent on client-side | A script that dynamically generates CSS from ExStyle Properties and applies them via `style` elements. |
| `@exstyle/php` | ExStyle PHP | Server | High flexibility | Requires PHP environment | A helper class for PHP environments (like WordPress) to generate CSS code from ExStyle Properties. |
| `@exstyle/postcss` | ExStyle PostCSS | Dev Env | High flexibility | Requires build environment | A tool integrated into the build process to generate and output CSS from ExStyle Properties into CSS files. |
| `@exstyle/ai` | ExStyle AI | Browser/Dev | - | - | Specifications designed for AI to understand ExStyle. |

## About ExStyle Properties

ExStyle establishes a naming convention for ExStyle Properties and the corresponding styling infrastructure. The convention can be expressed with the following regex:

```
--(QUERY_)?(PSEUDO-CLASS_)?(COMBINATOR(-TREE-STRUCTURE)?_)?(PSEUDO-CLASS_)?(PSEUDO-ELEMENT_)?PROPERTY--
```

The available Queries, Combinators, Tree Structures, Pseudo-classes, Pseudo-elements, and CSS Properties are as follows:

| Category | Name | CSS Code |
| --- | --- | --- |
| QUERY | cq-i-s | @container (inline-size &gt; 480px) and (inline-size &gt; 30rem) |
| ^ | cq-i-m | @container (inline-size &gt; 720px) and (inline-size &gt; 45rem) |
| ^ | cq-i-l | @container (inline-size &gt; 960px) and (inline-size &gt; 60rem) |
| ^ | cq-i-xl | @container (inline-size &gt; 1200px) and (inline-size &gt; 75rem) |
| ^ | mq-w-s | @media (width &gt; 480px) and (width &gt; 30rem) |
| ^ | mq-w-m | @media (width &gt; 720px) and (width &gt; 45rem) |
| ^ | mq-w-l | @media (width &gt; 960px) and (width &gt; 60rem) |
| ^ | mq-w-xl | @media (width &gt; 1200px) and (width &gt; 75rem) |
| COMBINATOR | d | & * |
| ^ | c | & &gt; * |
| ^ | c2 | & &gt; * &gt; * |
| ^ | c3 | & &gt; * &gt; * &gt; * |
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
| ^ | ANY-PSEUDO-CLASS-n | :is(:ANY-PSEUDO-CLASS + *) |
| ^ | ANY-PSEUDO-CLASS-s | :is(:ANY-PSEUDO-CLASS ~ *) |
| ^ | n-ANY-PSEUDO-CLASS | :has(+ :ANY-PSEUDO-CLASS) |
| ^ | s-ANY-PSEUDO-CLASS | :has(~ :ANY-PSEUDO-CLASS) |
| ^ | d-ANY-PSEUDO-CLASS | :has(:ANY-PSEUDO-CLASS) |
| ^ | c-ANY-PSEUDO-CLASS | :has(&gt; :ANY-PSEUDO-CLASS) |
| ^ | c2-ANY-PSEUDO-CLASS | :has(&gt; * &gt; :ANY-PSEUDO-CLASS) |
| ^ | c3-ANY-PSEUDO-CLASS | :has(&gt; * &gt; * &gt; :ANY-PSEUDO-CLASS) |
| ^ | not-ANY-PSEUDO-CLASS | :not(:ANY-PSEUDO-CLASS) |
| ^ | not-ANY-PSEUDO-CLASS-n | :not(:ANY-PSEUDO-CLASS + *) |
| ^ | not-ANY-PSEUDO-CLASS-s | :not(:ANY-PSEUDO-CLASS ~ *) |
| ^ | not-n-ANY-PSEUDO-CLASS | :not(:has(+ :ANY-PSEUDO-CLASS)) |
| ^ | not-s-ANY-PSEUDO-CLASS | :not(:has(~ :ANY-PSEUDO-CLASS)) |
| ^ | not-d-ANY-PSEUDO-CLASS | :not(:has(:ANY-PSEUDO-CLASS)) |
| ^ | not-c-ANY-PSEUDO-CLASS | :not(:has(&gt; :ANY-PSEUDO-CLASS)) |
| ^ | not-c2-ANY-PSEUDO-CLASS | :not(:has(&gt; * &gt; :ANY-PSEUDO-CLASS)) |
| ^ | not-c3-ANY-PSEUDO-CLASS | :not(:has(&gt; * &gt; * &gt; :ANY-PSEUDO-CLASS)) |
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
| PROPERTY | NORMAL-PROPERTY | & { NORMAL-PROPERTY: var(--(PREFIX_)?NORMAL-PROPERTY--); } |
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

While the properties and prefixes available in ExStyle CSS are limited, ExStyle JS, ExStyle PHP, and ExStyle PostCSS allow all CSS properties to be used with various prefixes.

## About Design Tokens

Since ExStyle does not include design tokens, it is recommended to define them using Custom Properties and use them within ExStyle Properties.
While tokens from libraries like [Open Props](https://open-props.style/) can be used, defining them with base values and relative adjustments is best for prioritizing AI training and generation efficiency.

```CSS
:root {
  /* Alpha values. Based on m (middle), ranging from xl (extra low) to xh (extra high). */
  --alpha_xl: 12.5%; /* calc(100% * 1 / 8) */
  --alpha_l:  25%;   /* calc(100% * 1 / 4) */
  --alpha_m:  50%;   /* calc(100% * 1 / 2) */
  --alpha_h:  75%;   /* calc(100% * 3 / 4) */
  --alpha_xh: 87.5%; /* calc(100% * 7 / 8) */

  /* Size per character. Based on m (medium), ranging from xxs (double extra small) to xxxl (triple extra large). */
  --em_xxs:  0.666666em; /* calc(1em * 6 / 9) */
  --em_xs:   0.75em;      /* calc(1em * 6 / 8) */
  --em_s:    0.857142em; /* calc(1em * 6 / 7) */
  --em_m:    1em;        /* calc(1em * 6 / 6) */
  --em_l:    1.2em;      /* calc(1em * 6 / 5) */
  --em_xl:   1.5em;      /* calc(1em * 6 / 4) */
  --em_xxl:  2em;        /* calc(1em * 6 / 3) */
  --em_xxxl: 3em;        /* calc(1em * 6 / 2) */

  /* Shadows per elevation level. Based on m (middle), ranging from xl (extra low) to xh (extra high). */
  --eval_xl: 0 1px 4px -1px;    /* 0 calc(4px * 1 / 4) calc(16px * 1 / 4) calc(-4px * 1 / 4) */
  --eval_l:  0 2px 8px -2px;    /* 0 calc(4px * 1 / 2) calc(16px * 1 / 2) calc(-4px * 1 / 2) */
  --eval_m:  0 4px 16px -4px;   /* 0 calc(4px * 1)      calc(16px * 1)      calc(-4px * 1) */
  --eval_h:  0 8px 32px -8px;   /* 0 calc(4px * 2)      calc(16px * 2)      calc(-4px * 2) */
  --eval_xh: 0 16px 64px -16px; /* 0 calc(4px * 4)      calc(16px * 4)      calc(-4px * 4) */

  /* Line thickness. Based on m (medium), ranging from xf (extra fine) to xb (extra broad). */
  --line_xf: 1px;  /* calc(4px * 1 / 4) */
  --line_f:  2px;  /* calc(4px * 1 / 2) */
  --line_m:  4px;  /* calc(4px * 1) */
  --line_b:  8px;  /* calc(4px * 2) */
  --line_xb: 16px; /* calc(4px * 4) */

  /* Border radius. Based on m (medium), ranging from xs (extra small) to xl (extra large). */
  --radius_xs: 2px;  /* calc(8px * 1 / 4) */
  --radius_s:  4px;  /* calc(8px * 1 / 2) */
  --radius_m:  8px;  /* calc(8px * 1) */
  --radius_l:  16px; /* calc(8px * 2) */
  --radius_xl: 32px; /* calc(8px * 4) */

  /* Spacing amount. Based on m (medium), ranging from xxs (double extra small) to xxl (double extra large). */
  --sp_xxs: 0.125rem; /* calc(1rem * 1 / 8) */
  --sp_xs:  0.25rem;  /* calc(1rem * 1 / 4) */
  --sp_s:   0.5rem;   /* calc(1rem * 1 / 2) */
  --sp_m:   1rem;     /* calc(1rem * 1) */
  --sp_l:   2rem;     /* calc(1rem * 2) */
  --sp_xl:  4rem;     /* calc(1rem * 4) */
  --sp_xxl: 8rem;     /* calc(1rem * 8) */

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

  /* Contrast-based color palette compatible with color modes */
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

## Usage Examples of ExStyle Properties

### Table Styling

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

### Component Extension 1

```HTML
&lt;style&gt;
.button {
  border-style: solid;
  inline-size: auto; /* Ignored even if --inline-size-- is set */
  …
  /* Default settings if ExStyle Properties are not set */
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
&lt;p&gt;&lt;button class=&quot;button&quot;&gt;Outlined Button&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--background--: var(--red); --color--: var(--white);&quot;&gt;Red Button&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--border-radius--: var(--radius_xl);&quot;&gt;Rounded Button&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--inline-size--: 50%;&quot;&gt;Wide Button&lt;/button&gt;&lt;/p&gt;&lt;!-- Will not become wide due to inline-size: auto; --&gt;
```

### Component Extension 2

```HTML
&lt;style&gt;
.button {
  /* Default settings if not overridden by ExStyle Properties */
  --background--: none;
  --border-width--: var(--line_xf);
  --border-color--: transparent;
  --color--: currentcolor;
  
  background: var(--background--);
  border: solid var(--border-width--) var(--border-color--);
  color: var(--color--);
  inline-size: auto; /* Ignored even if --inline-size-- is set */
  …
}
&lt;/style&gt;
…
&lt;p&gt;&lt;button class=&quot;button&quot;&gt;Outlined Button&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--background--: var(--red); --color--: var(--white);&quot;&gt;Red Button&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--border-radius--: var(--radius_xl);&quot;&gt;Rounded Button&lt;/button&gt;&lt;/p&gt;
&lt;p&gt;&lt;button class=&quot;button&quot; style=&quot;--inline-size--: 50%;&quot;&gt;Wide Button&lt;/button&gt;&lt;/p&gt;&lt;!-- Will not become wide due to inline-size: auto; --&gt;
```

### Column Layout

```HTML
&lt;ul style=&quot;--columns--: 4 16em; --column-rule--: dotted var(--line_xf); --column-gap--: var(--sp_l); --c_margin-block-end--: var(--sp_m);&quot;&gt;
  &lt;li&gt;…&lt;/li&gt;
  &lt;li&gt;…&lt;/li&gt;
  &lt;li&gt;…&lt;/li&gt;
  &lt;li&gt;…&lt;/li&gt;
&lt;/ul&gt;
```

### Flex Layout

```HTML
&lt;div style=&quot;--container-type--: inline-size; --flex-flow--: row wrap; --gap--: var(--sp_m); --c_flex--: 1 1 100%;&quot;&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
  &lt;div style=&quot;--cq-i-m_flex--: 1 1 0%;&quot;&gt;…&lt;/div&gt;
&lt;/div&gt;
```

### Grid Layout

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

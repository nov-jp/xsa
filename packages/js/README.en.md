[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle JS (@exstyle/js)

ExStyle JS is a script that parses ExStyle properties within HTML code in real-time, generates the corresponding CSS code, and injects it into a `style` element.

## Features

* **Easy Implementation**: Offers the convenience of simply loading a script without the need for complex build processes.
* **High Flexibility**: Unlike ExStyle CSS, it allows you to combine all CSS properties with a wide variety of prefixes.
* **Lightweight Script**: While supporting a utility-first workflow, ExStyle JS is only about **9KB**. This is less than 4% of the size of Tailwind CSS v4.2 Play CDN (265KB).
* **Instant Reflection of Changes**: It monitors DOM changes made via JavaScript or browser developer tools, reflecting styling updates immediately.

## Usage Examples

### Loading via the src attribute of a script element

This is the most common method, but it may cause a Flash of Unstyled Content (FOUC). When using this in production, you may need to implement measures such as adding a loading animation.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    …
    <script src="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/packages/js/dist/exstyle.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/open-props" />
    …
  </head>
  <body>
    …
    <p style="--background--: var(--indigo-6); --color--: var(--gray-0) --padding-block--: var(--size-2); --padding-inline--: var(--size-3);"> … </p>
    …
  </body>
</html>
```

### Loading as an inline script

This method involves loading the script as an inline script to avoid the Flash of Unstyled Content (FOUC).

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    …
    <script>
    var ExStyle=function(){ … }
    /*! The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp). */ …
    //# sourceMappingURL=exstyle.min.js.map
    </script>
    <link rel="stylesheet" href="https://unpkg.com/open-props" />
    …
  </head>
  <body>
    …
    <p style="--background--: var(--indigo-6); --color--: var(--gray-0) --padding-block--: var(--size-2); --padding-inline--: var(--size-3);"> … </p>
    …
  </body>
</html>
```

### npm / yarn / pnpm

This method involves installing the package within a Node.js build process.

```Bash
npm install @exstyle/js
```

```JS
import ExStyle from '@exstyle/js';
new ExStyle().init();
```

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

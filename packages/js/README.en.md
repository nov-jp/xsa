[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle JS (@exstyle/js)

ExStyle JS is a script that parses ExStyle Properties within HTML code in real-time, generates the corresponding CSS code, and applies it via a `style` element.

## Features

* **Easy Implementation**: It offers the simplicity of just loading a script without the need for complex build processes.
* **High Flexibility**: Unlike ExStyle CSS, you can combine almost any CSS property with various prefixes.
* **Lightweight Script**: ExStyle JS, which enables a utility-first workflow, is approximately **9KB**. This is less than 4% of the size of Tailwind CSS v4.2 Play CDN (265KB).
* **Instant Reflection of Changes**: It monitors DOM changes made via JavaScript or browser developer tools and reflects styling immediately.

## Usage Examples

### Loading via the src attribute of a script element

This is the most popular method, but a Flash of Unstyled Content (FOUC) may occur. For actual production use, you may need to implement measures such as adding a loading animation.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    …
    <script src="https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle.min.js"></script>
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

This method involves loading the code as an inline script to avoid the state where unstyled content is visible.

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    …
    <script>
    var ExStyle=function(){…}();
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

---

## License

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

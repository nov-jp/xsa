[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle PostCSS (@exstyle/postcss)

ExStyle PostCSS is a tool integrated into the build process that generates CSS code from ExStyle properties found within HTML code and outputs it to a CSS file.

The engine used to generate the CSS code is nearly identical to that of ExStyle JS.

## Features

* **High Flexibility**: Unlike ExStyle CSS, it allows for the combination of all CSS properties with complex prefixes.
* **High Purity**: It scans the entire project's HTML, PHP, and JS files to extract only the ExStyle properties actually in use, ensuring that no unused CSS code is included in the final bundle.
* **Optimized Data and Transfer**: Since it results in a single CSS file, it leverages browser caching for maximum optimization.
* **Superior Developer Experience**: It integrates seamlessly with HMR (Hot Module Replacement) in tools like Vite or Webpack, reflecting changes in the browser the moment you save your HTML.

## Build Workflow

1. Scans target files such as HTML, PHP, and JS files within the `src` directory.
2. Extracts the ExStyle properties being used.
3. Generates CSS code from those properties and outputs it as a CSS file.

## Usage Example

### 1. Installation

```Bash
npm install @exstyle/postcss
```

### 2. Configuration

```postcss.config.js
import exstyle from '@exstyle/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default ( { env } ) => ( {
  plugins: [
    // ExStyle PostCSS
    exstyle( {
      // Specify files to scan
      content: [
        './src/**/*.{html,php,js}'
      ],

      // Output options
      minify: true,
    } ),

    // Process for browser compatibility
    autoprefixer(),

    // CSS compression
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

Since PostCSS performs static text analysis during the build, it may be unable to pick up dynamically constructed variable names in JS, such as `var(--${varName})`.

As ExStyle is a meta-framework designed to establish a styling infrastructure, it can coexist with existing frameworks. The following code is an example of coexisting with Tailwind CSS.

```postcss.config.js
import tailwindcss from 'tailwindcss';
import exstyle from '@exstyle/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default ( { env } ) => ( {
  plugins: [
    // Tailwind CSS (Existing design assets)
    tailwindcss(),

    // ExStyle PostCSS
    exstyle( {
      // Specify files to scan
      content: [
        './src/**/*.{html,php,js}'
      ],

      // Output options
      minify: true,
    } ),

    // Process for browser compatibility
    autoprefixer(),

    // CSS compression
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

While concurrent use is possible, care must be taken regarding priority; if selector specificity is equal, the order is determined by the PostCSS plugin sequence or the CSS loading order.

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

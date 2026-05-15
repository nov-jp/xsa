[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle PostCSS (@exstyle/postcss)

ExStyle PostCSS is a tool designed to be integrated into the Node.js build process. It generates CSS code from the ExStyle Properties found within HTML code and outputs it as a CSS file.

The engine used to generate the CSS code is largely shared with ExStyle JS.

## Features

* **High Flexibility**: Unlike ExStyle CSS, you can combine any CSS property with complex prefixes.
* **High Purity**: By scanning the entire project (HTML, PHP, JS, etc.) and extracting only the ExStyle Properties actually in use, it ensures that no unused CSS code is included in the final output.
* **Optimized Data and Transfer**: Since the process results in a single CSS file, you can benefit from browser-side caching optimizations.
* **Superior Developer Experience**: It works seamlessly with HMR (Hot Module Replacement) in tools like Vite and Webpack, reflecting style changes in the browser the moment you save your HTML.

## Build Workflow

1. Scans target files such as HTML, PHP, and JS files within the `src` directory.
2. Extracts the ExStyle Properties used within those files.
3. Generates CSS code from the extracted properties and outputs it as a CSS file.

## Usage Example

### 1. Installation

```Bash
npm install -D postcss @exstyle/postcss
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

    // Handle browser compatibility
    autoprefixer(),

    // Compress CSS file
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

Since PostCSS performs static text analysis during the build, it may not be able to pick up variable names dynamically constructed in JavaScript, such as `var(--${varName})`.

ExStyle is a meta-framework designed to establish styling infrastructure, meaning it can coexist with existing frameworks. The following code is an example of coexisting with Tailwind CSS.

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

    // Handle browser compatibility
    autoprefixer(),

    // Compress CSS file
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

While such concurrent use is possible, please be aware that when selector specificity is equal, the priority will be determined by the order of the PostCSS plugin declarations or the CSS loading order.

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

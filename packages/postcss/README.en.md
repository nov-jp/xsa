[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# XSA PostCSS (@nov-xsa/postcss)

A tool that extracts XSA properties from within the project, generates CSS code, and outputs it to a CSS file.

## Installation

```Bash
npm install @nov-xsa/postcss
```

## Example settings for postcss.config.js

```JS
import xsa from '@nov-xsa/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
export default ( { env } ) => ( {
  plugins: [
    xsa( {
      content: [
        './src/**/*.{html,php}' // Set the files to be scanned within the project.
      ],
      minify: true,
    } ),
    autoprefixer(),
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

---

The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/).

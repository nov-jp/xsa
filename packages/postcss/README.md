[English](README.md) | [日本語](README.ja.md)

---

# XSA PostCSS (@nov-xsa/postcss)

A tool that generates CSS code from XSA properties within a project and outputs it to a CSS file.

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

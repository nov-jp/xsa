[日本語](README.md) | [English](README.en.md)

---

# XSA PostCSS (@xsa/postcss)

プロジェクト内の XSAプロパティ から CSSコード の生成と CSSファイル への出力を行うツールです。

## インストール

```Bash
npm install @xsa/postcss
```

## postcss.config.js の設定例

```JS
import xsa from '@xsa/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
export default ( { env } ) => ( {
  plugins: [
    xsa( {
      content: [
        './src/**/*.{html,php}' // プロジェクト内のスキャン対象ファイルを設定
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

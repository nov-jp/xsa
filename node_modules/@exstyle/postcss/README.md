[日本語](README.md) | [English](README.en.md)

---

# ExStyle PostCSS (@exstyle/postcss)

ExStyle PostCSS は、Node.js のビルドプロセスに組み込み、HTMLコード内 の ExStyleプロパティ から CSSコード を生成し、CSSファイル を出力するツールです。

CSSコード を生成するプログラムは ExStyle JS とほぼ共通です。

## 特徴

- **高い自由度**: ExStyle CSS と異なり、すべての CSSプロパティ と複雑なプレフィックスを組み合わせることができます。
- **高い純度**: プロジェクト全体の HTML, PHP, JS などをスキャンし、使用されている ExStyleプロパティ を抽出するので、未使用の CSSコード が混入することはありません。
- **データ量・転送量の最適化**: 最終的には1つの CSSファイル が作られるため、ブラウザキャッシュによる最適化が期待できます。
- **良質な開発体験**: Vite や Webpack などの HMR (Hot Module Replacement) とシームレスに連携し、HTML を保存した瞬間にブラウザへ反映されます。

## ビルドの流れ

1. srcディレクトリ内の HTMLファイル, PHPファイル, JSファイル などの対象ファイルをスキャンします。
1. 使用されている ExStyleプロパティ を抽出します。
1. ExStyleプロパティ から CSSコード を生成し、CSSファイル にして出力します。

## 使用例

### 1. インストール

```Bash
npm install -D postcss @exstyle/postcss
```

### 2. 設定

```postcss.config.js
import exstyle from '@exstyle/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default ( { env } ) => ( {
  plugins: [
    // ExStyle PostCSS
    exstyle( {
      // スキャン対象のファイルを指定
      content: [
        './src/**/*.{html,php,js}'
      ],

      // 出力オプション
      minify: true,
    } ),

    // ブラウザ互換性のための処理
    autoprefixer(),

    // CSSファイルの圧縮
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

PostCSS はビルド時にテキストを静的に解析するため、JS で動的に組み立てた変数名 `var(--${varName})` などが拾えない場合があります。

ExStyle はスタイリング・インフラを確立するためのメタ・フレームワークなので、既存のフレームワークと共存させることもできます。次のコードは Tailwind CSS と共存させた場合の一例です。

```postcss.config.js
import tailwindcss from 'tailwindcss';
import exstyle from '@exstyle/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default ( { env } ) => ( {
  plugins: [
    // Tailwind CSS (既存の設計資産)
    tailwindcss(),

    // ExStyle PostCSS
    exstyle( {
      // スキャン対象のファイルを指定
      content: [
        './src/**/*.{html,php,js}'
      ],

      // 出力オプション
      minify: true,
    } ),

    // ブラウザ互換性のための処理
    autoprefixer(),

    // CSSファイルの圧縮
    ( 'production' === env ? cssnano() : null )
  ].filter( Boolean );
} );
```

このように併用も可能ですが、セレクタの詳細度が同じ場合、PostCSS のプラグイン記述順や CSS の読み込み順によって優先順位が決まるので注意が必要です。

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

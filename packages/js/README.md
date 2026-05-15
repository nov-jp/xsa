[日本語](README.md) | [English](README.en.md)

---

# ExStyle JS (@exstyle/js)

ExStyle JS は、リアルタイムで HTMLコード内 の ExStyleプロパティ を解析し、CSSコード を生成、style要素 で適用するスクリプトです。

## 特徴

- **導入が簡単**: 複雑なビルドプロセスを介さず、スクリプトを読み込ませるだけという手軽さです。
- **自由度が高い**: ExStyle CSS と異なり、すべての CSSプロパティ と様々なプレフィックスを組み合わせることができます。
- **軽量なスクリプト**: ユーティリティファーストな使い方もできる ExStyle JS は **約9KB**ほど。Tailwind CSS v4.2 Play CDN (265KB) の4%以下のサイズです。
- **変更を即反映**: JavaScript やブラウザのデベロッパーツールによる DOM の変更を監視し、スタイリングを即座に反映します。

## 使用例

### script要素 の src属性 で読み込む

最もポピュラーな方法ですが、スタイル未適用の状態が見えてしまう場合があります。実際の運用で使用する場合には、ローディングアニメーションを追加するなどの工夫が必要になります。

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

### インラインスクリプトとして読み込む

スタイル未適用の状態が見えてしまう状態を回避するために、インラインスクリプトとして読み込む方法です。

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

Node.js のビルドプロセスでインストールする方法です。

```Bash
npm install @exstyle/js
```

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

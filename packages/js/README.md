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
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot; /&gt;
    &hellip;
    &lt;script src=&quot;https://cdn.jsdelivr.net/gh/nov-jp/exstyle@main/css/exstyle.min.js&quot;&gt;&lt;/script&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/open-props&quot; /&gt;
    &hellip;
  &lt;/head&gt;
  &lt;body&gt;
    &hellip;
    &lt;p style=&quot;--background--: var(--indigo-6); --color--: var(--gray-0) --padding-block--: var(--size-2); --padding-inline--: var(--size-3);&quot;&gt; &hellip; &lt;/p&gt;
    &hellip;
  &lt;/body&gt;
&lt;/html&gt;
```

### インラインスクリプトとして読み込む

スタイル未適用の状態が見えてしまう状態を回避するために、インラインスクリプトとして読み込む方法です。

```HTML
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot; /&gt;
    &hellip;
    &lt;script&gt;
    var ExStyle=function(){…}();
    //# sourceMappingURL=exstyle.min.js.map
    &lt;/script&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/open-props&quot; /&gt;
    &hellip;
  &lt;/head&gt;
  &lt;body&gt;
    &hellip;
    &lt;p style=&quot;--background--: var(--indigo-6); --color--: var(--gray-0) --padding-block--: var(--size-2); --padding-inline--: var(--size-3);&quot;&gt; &hellip; &lt;/p&gt;
    &hellip;
  &lt;/body&gt;
&lt;/html&gt;
```

### npm / yarn / pnpm

Node.js のビルドプロセスでインストールする方法です。

```Bash
npm install @exstyle/js
```

---

## License

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

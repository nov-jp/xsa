[日本語](README.md) | [English](README.en.md)

---

# ExStyle AI (@exstyle/ai)

AI に exstyle.yaml を読ませることで、ExStyle のルールを理解させ、ExStyleプロパティ を使用した HTMLコード を生成できるようにします。

AI の利用形態に合わせて、以下の3つの方法が効果的です。

## 1. プロンプトの先頭に貼り付ける

新しいセッション・チャットを始める際、最初にマニュアルを流し込みます。

> 次の YAML は ExStyle の仕様書です。この仕様書を理解して、ExStyleプロパティ を使用した HTMLコード を生成してください。
> [ここに exstyle.yaml の URL かその内容を入力]

## 2. カスタム指示

ChatGPT の「Custom Instructions」、Claude の「Project」、Gemini の「Gems」に仕様書を常駐させ、「ExStyleプロパティ を使用して HTMLコード を出力」という命令をプロンプトに組み込みます。

## 3. ExStyle JS, ExStyle PHP を直接読み込ませる

ファイル解析能力が高い GPT-4o や Claude に、exstyle.js, exstyle.php のプログラムコードそのものを添付するのも効果的です。

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

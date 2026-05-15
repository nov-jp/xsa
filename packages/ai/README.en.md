[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle AI (@exstyle/ai)

By providing `exstyle.yaml` to an AI, you can enable it to understand the rules of ExStyle and generate HTML code utilizing ExStyle properties.

Depending on how you use the AI, the following three methods are effective:

## 1. Paste at the Beginning of the Prompt

When starting a new session or chat, feed the manual in first.

> Please understand the following YAML and generate HTML code using ExStyle properties.
> [https://raw.githubusercontent.com/nov-jp/exstyle/refs/heads/main/packages/ai/exstyle.yaml](https://raw.githubusercontent.com/nov-jp/exstyle/refs/heads/main/packages/ai/exstyle.yaml)

## 2. Custom Instructions

Make `exstyle.yaml` a permanent part of the AI's context using ChatGPT's "Custom Instructions," Claude's "Projects," or Gemini's "Gems." Include the instruction "Output HTML code using ExStyle properties" within your prompt.

## 3. Direct Loading of ExStyle JS or ExStyle PHP

For models with high file-analysis capabilities like GPT-4o or Claude, it is also effective to directly attach the source code of `exstyle.js` or `exstyle.php`.

---

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

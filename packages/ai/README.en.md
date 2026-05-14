[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# ExStyle AI (@exstyle/ai)

By providing **exstyle.yaml** to an AI, you can train it to understand the ExStyle logic and generate HTML code utilizing ExStyle Properties.

Depending on your AI workflow, the following three methods are most effective:

## 1. Prompt Injection (Context Seeding)

When starting a new session or chat, feed the manual as the initial context.

> "The following YAML is the ExStyle specification. Please internalize these rules and generate HTML code using ExStyle Properties from now on.
> [Insert the URL or content of exstyle.yaml here]"

## 2. System Instructions / Knowledge Bases

For persistent workflows, embed the specification into persistent configurations such as ChatGPT's **"Custom Instructions,"** Claude's **"Projects,"** or Gemini's **"Gems."** Include a core directive in the system prompt like: "Always output HTML code utilizing ExStyle Properties."

## 3. Direct Source Code Analysis

For models with advanced file analysis capabilities (e.g., GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro), attaching the actual **exstyle.js** or **exstyle.php** source code is highly effective. The AI will reverse-engineer the logic directly from the implementation to ensure accurate property generation.

---

## License

The MIT License. Copyright 2026 Nobuo Nakayama (Shimotsuki/nov-jp).

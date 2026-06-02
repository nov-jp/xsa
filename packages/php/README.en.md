[日本語](README.md) | [English](README.en.md)

This text was translated from Japanese by Google Gemini.

---

# XSA PHP (@nov-xsa/php)

A helper class for generating CSS code from XSA properties within a PHP execution environment.

## Installation

If you are using a build tool, you can install it via npm or composer.

```Bash
npm install @nov-xsa/php
```

```Bash
composer require nov-jp/xsa-php
```

## General Usage

```PHP
<?php
require_once __DIR__ . '/path/XSA.php';
ob_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <!--XSA-->
    …
  </head>
  <body>
    …
    <p style="
        --background--: var(--sheerest-blue);
        --color--: var(--blue);
        --padding-block--: calc(0.5lh - 0.5em);
        --padding-inline--: calc(1lh - 1em);
        ">
      …
    </p>
    …
  </body>
</html>
<?php
$html = ob_get_clean();
$xsa = new \XSA();
$css = $xsa->generate( $html );
if ( ! empty( $css ) ) {
  $style = "<style>{$css}</style>";
  $html = str_replace( '<!--XSA-->', $style, $html );
}
echo $html;
```

## Usage in WordPress

Add a hook to functions.php and use a helper class.

```PHP
require_once __DIR__ . '/path/XSA.php';
add_filter( 'the_content', function( $content ) {
  $xsa = new \XSA();
  $css = $xsa->generate( $content );
  if ( ! empty( $css ) ) {
    $style = "<style>@scope{{$css}}</style>";
    $content = $style . "\n" . $content;
  }
  return $content;
}, 10000 );
```

---

The MIT License. Copyright 2026 Nobuo Nakayama @ Shimotsuki (https://github.com/nov-jp/).

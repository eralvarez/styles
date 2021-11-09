# Ztyle | Font

## System variables

```php
$ui_fontFamily: Segoe UI !default;
$ui_fontLight: 100 !default;
$ui_fontNormal: 400 !default;
$ui_fontBold: 700 !default;
$ui_fontSizeBottomLimit: 0 !default;
$ui_fontSizeTopLimit: 64 !default;
```

## Internal variables

n/a

## Available prefixes

### Mobile devices:
- `mobile`
- `tablet`
- `desktop`

### OS Theme: 
- `light`
- `dark`

## Available classes

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{font/f}-{light/l}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{font/f}-{normal/n}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{font/f}-{bold/b}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{font/f}-{weight/w}-{100 -> 900}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{font/f}-{$ui_fontSizeBottomLimit -> $ui_fontSizeTopLimit}`

## Examples

- `font-light`
- `font-normal`
- `f-bold`
- `font-weight-200`
- `font-40`
- `f-28`
- `mobile:font-weight-200`
- `light:font-40`
- `desktop:f-28`

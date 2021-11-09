# Ztyle | Margin & Padding

## System variables

```php
$ui_marginSizeBottomLimit: 0 !default;
$ui_marginSizeTopLimit: 400 !default;
$ui_paddingSizeBottomLimit: 0 !default;
$ui_paddingSizeTopLimit: 400 !default;
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

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-no`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{x/y}-no`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{$ui_marginSizeBottomLimit -> $ui_marginSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{top/t}-{$ui_marginSizeBottomLimit -> $ui_marginSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{right/r}-{$ui_marginSizeBottomLimit -> $ui_marginSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{bottom/b}-{$ui_marginSizeBottomLimit -> $ui_marginSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{left/l}-{$ui_marginSizeBottomLimit -> $ui_marginSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{margin/m}-{x/y}-{$ui_marginSizeBottomLimit -> $ui_marginSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-no`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{x/y}-no`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{$ui_paddingSizeBottomLimit -> $ui_paddingSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{top/t}-{$ui_paddingSizeBottomLimit -> $ui_paddingSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{right/r}-{$ui_paddingSizeBottomLimit -> $ui_paddingSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{bottom/b}-{$ui_paddingSizeBottomLimit -> $ui_paddingSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{left/l}-{$ui_paddingSizeBottomLimit -> $ui_paddingSizeTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{padding/p}-{x/y}-{$ui_paddingSizeBottomLimit -> $ui_paddingSizeTopLimit}`

## Examples

- `margin-no`
- `margin-x-no`
- `margin-x-20`
- `m-y-20`
- `margin-top-20`
- `margin-right-20`
- `padding-no`
- `padding-x-no`
- `padding-x-20`
- `p-y-20`
- `padding-top-20`
- `padding-right-20`
- `mobile:m-y-20`
- `dark:margin-top-20`
- `desktop:margin-right-20`
- `mobile:p-y-20`
- `dark:padding-top-20`
- `desktop:padding-right-20`


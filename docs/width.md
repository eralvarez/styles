# Ztyle | Width

## System variables

```php
$ui_widthPixelBottomLimit: 0 !default;
$ui_widthPixelTopLimit: 400 !default;
$ui_widthPercentageBottomLimit: 0 !default;
$ui_widthPercentageTopLimit: 100 !default;
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

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{width/w}-${$ui_widthPixelBottomLimit -> $ui_widthPixelTopLimit}px`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{width/w}-${$ui_widthPercentageBottomLimit -> $ui_widthPercentageTopLimit}`

## Examples

- `width-200px`
- `width-100`
- `mobile:width-200px`
- `desktop:width-100`

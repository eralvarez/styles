# Ztyle | Height

## System variables

```php
$ui_heightPixelBottomLimit: 0 !default;
$ui_heightPixelTopLimit: 400 !default;
$ui_heightPercentageBottomLimit: 0 !default;
$ui_heightPercentageTopLimit: 400 !default;
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

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{height/h}-{$ui_heightPixelBottomLimit -> $ui_heightPixelTopLimit}px`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{height/h}-{$ui_heightPercentageBottomLimit -> $ui_heightPercentageTopLimit}`

## Examples

- `height-20px`
- `height-100`
- `mobile:height-20px`
- `light:height-100`

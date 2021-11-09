# Ztyle | Color

## System variables

```php
$ui_colorPrimary: rgb(19, 102, 245) !default;
$ui_colorSecondary: rgb(97, 106, 113) !default;
$ui_colorSuccess: rgb(29, 124, 77) !default;
$ui_colorDanger: rgb(213, 44, 64) !default;
$ui_colorWarning: rgb(254, 183, 51) !default;
$ui_colorLight: rgb(247, 248, 249) !default;
$ui_colorDark: rgb(30, 33, 36) !default;
$ui_colorBackgroundPercentageLevelBottomLimit: -10 !default;
$ui_colorBackgroundPercentageLevelTopLimit: 10 !default;
$ui_colorPercentageLevelBottomLimit: -10 !default;
$ui_colorPercentageLevelTopLimit: 10 !default;
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

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{background/bg}-{$color}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{background/bg}-{$color}-{darker/d}-{$ui_colorBackgroundPercentageLevelBottomLimit -> $ui_colorBackgroundPercentageLevelTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{background/bg}-{$color}-{lighter/l}-{$ui_colorBackgroundPercentageLevelBottomLimit -> $ui_colorBackgroundPercentageLevelTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}color-{$color}-{darker/d}-{$ui_colorPercentageLevelBottomLimit -> $ui_colorPercentageLevelTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}color-{$color}-{lighter/l}-{$ui_colorPercentageLevelBottomLimit -> $ui_colorPercentageLevelTopLimit}`

## Examples

- `background-dark`
- `background-primary-darker-20`
- `bg-secondary-l-8`
- `color-primary`
- `color-dark`
- `mobile:color-primary`
- `dark:color-dark`

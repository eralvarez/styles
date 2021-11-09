# Ztyle | Button

## System variables

```php
$ui_buttonBorderRadius: $ui_borderRadius !default;
$ui_buttonPrimaryFontColor: $ui_colorLight !default;
$ui_buttonSecondaryFontColor: $ui_colorLight !default;
$ui_buttonSuccessFontColor: $ui_colorLight !default;
$ui_buttonDangerFontColor: $ui_colorLight !default;
$ui_buttonWarningFontColor: $ui_colorDark !default;
$ui_buttonLightFontColor: $ui_colorDark !default;
$ui_buttonDarkFontColor: $ui_colorLight !default;
```

## Internal variables

- `$buttonSizes`: "sm", "md", "lg";

## Available prefixes

### Mobile devices:
- `mobile`
- `tablet`
- `desktop`

### OS Theme: 
- `light`
- `dark`

## Available classes

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{button/btn}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{button/btn}-link`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{button/btn}-{$buttonSize}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{button/btn}-{$color}`

## Examples

- `btn-link`
- `button-md`
- `button-primary`
- `btn-dark`
- `mobile:btn-light`
- `dark:btn-dark`

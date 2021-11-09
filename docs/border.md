# Ztyle | Border

## System variables

```php
$ui_borderRadius: 4px !default;
$ui_borderBottomLimit: 0 !default;
$ui_borderTopLimit: 30 !default;
$ui_borderRadiusBottomLimit: 20 !default;
$ui_borderRadiusTopLimit: 20 !default;
```

## Internal variables

- `$borderStyles`: dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
- `$borderSides`: top, right, bottom, left;
- `$borderRadiusSides`: top-left, top-right, bottom-left, bottom-right;

## Available prefixes

### Mobile devices:
- `mobile`
- `tablet`
- `desktop`

### OS Theme: 
- `light`
- `dark`

## Available classes

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{border/b}-{no/0}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{border/b}-{$borderStyle}-{$color}-{$ui_borderBottomLimit -> $ui_borderTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{border/b}-{$borderSide}-{$borderStyle}-{$color}-{$ui_borderBottomLimit -> $ui_borderTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{border/b}-{$borderSide}-{no/0}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{border/b}-{radius/r}-{$borderRadiusSide}-{$ui_borderRadiusBottomLimit -> $ui_borderRadiusTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{border/b}-{radius/r}-{$borderRadiusSide}-{no/0}`

## Examples

- `border-no`
- `border-dotted-primary-2`
- `b-solid-primary-30`
- `border-radius-top-left-18`
- `border-radius-top-left-no`
- `mobile:border-radius-top-left-18`
- `dark:border-radius-top-left-no`

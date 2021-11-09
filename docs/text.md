# Ztyle | Text

## System variables

```php
n/a
```

## Internal variables

- `$textAligns`: left, right, center, justify, initial;
- `$textTransforms`: capitalize, uppercase, lowercase;

## Available prefixes

### Mobile devices:
- `mobile`
- `tablet`
- `desktop`

### OS Theme: 
- `light`
- `dark`

## Available classes

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{text/t}-{align/a}-{$textAlign}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-{text/t}-{$textTransform}`

## Examples

- `text-align-left`
- `t-a-left`
- `t-a-center`
- `text-capitalize`
- `text-uppercase`
- `mobile:t-a-center`
- `desktop:text-capitalize`

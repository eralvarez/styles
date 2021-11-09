# Ztyle | Column

## System variables

```php
$ui_columnBottomLimit: 1 !default;
$ui_columnTopLimit: 12 !default;
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

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{column/col}-{$ui_columnBottomLimit -> $ui_columnTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}{column/col}-{sm/md/lg}-{$ui_columnBottomLimit -> $ui_columnTopLimit}`

## Examples

- `column-10`
- `col-2`
- `col-sm-3`
- `mobile:col-sm-3`
- `desktop:column-12`

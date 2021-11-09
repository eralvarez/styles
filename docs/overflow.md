# Ztyle | Overflow

## System variables

```php
n/a
```

## Internal variables

- `$overflowOptions`: visible, hidden, scroll, auto;

## Available prefixes

### Mobile devices:
- `mobile`
- `tablet`
- `desktop`

### OS Theme: 
- `light`
- `dark`

## Available classes

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-overflow-{$overflowOption}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}-overflow-{x/y}-{$overflowOption}`

## Examples

- `overflow-hidden`
- `overflow-x-scroll`
- `overflow-y-scroll`
- `mobile:overflow-hidden`
- `dark:overflow-x-scroll`
- `light:overflow-y-scroll`

# Ztyle | Display

## System variables

```php
$ui_displayFlexGrowBottomLimit: 0 !default;
$ui_displayFlexGrowTopLimit: 20 !default;
```

## Internal variables

- `$positions`: static, relative, fixed, absolute, sticky;
- `$displays`: none, inline, block, inline-block;
- `$flex-directions`: row, row-reverse, column, column-reverse;
- `$align-items`: stretch, center, flex-start, flex-end, baseline;
- `$justify-contents`: flex-start, flex-end, center, space-between, space-around, space-evenly;

## Available prefixes

### Mobile devices:
- `mobile`
- `tablet`
- `desktop`

### OS Theme: 
- `light`
- `dark`

## Available classes

- `{{mobileDevice/OS-Theme + ":"}/no-prefix}flex-align-items-{$alignItem}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}flex-justify-content-{$justifyContent}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}flex-direction-{$direction}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}flex-grow-{$ui_displayFlexGrowBottomLimit -> $ui_displayFlexGrowTopLimit}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}flex-wrap`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}position-{$position}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}display-{$display}`
- `{{mobileDevice/OS-Theme + ":"}/no-prefix}block`

## Examples

- `flex-align-items-center`
- `flex-grow-1`
- `flex-wrap`
- `position-absolute`
- `display-none`
- `block`
- `mobile:position-absolute`
- `tablet:display-none`
- `dark:block`

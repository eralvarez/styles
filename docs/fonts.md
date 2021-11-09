# Ztyle | Fonts

<!-- INDEX -->

## System variables

| Variable | Usage |
| --- | --- |
| `$ui_font-family` | in `html,body` selector like: `font-family: $ui_font-family, sans-serif;`
| `$ui_font-normal` | in `html,body` selector like: `font-weight: $ui_font-normal;`

## Available prefixes

Mobile devices: mobile/tablet/desktop

OS Theme: light/dark

Example:
```html
<span class="f-32 mobile:font-28 tablet:f-30"></span>
```

## CSS Classes

| CSS class | Css property | Alternative class | Values | Examples
| --- | --- | --- | --- | --- |
| `font-light` | `font-weight: $ui_font-light;` | `{parent/parent-alt}-l` | n/a | `font-light` <br> `f-light` <br> `f-l` |
| `font-normal` | `font-weight: $ui_font-normal;` | `{parent/parent-alt}-n` | n/a | `font-normal` <br> `f-normal` <br> `f-n` |
| `font-bold` | `font-weight: $ui_font-bold;` | `{parent/parent-alt}-b` | n/a | `font-bold` <br> `f-bold` <br> `f-b` |
| `font-weight-{values}` | `font-weight: {values};` | `{parent/parent-alt}-w-{values}` | `100, 200, 300, 400, 500, 600, 700, 800, 900` | `font-weight-200` <br> `f-weight-100` <br> `f-w-500` |
| `font-{values}` | `font-size: {values}px;` | `{parent/parent-alt}-{values}` | `0 through 100` | `font-22` <br> `f-18` |

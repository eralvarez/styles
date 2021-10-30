# Ztyle | Fonts

## System variables

| Variable | Usage |
| --- | --- |
| `$ui_font-family` | in `html,body` selector like: `font-family: $ui_font-family, sans-serif;`
| `$ui_font-normal` | in `html,body` selector like: `font-weight: $ui_font-normal;`

## CSS Classes

| CSS class | Css property | Alternative class | Values | Examples
| --- | --- | --- | --- | --- |
| `font` | n/a | `f` | n/a | n/a |
| `font-light` | `font-weight: $ui_font-light;` | `{parent/parent-alt}-l` | n/a | `font-light` <br> `f-light` <br> `f-l` |
| `font-normal` | `font-weight: $ui_font-normal;` | `{parent/parent-alt}-n` | n/a | `font-normal` <br> `f-normal` <br> `f-n` |
| `font-bold` | `font-weight: $ui_font-bold;` | `{parent/parent-alt}-b` | n/a | `font-bold` <br> `f-bold` <br> `f-b` |
| `font-weight-{values}` | `font-weight: {values};` | `{parent/parent-alt}-w-{values}` | `100, 200, 300, 400, 500, 600, 700, 800, 900` | `font-weight-200` <br> `f-weight-100` <br> `f-w-500` |
| `font-{values}` | `font-size: {values}px;` | `{parent/parent-alt}-{values}` | `0 through 100` | `font-22` <br> `f-18` |

<!--EXAMPLES:START-->
<!-- ## Examples

<h4 class="margin-no font-light">Light font using "font-light" class</h4>
<h4 class="margin-no font-normal">Normal font using "font-normal" class</h4>
<h4 class="margin-no font-bold">Bold font using "font-bold" class</h4>
<h4 class="margin-no font-w-100">Font using "font-w/weight-100" class</h4>
<h4 class="margin-no font-w-200">Font using "font-w/weight-200" class</h4>
<h4 class="margin-no font-w-300">Font using "font-w/weight-300" class</h4>
<h4 class="margin-no font-w-400">Font using "font-w/weight-400" class</h4>
<h4 class="margin-no font-w-500">Font using "font-w/weight-500" class</h4>
<h4 class="margin-no font-w-600">Font using "font-w/weight-600" class</h4>
<h4 class="margin-no font-w-700">Font using "font-w/weight-700" class</h4>
<h4 class="margin-no font-w-800">Font using "font-w/weight-800" class</h4>
<h4 class="margin-no font-w-900">Font using "font-w/weight-900" class</h4> -->
<!--EXAMPLES:END-->
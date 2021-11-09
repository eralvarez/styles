# Ztyle

Bunch of CSS classes.

`Ztyle` is not intended to be a small css library, the main goal the team follows is to have all minimum needed classes to build a project with almost no extra `CSS`.

The minified compiled output is a `~14mb` file. Loading the full `styles.css` or `styles.min.css` can result in a very bad practice to your project. You should **ALWAYS** use a treeshake-css tool.

[![npm version](https://badge.fury.io/js/ztyle.svg)](https://badge.fury.io/js/ztyle)

## Docs

- [Border](./border.md)
- [Button](./button.md)
- [Color](./color.md)
- [Column](./column.md)
- [Container](./container.md)
- [Cursor](./cursor.md)
- [Display](./display.md)
- [Elevation](./elevation.md)
- [Font](./font.md)
- [Height](./height.md)
- [Input](./input.md)
- [Margin & Padding](./margin-padding.md)
- [Overflow](./overflow.md)
- [Table](./table.md)
- [Text](./text.md)
- [Width](./width.md)

## Installation

Install `ztyle` with your favorite package manager.

```shell
# with npm
> npm install ztyle --save

# with yarn
> yarn add ztyle
```

## Usage

Load `ztyle/styles.scss` in your main SASS file.

```css
@import "ztyle/styles.scss";
```

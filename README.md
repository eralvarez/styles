# Ztyle

[![npm version](https://badge.fury.io/js/ztyle.svg)](https://badge.fury.io/js/ztyle)

Bunch of CSS classes and react components (coming soon).

`Ztyle` is not intended to be a small css library, the main goal the team follows is to have all minimum needed classes to build a project with almost no extra `CSS`.

The minified compiled output is a `~1mb` file. Loading the full `styles.css` can result in a very bad practice to your project. You should **ALWAYS** use a treeshake-css tool.

<!-- MD_DOCS:START -->
## Docs

- [Fonts](./docs/fonts.md)

<!-- MD_DOCS:END -->

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

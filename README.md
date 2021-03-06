# react-adjustable

Check out the [demo](UPDATE_ME).

A react library that allows you to place custom adjustable/resizeable grid components throughout your codebase.

`react-adjustable` exports two components, `Adjustable`, the parent container and, `Child`, the wrapper for any children. See [demo](UPDATE_ME) for examples.

## Features

⏳ Saves you time by handling all the annoying event listeners for you.

⭐️ Flexibility to use proper semantic HTML (both components accept an `as` prop!)

🐑 Simplicity -- no need to pass multiple breakpoints, if each child has a `minWidth` we'll auto flex for you!

## Requirement

To use `react-adjustable`, you must use `styled-component > 4.1` as it is a peer dependency.

## Installation

```sh
$ yarn add react-adjustable
// or
$ npm i react-adjustable
```

## Example

**_NOTE:_** most arguments are provided defaults (see [Full API](#full-api) below) with the only required one being `width` on the `<Child>` component, however it is strongly recommended to include `minWidth` as well. (see [demo](UPDATE_ME) for additional examples).

```js
import React from 'react';
import { Adjustable, Child } from 'react-adjustable';

const SomeComponent = () => (
    <Adjustable height="100vh" as="main">
      <Child adjust={{
        width: '50%',
        minWidth: '300px'
        resizeable: true,
        resizeDir: 'both'
      }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </Child>
      <Child adjust={{
        as: 'article',
        width: '50%',
        minWidth: '300px',
        height: '450px',
        minHeight: '350px'
      }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </Child>
    </Adjustable>
)

export default SomeComponent;
```

## [Full API](#full-api)

### `<Parent />`

### Props:

```js
interface ParentProps {
  flexDirection?: 'row' | 'column';
  height?: string;
  as?: keyof JSX.IntrinsicElements;
}
```

**Defaults**:

```js
 {
   flexDirection: 'row',
   height: '100%',
   as: 'div',
 }
```

### `<Child />`

**_Note:_**

- `<Child />` includes a `forwardRef` wrapper, so feel free to pass it a `ref` if need be.
- all additional props passed to child are forwarded to the styled component so you **_could_** pass a style prop to override things if you were so inclined.

### Props:

```js
interface ChildProps {
  adjust: {
    width: string;
    resizeDir?: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';
    resizeable?: boolean;
    minWidth?: string;
    height?: string;
    minHeight?: string;
    as?: keyof JSX.IntrinsicElements;
  };
}
```

**Defaults**:

```js
  {
    width: 'n/a',
    resizeable: false,
    resizeDir: 'n/a',
    as: 'div',
    minWidth: 'min-content',
    height: '100%',
    minHeight: '100%',
  }
```

## License

**[MIT](LICENSE)** Licensed

## Contributors

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

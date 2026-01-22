import type * as ReactJsxRuntime from 'react/jsx-runtime';

declare module 'react' {
  interface ReactHTML {
    [key: string]: unknown;
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Element = ReactJsxRuntime.JSX.Element;
    type IntrinsicElements = ReactJsxRuntime.JSX.IntrinsicElements;
    type ElementChildrenAttribute =
      ReactJsxRuntime.JSX.ElementChildrenAttribute;
  }
}

export * from './build/ts/src/index';

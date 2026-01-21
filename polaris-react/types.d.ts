import type * as React from 'react';

declare module 'react' {
  interface ReactHTML {
    [key: string]: unknown;
  }
}

declare global {
  namespace JSX {
    type Element = React.JSX.Element;
    type IntrinsicElements = React.JSX.IntrinsicElements;
    type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute;
  }
}

export * from './build/ts/src/index';

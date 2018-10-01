# Disallow the `any` type annotation (ts/no-any)

Forbid the usage of the `any` type annotation in variable declarations.

## Rule Details

The following patterns are considered errors:

```ts
const x: any = 45;

export interface Baz = {
  foo: any;
};

export interface Bar = {
  baz: ReadonlyArray<any>;
};

function foobar(x: any) {}

class MicroBaz {
  classField: any[];
}
```

## When not to use

When you encounter situations where you do not posses stronger type information, such as a JS library without type definitions. This is even more important if compiling your code with the --strict compiler flag, as it also forbids implicit any declarations.

```ts
import { awesomeFunction } from "./javascriptLibrary";

const fn: any = awesomeFunction;
```

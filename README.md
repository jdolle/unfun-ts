# unfun-ts
[![Maintainability](https://api.codeclimate.com/v1/badges/8f9c1a0cb3f5c1857bd1/maintainability)](https://codeclimate.com/github/jdolle/unfun-ts/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/8f9c1a0cb3f5c1857bd1/test_coverage)](https://codeclimate.com/github/jdolle/unfun-ts/test_coverage) [![CircleCI](https://circleci.com/gh/jdolle/unfun-ts.svg?style=shield&circle-token=8a84ce64e98e1931fcfaea27b0ad3ba13f147c92)](https://circleci.com/gh/jdolle/unfun-ts)

Practical helpers to unfunctionalize fp-ts types

## Description
Functional programming is powerful, but not always the most practical. This package encourages using functional programming in Typescript using [`fp-ts`](https://github.com/gcanti/fp-ts) by providing a very practical way to interact with the broader, imperative codebase.

## Install
`unfun-ts` is a utility library for `fp-ts`. Therefore `fp-ts` is a peer dependency of `unfun-ts`.

```
yarn add unfun-ts
yarn add fp-ts@^2.0.0
```

## Usage

```ts
import * as UE from "unfun-ts/lib/Either";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/pipeable";

// const nullyValue: undefined | number;
try {
  const value = pipe(
    nullyValue,
    E.fromNullable("nully"),
    UE.getOrThrow(),
  );
} catch (bad) {
  console.error(`The value was ${bad}`);
}
```
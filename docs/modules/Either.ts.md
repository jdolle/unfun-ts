---
title: Either.ts
nav_order: 1
parent: Modules
---

# Either overview

Added in v0.0.1

Helpers for Eithers

---

<h2 class="text-delta">Table of contents</h2>

- [getOrThrow](#getorthrow)
- [toTuple](#totuple)

---

# getOrThrow

**Signature**

```ts
export function getOrThrow<E, A>(either: E.Either<E, A>): A { ... }
```

Added in v0.0.1

Throws the left value if the either is a left, otherwise retuns the right value

# toTuple

**Signature**

```ts
export function toTuple<E, A>(
  either: E.Either<E, A>,
): [E | undefined, A | undefined] { ... }
```

Added in v1.1.0

Returns a tuple matching the either's state.
If the either is a left, this tuple will be [leftValue, undefined]
If the either is a right, this tuple will be [undefined, rightValue]

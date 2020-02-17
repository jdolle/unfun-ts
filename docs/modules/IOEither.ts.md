---
title: IOEither.ts
nav_order: 3
parent: Modules
---

# IOEither overview

Added in v1.0.0

Helpers for IOEithers

---

<h2 class="text-delta">Table of contents</h2>

- [toThrowingIO](#tothrowingio)

---

# toThrowingIO

**Signature**

```ts
export function toThrowingIO<E, A>(ioe: IOE.IOEither<E, A>): IO.IO<A> { ... }
```

Added in v0.0.1
Converts a IOEither to a IO. If the IOEither is a left, this IO will throw the left value.

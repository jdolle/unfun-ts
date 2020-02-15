---
title: either.ts
nav_order: 1
parent: Modules
---

# either overview

Added in v0.0.1

Helpers for Eithers

---

<h2 class="text-delta">Table of contents</h2>

- [getOrThrow](#getorthrow)

---

# getOrThrow

**Signature**

```ts
export function getOrThrow<E, A>(either: E.Either<E, A>): A { ... }
```

Added in v0.0.1

Throws the left value if the either is a left, otherwise retuns the right value

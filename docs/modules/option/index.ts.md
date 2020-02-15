---
title: option/index.ts
nav_order: 3
parent: Modules
---

# index overview

Added in v0.0.1

Helpers for Options

---

<h2 class="text-delta">Table of contents</h2>

- [getOrThrow](#getorthrow)

---

# getOrThrow

**Signature**

```ts
export function getOrThrow<E, A>(option: O.Option<A>, onNone: () => E): A { ... }
```

Added in v0.0.1

Throws an error if the option evaluates to none

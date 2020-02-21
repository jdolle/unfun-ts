---
title: Option.ts
nav_order: 4
parent: Modules
---

# Option overview

Added in v0.0.1

Helpers for Options

---

<h2 class="text-delta">Table of contents</h2>

- [getOrThrow](#getorthrow)
- [orElse](#orelse)

---

# getOrThrow

**Signature**

```ts
export function getOrThrow<E, A>(onNone: () => E): (o: O.Option<A>) => A { ... }
```

Added in v0.0.1

Throws an error if the option evaluates to none

# orElse

**Signature**

```ts
export function orElse<A>(onNone: () => void): (o: O.Option<A>) => O.Option<A> { ... }
```

Added in v2.0.0

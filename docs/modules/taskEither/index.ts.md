---
title: taskEither/index.ts
nav_order: 4
parent: Modules
---

# index overview

Added in v0.0.1

Helpers for TaskEithers

---

<h2 class="text-delta">Table of contents</h2>

- [toThrowingTask](#tothrowingtask)

---

# toThrowingTask

**Signature**

```ts
export function toThrowingTask<E, A>(
  taskEither: TE.TaskEither<E, A>,
): T.Task<A> { ... }
```

Added in v0.0.1
Converts a TaskEither to a Task. If the TaskEither is a left, this task will throw the left value.

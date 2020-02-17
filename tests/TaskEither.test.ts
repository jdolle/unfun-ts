import { TaskEither } from '../src/index'
import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'

describe('toThrowingTask', () => {
  it('should return a task that when called returns a Right', async () => {
    const task = TaskEither.toThrowingTask(TE.fromEither(E.right('Success')))
    await expect(task()).resolves.toMatchInlineSnapshot(`"Success"`)
  })

  it('should return a task that when called throws the Left', async () => {
    const task = TaskEither.toThrowingTask(
      TE.fromEither(E.left(new Error('Nothing to be seen here'))),
    )
    await expect(task()).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Nothing to be seen here"`,
    )
  })
})

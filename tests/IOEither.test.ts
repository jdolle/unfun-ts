import { IOEither } from '../src/index'
import * as IOE from 'fp-ts/lib/IOEither'
import * as E from 'fp-ts/lib/Either'

describe('toThrowingIO', () => {
  it('should return a io that when called returns a Right', async () => {
    const io = IOEither.toThrowingIO(IOE.fromEither(E.right('Success')))
    await expect(io()).toMatchInlineSnapshot(`"Success"`)
  })

  it('should return a io that when called throws the Left', async () => {
    const io = IOEither.toThrowingIO(
      IOE.fromEither(E.left(new Error('Nothing to be seen here'))),
    )
    await expect(io).toThrowErrorMatchingInlineSnapshot(
      `"Nothing to be seen here"`,
    )
  })
})

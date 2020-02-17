import { Either } from '../src/index'
import * as E from 'fp-ts/lib/Either'

describe('getOrThrow', () => {
  it('should return the value when passed a Right', () => {
    expect(Either.getOrThrow(E.right('Success'))).toMatchInlineSnapshot(
      `"Success"`,
    )
  })

  it('should throw the left when passed a Left', () => {
    expect(() =>
      Either.getOrThrow(E.left(new Error('Kaput'))),
    ).toThrowErrorMatchingInlineSnapshot(`"Kaput"`)
  })
})

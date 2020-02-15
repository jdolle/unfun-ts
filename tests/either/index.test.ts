import { either } from '../../src/index'
import * as E from 'fp-ts/lib/Either'

describe('getOrThrow', () => {
  it('should return the value when passed a Right', () => {
    expect(either.getOrThrow(E.right('Success'))).toMatchInlineSnapshot(
      `"Success"`,
    )
  })

  it('should throw the left when passed a Left', () => {
    expect(() =>
      either.getOrThrow(E.left(new Error('Kaput'))),
    ).toThrowErrorMatchingInlineSnapshot(`"Kaput"`)
  })
})

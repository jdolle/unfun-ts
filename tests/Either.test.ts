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

describe('toTuple', () => {
  it('should return an array [undefined, right] when passed a Right', () => {
    expect(Either.toTuple(E.right('success'))).toEqual([undefined, 'success'])
  })

  it('should return an array [left, undefined] when passed a Left', () => {
    const err = new Error('Kaput')
    expect(Either.toTuple(E.left(err))).toEqual([err, undefined])
  })
})

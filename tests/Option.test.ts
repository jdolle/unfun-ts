import { Option } from '../src/index'
import * as O from 'fp-ts/lib/Option'

function onNone() {
  return new Error('Nothing to be seen here')
}

describe('getOrThrow', () => {
  it('should return the value when passed a Some', () => {
    expect(Option.getOrThrow(O.some('Success'), onNone)).toMatchInlineSnapshot(
      `"Success"`,
    )
  })

  it('should throw the left when passed a Left', () => {
    expect(() =>
      Option.getOrThrow(O.none, onNone),
    ).toThrowErrorMatchingInlineSnapshot(`"Nothing to be seen here"`)
  })
})

import { Option } from '../src/index'
import * as O from 'fp-ts/lib/Option'

function onNone(): Error {
  return new Error('Nothing to be seen here')
}

describe('getOrThrow', () => {
  it('should return the value when passed a Some', () => {
    expect(Option.getOrThrow(onNone)(O.some('Success'))).toMatchInlineSnapshot(
      `"Success"`,
    )
  })

  it('should throw the left when passed a None', () => {
    expect(() =>
      Option.getOrThrow(onNone)(O.none),
    ).toThrowErrorMatchingInlineSnapshot(`"Nothing to be seen here"`)
  })
})

describe('orElse', () => {
  it('should call the orElse callback when passed a None', () => {
    const cb = jest.fn()
    Option.orElse(cb)(O.some('Success'))
    expect(cb).not.toHaveBeenCalled()
  })

  it('should not call the orElse callback when passed a Some', () => {
    const cb = jest.fn()
    Option.orElse(cb)(O.none)
    expect(cb).toHaveBeenCalled()
  })
})

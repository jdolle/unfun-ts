/**
 * @since 0.0.1
 *
 * Helpers for Options
 */

import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { identity } from 'fp-ts/lib/function'
import { throwError } from './util'

/**
 * @since 0.0.1
 *
 * Throws an error if the option evaluates to none
 * @param onNone Lazy error to be thrown if the option evaluates to none,
 */
export function getOrThrow<E, A>(onNone: () => E): (o: O.Option<A>) => A {
  return (option: O.Option<A>) => {
    return pipe(
      option,
      O.fold(() => throwError(onNone()), identity),
    )
  }
}

/**
 * @since 2.0.0
 * @param onNone callback if the option is none. Useful alongside `pipe` for debugging/logging
 * missing data. This is not intended to be used to throw errors on None cases. For that,
 * use `getOrThrow`.
 */
export function orElse<A>(onNone: () => void): (o: O.Option<A>) => O.Option<A> {
  return (option: O.Option<A>) => {
    if (O.isNone(option)) {
      onNone()
    }
    return option
  }
}

/**
 * @since 0.0.1
 *
 * Helpers for Eithers
 */

import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import { identity } from 'fp-ts/lib/function'
import { throwError } from './util'

/**
 * @since 0.0.1
 *
 * Throws the left value if the either is a left, otherwise retuns the right value
 *
 * @param either Either to extract value from
 */
export function getOrThrow<E, A>(either: E.Either<E, A>): A {
  return pipe(either, E.fold(throwError, identity))
}

/**
 * @since 1.1.0
 *
 * Returns a tuple matching the either's state.
 * If the either is a left, this tuple will be [leftValue, undefined]
 * If the either is a right, this tuple will be [undefined, rightValue]
 *
 * @param either Either to extract value from
 */
export function toTuple<E, A>(
  either: E.Either<E, A>,
): [E | undefined, A | undefined] {
  return pipe(
    either,
    E.fold<E, A, [E | undefined, A | undefined]>(
      left => [left, undefined],
      right => [undefined, right],
    ),
  )
}

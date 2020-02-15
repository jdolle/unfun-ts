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

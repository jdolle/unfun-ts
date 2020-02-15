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
 *
 * @param option Option to extract value from
 * @param onNone Lazy error to be thrown if the option evaluates to none,
 */
export function getOrThrow<E, A>(option: O.Option<A>, onNone: () => E): A {
  return pipe(
    option,
    O.fold(() => throwError(onNone()), identity),
  )
}

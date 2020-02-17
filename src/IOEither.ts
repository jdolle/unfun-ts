/**
 * @since 1.0.0
 *
 * Helpers for IOEithers
 */

import * as IOE from 'fp-ts/lib/IOEither'
import * as IO from 'fp-ts/lib/IO'
import { pipe } from 'fp-ts/lib/pipeable'
import { throwError } from './util'

/**
 * @since 0.0.1
 * Converts a IOEither to a IO. If the IOEither is a left, this IO will throw the left value.
 */
export function toThrowingIO<E, A>(ioe: IOE.IOEither<E, A>): IO.IO<A> {
  return pipe(ioe, IOE.fold(throwError, IO.of))
}

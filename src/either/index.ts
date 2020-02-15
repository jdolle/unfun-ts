import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import { identity } from 'fp-ts/lib/function'
import { throwError } from '../util'

export function getOrThrow<E, A>(either: E.Either<E, A>): A {
  return pipe(either, E.fold(throwError, identity))
}

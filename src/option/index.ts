import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { identity } from 'fp-ts/lib/function'
import { throwError } from '../util'

export function getOrThrow<E, A>(option: O.Option<A>, onNone: () => E): A {
  return pipe(
    option,
    O.fold(() => throwError(onNone()), identity),
  )
}

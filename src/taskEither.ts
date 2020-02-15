/**
 * @since 0.0.1
 * 
 * Helpers for TaskEithers
 */

import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'
import { pipe } from 'fp-ts/lib/pipeable'
import { throwError } from './util'

/**
 * @since 0.0.1
 * Converts a TaskEither to a Task. If the TaskEither is a left, this task will throw the left value.
 */
export function toThrowingTask<E, A>(
  taskEither: TE.TaskEither<E, A>,
): T.Task<A> {
  return pipe(taskEither, TE.fold(throwError, T.of))
}

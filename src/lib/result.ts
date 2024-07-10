export type Result<S, E = Error> =
  | { type: "success"; data: S }
  | { type: "error"; error: E };

export function makeSuccess<S>(data: S): Result<S> {
  return { type: "success", data };
}

export function makeError<E = Error>(error: E): Result<never, E> {
  return { type: "error", error };
}

export const makeResult = {
  success: makeSuccess,
  error: makeError,
};

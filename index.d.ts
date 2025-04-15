export enum ErrorType {
  BaseError = 0,
  AggregateError = 1,
  AssertionError = 2,
  RangeError = 3,
  ReferenceError = 4,
  SyntaxError = 5,
  TypeError = 6,
  NativeAssertionError = 7
}

export function immediateError(message?: string, errorType?: ErrorType | Function): void
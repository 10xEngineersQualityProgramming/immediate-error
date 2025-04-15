# Immediate-error

This is a utility to throw an error.

```javascript

const { immediateError, ErrorType } = require('immediate-error')

immediateError() // this will throw a regular Error with the default message of "ERROR!"

immediateError('Aaaaah') // this will throw a regular Error with the message "Aaaaah"

immediateError('Aaaaah', ErrorType.BaseError) // does the same thing as above

immediateError('Aggregate error', ErrorType.AggregateError) // throws an AggregateError

immediateError('Assertion error', ErrorType.AssertionError) // throws an AssertionError (from the assert-fn module)

immediateError('Assertion error', ErrorType.NativeAssertionError) // throws an AssertionError (from the node:assert module)

immediateError('Range error', ErrorType.RangeError) // throws a RangeError

immediateError('Reference error', ErrorType.ReferenceError) // throws a ReferenceError

immediateError('Syntax error', ErrorType.SyntaxError) // throws a SyntaxError

immediateError('type error', ErrorType.TypeError) // throws a TypeError

class MyCustomError extends Error {
  constructor (message) {
    super("Custom: " + message)
  }
}

immediateError('Error!', MyCustomError) // throws a MyCustomError with the message "Error!" which in turn prints out "Custom: Error!" because we used our own error class

```

## Why?

This module is great because it uses the best practices in JavaScript such as using dependencies like [`throw-error`](https://npmjs.com/package/throw-error) and [`yanoop`](https://npmjs.com/package/yanoop) to throw errors and using [`es-errors`](https://npmjs.com/package/es-errors) instead of using the error classes natively.

## Show your support

[Follow me on GitHub](https://github.com/tj-commits) and star my repositories.

## is this a joke?

Of course not!
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
(Yes, it is.)
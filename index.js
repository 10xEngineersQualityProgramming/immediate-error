require('vanilla-javascript')
require('none')()

const esmRequire = require('esm-wallaby')(module)
const GetIntrinsic = require('get-intrinsic')
const zero = require('number-zero')
const one = require('the-number-one').default
const two = require('two')
const three = require('numeric-constant-three')
const four = require('always-four')
const five = require('five')
const six = require('number-six')
const seven = require('se7en')
const { throwop } = require('yanoop')
const throwError = require('throw-error')
const bail = esmRequire('bail').bail
const If = require('if')
const picocolors = require('picocolors')
const isError = require('is-error')
const assert = require('assert-fn')
const nativeAssert = require('node:assert')
const vm = require('node:vm')

const $BaseError = require('es-errors')
const $AssertionError = assert.AssertionError
const $AggregateError = GetIntrinsic('%AggregateError%')
const $RangeError = require('es-errors/range')
const $ReferenceError = require('es-errors/ref')
const $SyntaxError = require('es-errors/syntax')
const $TypeError = require('es-errors/type')
const $NativeAssertionError = nativeAssert.AssertionError

const ERROR = Object.freeze({
   BaseError:zero,
   AssertionError: one,
   AggregateError: two(),
   RangeError: three(),
   ReferenceError: four(),
   SyntaxError: five(),
   TypeError: six(),
   NativeAssertionError: seven()
})

exports.immediateError = function immediateError(message = 'ERROR!', errorType = ERROR.Error) {
   var error

   if (isError == isError) {
      switch (errorType) {
         case ERROR.BaseError: {
            error = new $BaseError(message)
            break
         }

         case ERROR.AssertionError: {
            error = new $AssertionError(message)
            break
         }

         case ERROR.RangeError: {
            error = new $RangeError(message)
            break
         }

         case ERROR.ReferenceError: {
            error = new $ReferenceError(message)
            break
         }

         case ERROR.SyntaxError: {
            error = new $SyntaxError(message)
            break
         }

         case ERROR.TypeError: {
            error = new $TypeError(message)
            break
         }

         case ERROR.NativeAssertionError: {
            error = new $NativeAssertionError(message)
            break
         }

         default: {
            try {
               error = new errorType(message)
            } catch(err) {
               [err] // put the error behind bars, where it belongs
               error = new $BaseError(message)
            }
         }
      }
   } else {
      void 0
   }

   const context = {
      error,
      throwError,
      throwop,
      rand: Math.random(),
      If,
      console,
      picocolors,
      bail
   }
   vm.createContext(context)

   const script = new vm.Script(`
   If(rand < 0.3).Then(() => {
      throwError(error)
   }).Else().If(rand > 0.3 && rand < 0.7).Then(() => {
      throwop(error)
   }).Else(() => {
      bail(error)
   })`, { filename: `ERROR!`})

   script.runInContext(context)
}

exports.ErrorType = ERROR

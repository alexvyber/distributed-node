type AnyFn = (...args: any) => any

const myAsyncOperation: AnyFn = (...args) => {
  ;[...args]
}

// Antipattern
function foo(count: number, callback: AnyFn) {
  if (count <= 0) {
    return callback(new TypeError("count should be greater than 0"))
  }

  myAsyncOperation(count, callback)
}

// The right way

function bar(count: number, callback: AnyFn) {
  if (count <= 0) {
    return process.nextTick(() =>
      callback(new TypeError("count should be greater than 0"))
    )
  }

  myAsyncOperation(count, callback)
}

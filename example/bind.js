'use strict'

const ITER = 1E5

function sum(a, b) {
  return a + b
}

const addOne = sum.bind(null, 1)
var res = 0

;(function loopFn() {
  for (var i = 0; i < ITER; i++) {
    res += addOne(i)
  }
})()

console.log(res)

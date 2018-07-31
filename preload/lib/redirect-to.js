'use strict'

const fs = require('fs')

function redirectTo(fd) {
  return function write(chunk, enc, cb) {
    if (typeof chunk !== 'string' && !(chunk instanceof Buffer)) {
      throw new TypeError(
        'Invalid data, chunk must be a string or buffer, not ' + typeof chunk)
    }
    if (typeof enc === 'function') cb = enc
    fs.writeSync(fd, chunk)
    if (typeof cb === 'function') cb()
    return true
  }
}

module.exports = redirectTo

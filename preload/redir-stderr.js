'use strict'

const redirectTo = require('./lib/redirect-to')
process.stderr.write = redirectTo(4)

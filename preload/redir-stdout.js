'use strict'

const redirectTo = require('./lib/redirect-to')
process.stdout.write = redirectTo(3)

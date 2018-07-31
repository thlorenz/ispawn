'use strict'

const test = require('tape')
const { spawn } = require('../')

const progStdout = `console.log('hello world')`
const progStderr = `console.error('hello world')`

test('\nnothing intercepted', async t => {
  try {
    const { termination } = spawn({ argv: [ '-e', progStdout ] })
    const code = await termination
    t.equal(code, 0, 'exits with 0')
  } catch (err) {
    t.iferror(err)
  }
  t.end()
})

test('\nstdout: intercepted and not piped on', async t => {
  const lines = []
  function onStdout(line) {
    lines.push(line)
    return true
  }
  try {
    const { termination } = spawn({ argv: [ '-e', progStdout ], onStdout })
    const code = await termination
    t.equal(code, 0, 'exits with 0')
    t.deepEqual(lines, [ 'hello world' ])
  } catch (err) {
    t.iferror(err)
  }
  t.end()
})

test('\nstdout: intercepted and piped on', async t => {
  const lines = []
  function onStdout(line) {
    lines.push(line)
  }
  try {
    const { termination } = spawn({ argv: [ '-e', progStdout ], onStdout })
    const code = await termination
    t.equal(code, 0, 'exits with 0')
    t.deepEqual(lines, [ 'hello world' ])
  } catch (err) {
    t.iferror(err)
  }
  t.end()
})

test('\nstderr: intercepted and not piped on', async t => {
  const lines = []
  function onStderr(line) {
    lines.push(line)
    return true
  }
  try {
    const { termination } = spawn({ argv: [ '-e', progStderr ], onStderr })
    const code = await termination
    t.equal(code, 0, 'exits with 0')
    t.deepEqual(lines, [ 'hello world' ])
  } catch (err) {
    t.iferror(err)
  }
  t.end()
})

test('\nstderr: intercepted and piped on', async t => {
  const lines = []
  function onStderr(line) {
    lines.push(line)
  }
  try {
    const { termination } = spawn({ argv: [ '-e', progStderr ], onStderr })
    const code = await termination
    t.equal(code, 0, 'exits with 0')
    t.deepEqual(lines, [ 'hello world' ])
  } catch (err) {
    t.iferror(err)
  }
  t.end()
})

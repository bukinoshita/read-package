'use strict'

import test from 'ava'
import m from './'

test(async t => {
  const foo = await m('fixtures/foo').catch(err => err)
  const bar = await m('fixtures/bar')
  const current = await m()

  t.is(typeof bar, 'object')
  t.is(typeof current, 'object')
  t.is(foo, 'package.json not found in the current project.')
})

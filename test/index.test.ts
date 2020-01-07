import readPackage from '../source'

test('read package', () => {
  expect(readPackage('fixtures/bar')).toEqual({ name: 'fixture', version: '1.0.0' })
  expect(() => readPackage('fixtures/foo')).toThrow(
    'package.json not found in the current project.'
  )
})

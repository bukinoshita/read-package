import { readFileSync } from 'fs'
import { resolve } from 'path'
import hasPackage from 'has-package'

export default (cwd = process.cwd()) => {
  if (hasPackage(cwd)) {
    return JSON.parse(readFileSync(resolve(cwd, 'package.json'), 'utf8'))
  }

  throw new TypeError('package.json not found in the current project.')
}

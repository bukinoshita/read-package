'use strict'

const fs = require('fs')
const path = require('path')
const hasPackage = require('has-package')

module.exports = (cwd = process.cwd()) => {
  return new Promise((resolve, reject) => {
    if (hasPackage(cwd)) {
      resolve(JSON.parse(fs.readFileSync(path.resolve(cwd, 'package.json'), 'utf8')))
    }

    reject('package.json not found in the current project.')
  })
}

/* global describe, it*/

import System from 'jspm'
import assert from 'assert'

export default function loadModules(modules, f) {
  const modulePaths = Object.keys(modules)
  const systemImportPromises = modulePaths.map(m => System.import(m))
  return Promise.all(systemImportPromises)
    .catch(e => {
      describe('JSPM', () => {
        it('ES6 module not loaded properly', () => {
          assert.fail(null, '', e)
        })
      })
    })
    .then(importedModules => {
      const imports = []
      for (let m = 0; m < modulePaths.length; m++) {
        const importFactories = modules[modulePaths[m]]
        const systemModule = importedModules[m]
        for (let i = 0; i < importFactories.length; i++) {
          const nextImport = importFactories[i](systemModule)
          imports.push(nextImport)
        }
      }
      f.apply(null, imports)
    })
}

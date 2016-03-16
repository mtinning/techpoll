import System from 'jspm'
import assert from 'assert'

export default function loadModules(modules, f) {
  const modulePaths = Object.keys(modules);
  var systemImportPromises = modulePaths.map(m => System.import(m))
  return Promise.all(systemImportPromises)
    .catch(e => {
      describe('JSPM', () => {
        it ('ES6 module not loaded properly', done => {
          assert.fail(null, '', e)
        })
      })
    })
    .then(importedModules => {
      var imports = []
      for (var m = 0; m < modulePaths.length; m++) {
        var importFactories = modules[modulePaths[m]]
        var systemModule = importedModules[m]
        for (var i = 0; i < importFactories.length; i++) {
          var nextImport = importFactories[i](systemModule)
          imports.push(nextImport)
        }
      }
      f.apply(null, imports)
    })
}

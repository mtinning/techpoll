# techpoll

## How to run

First, install `npm` and `jspm` packages:

```
npm install
npm install jspm -g
jspm install
```

To serve with hot reloading, run the following command and navigate to http://localhost:8080:

```
npm start
```

To run the tests:

```
npm test
```

## Tech stack

### Front End

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Official React bindings for Redux](https://github.com/reactjs/react-redux)
- [jQuery](https://jquery.com) (for AJAX)
- [JSPM](http://jspm.io/) (for package management) with - [SystemJS](https://github.com/systemjs/systemjs) (for module loading)

### Front End Tests

- [Mocha](https://mochajs.org/) - testing framework
- [Karma](https://karma-runner.github.io/0.13/index.html) - test runner
- [Karma-jspm](https://github.com/Workiva/karma-jspm) - jspm module loader plugin for karma
- [Karma-chai](https://github.com/xdissent/karma-chai) - chai for karma plugin
- [Karma-mocha](https://github.com/karma-runner/karma-mocha) - adapter for mocha
- [Karma-mocha-reporter](https://github.com/litixsoft/karma-mocha-reporter) - karma reporter plugin with mocha style logging
- [Karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher) - launcher plugin for chrome
- [Chai](http://chaijs.com/) - expressive assertions for Mocha
- [Sinon](http://sinonjs.org/) - test spies
- [chai-immutable](http://chaijs.com/plugins/chai-immutable/) - extends chai with assertions for Facebook's immutable library
- // TODO [chai-as-promised](http://chaijs.com/plugins/chai-as-promised/) - chai-style assertions for promises
- [sinon-chai](https://github.com/domenic/sinon-chai) - chai-style assertions for sinon

### Front End Build

- [eslint](http://eslint.org/) - configured with AirBnB style guidelines
- [eslint-watch](https://www.npmjs.com/package/eslint-watch)
- [SystemJS Hot Reloader](https://github.com/capaj/systemjs-hot-reloader) with [chokidar-socket-emitter](https://github.com/capaj/chokidar-socket-emitter)

### Back End

- [NodeJS](https://nodejs.org/en/)
- [express](http://expressjs.com/)
- [body-parser](https://github.com/expressjs/body-parser) - body parsing library for NodeJS

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
- [JSPM](http://jspm.io/) (for package management) with [SystemJS](https://github.com/systemjs/systemjs) (for module loading)

### Front End Tests

- [Mocha](https://mochajs.org/) - testing framework
- // TODO [Karma](https://karma-runner.github.io/0.13/index.html) - test runner
- [Chai](http://chaijs.com/) - expressive assertions for Mocha
- [Sinon](http://sinonjs.org/) - test spies
- // TODO [chai-immutable](http://chaijs.com/plugins/chai-immutable/) - extends chai with assertions for Facebook's immutable library
- // TODO [chai-as-promised](http://chaijs.com/plugins/chai-as-promised/) - chai-style assertions for promises
- // TODO [sinon-chai](https://github.com/domenic/sinon-chai) - chai-style assertions for sinon

### Back End

- [NodeJS](https://nodejs.org/en/)
- [express](http://expressjs.com/)
- [body-parser](https://github.com/expressjs/body-parser) - body parsing library for NodeJS

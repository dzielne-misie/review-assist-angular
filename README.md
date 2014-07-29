# Review Assist - Angular.js frontend

[![Build Status](https://travis-ci.org/dzielne-misie/review-assist-angular.svg?branch=master)](https://travis-ci.org/dzielne-misie/review-assist-angular)

An example frontend interfacing with Review Assist's REST API.

## Installation

* Clone the repository
* `npm install`
* `node_modules/.bin/bower install`
* `node_modules/.bin/grunt dist`

The built files will be available in the `dist` directory.

## Running

### Development

```
node_modules/.bin/grunt dev
```

Your webserver should serve the files from the `app` directory.

### Dist

```
node_modules/.bin/grunt dist
```

Your webserver should serve the files from the `dist` directory.

## Tests

In order to be able to run the e2e tests, you need to have Java installed (required to run Selenium). Also, you should run this command ONCE in order to download Selenium:

```
node_modules/.bin/webdriver-manager update
```

After that's done, all you need to do is run the test script:

```
npm test
```

The above command will build the project and run all the unit and e2e tests. If instead you prefer to run the unit/e2e tests separately, have a look at the available Grunt tasks.

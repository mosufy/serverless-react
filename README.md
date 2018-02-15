# ReactServerless

Demo for building React Webapp with Serverless API.

## Running on local environment

Install serverless offline dependencies
```
$ yarn install
```

Install webapp dependencies
```
$ cd client
$ yarn install
```

Start serverless-offline
```
$ yarn server
```

Start react webapp
```
$ yarn client
```

You may also run both at the same time
```
$ yarn dev
```

## Unit Test

Mocha + Chai.js unit testing with Istanbul + iSparta code coverage

To test
```
$ yarn test
```

To test with code coverage report
```
$ yarn test:coverage
```
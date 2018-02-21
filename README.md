# Serverless React

Example web app with Serverless Framework and React.

## Run Local Environment

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

## Deploy Service

Serverless will set up the respective AWS services required, including creation
of Lambda functions, API Gateway, S3 buckets, Cloud Trail, etc.

Deploy the Service
```
$ serverless deploy
```

Deploy the Function
```
$ serverless deploy function -f servicePing
```

Invoke Function and return logs
```
$ serverless invoke -f servicePing -l
```

Fetch the Function logs as a stream
```
$ serverless logs -f servicePing -t
```

Cleanup and remove entire Service
```
$ serverless remove
```

## Deploy Client

The Client will be hosted on an S3 bucket as static sites.

There are 3 Client sites that will be served from S3:
- **client/site**: Public facing website
- **client/account**: Member website
- **client/admin**: Site Administration

Deploy Site to S3 bucket
```
$ yarn build:site
$ yarn build:account
$ yarn build:admin
```

Take down Site
```
$ yarn remove:site
$ yarn remove:account
$ yarn remove:admin
```

Build production bundle
```
$ cd client/site OR client/account OR client/admin
$ yarn build
```

Serve production static site on local
```
$ cd client/site OR client/account OR client/admin
$ serve -s build
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
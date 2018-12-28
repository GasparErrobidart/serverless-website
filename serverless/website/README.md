# portal-driver-serverless-CORE

This project uses Angular's Universal feature for server rendering Portal Driver's data service and the angular event list from Venue Driver, to filter events, artists and venues data into a JSON dataset. Offering a JSON+LD exporting option.

## Build

`npm run build`

## Run locally with SAM cli

`npm start`

## Test

`npm run test`


## ng-universal

The `server.ts` file provides an exported `render` function, which renders the JSON data for the received route and returns it.

Usage example:
```
const path = require('path');
const server = require('../lib/ng-universal');

function getEvents (event, context, callback){
  ...
  let endpoint = event.path;
  let query = (params) ? Object.keys(params).map(key => key+"="+params[key]).join("&") : "";

  server.render(endpoint+"?"+query , "GET" , function(events){

    let response = {
        'statusCode': 200,
        'body': JSON.stringify(events)
    };

    callback(null,response);
  });

};
```

### Parameters


#### endpoint `String`
Root relative path that gives angular a context to be rendered. It can include a query string.


#### method `String`
HTTP method name. e.g.: `GET`.


#### callback `Function`
This function will receive a parameter containing the JSON.


## json-ld

This library provides methods to convert a single "venue", "artist" or "event" dataset into a schema.org standard JSON+LD item.

Usage example:
```
const artistLD = require('./json-ld/artist');

...
let toLD = artists.map(artistsLD);
```


## Multi stack
This project uses a [multi stack approach](https://hackernoon.com/managing-multi-environment-serverless-architecture-using-aws-an-investigation-6cd6501d261e).

![Multi stack vs single stack](https://cl.ly/4aee553f00a7/Screen%20Shot%202018-12-11%20at%2015.20.22.png)

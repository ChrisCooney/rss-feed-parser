# Serverless API Experiment

## Running the software

You should only need to spin up the client when you run this. The server side lambda has already
been deployed and re-deploying will change the URL, thus breaking it! Skip to "Starting the client side" for instructions on that.

## Starting the API portion

From the root of the serverless-api folder, run:

```
yarn
```

This will install all dependencies necessary for the app to run. Secondly,
run

```
serverless deploy
```

This will deploy the node handler into an AWS lambda.

## Starting the client side

From the root of the client folder, you can install all necessary dependencies with:

```
yarn
```

And then run:

```
yarn start
```

This will spin up a webpack dev server on port 3000.

## TODO

- Behavioural tests for the full end to end system would be nice. (Cucumber maybe?)
- More specific error handling in the API.
- The endless tweaking of Webpack to get it as performant as possible.
- Fix the URL in place. As far as I could see, this is not automatable since you need to set up a cert with AWS.
- Improving the error handling from the API. Simple "500" isn't exactly descriptive.

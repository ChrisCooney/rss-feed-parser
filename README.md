# Serverless API Experiment

## Running the software

You should only need to spin up the client when you run this. The server side lambda has already
been deployed and re-deploying will change the URL.

## Starting the application

Simply run the following from the root of the project:

```bash
./startup.sh
```

This will install all dependencies for the client and start up webpack dev server.

## TODO

- Behavioural tests for the full end to end system would be nice. (Cucumber maybe?)
- More specific error handling in the API.
- The endless tweaking of Webpack to get it as performant as possible.
- Fix the URL in place. As far as I could see, this is not automatable since you need to set up a cert with AWS.
- Improving the error handling from the API. Simple "500" isn't exactly descriptive.

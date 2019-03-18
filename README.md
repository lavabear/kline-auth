# KLine Auth0

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ab464fb-f2bd-404a-8f79-a749d55913e1/deploy-status)](https://app.netlify.com/sites/kline-auth0/deploys)

## What is it?

Code Generated GraphQL Kotlin Server with Apollo React Front End, connected to Auth0

### Easy Deployment
No matter how you want to run your app it should be easy. This project includes Docker Images to simplify deployment of
server and frontend, as well as build scripts to run without Docker. 

### Backend
The Docker Image is ready to run, just needs a DATABASE_URL set as an environment variable. 
Running without Docker is easy too, same rules apply.

#### [Heroku](https://www.heroku.com/)
- Create new project: ```heroku create [<name>]```
- Push only the server: ```git subtree push --prefix api heroku master```

### Frontend
The Docker Image from Dockerfile.live is the live/production version, just needs a GRAPHQL_URL. 
Running without Docker is easy too.

#### [Netlify](https://www.netlify.com/)
- Create New Project (connect to Github)
- Build Command: ```cd web && npm install && npm run build``` 
- Publish Directory: ```web/build```

#### [Heroku](https://www.heroku.com/)
- Create new project: ```heroku create [<name>]```
- Push only the frontend: ```git subtree push --prefix web heroku master```
# Web-API Project

This project is useful to start an web-api project with nodejs + express + code-first
We add some useful technologies like: docker, swagger, redis, passport and others will be included as we need they

The idea with this _"Skeleton Project"_ is be quick to start new projects.
Basically this project is able to make a test with basic endpoint and be able to use passport and JWT to login.
With this project running correctly, we can create our models and new endpoints.

### The project folder structure
```
├── configs
│   ├── app.js
│   ├── config.js
├── controllers
│   └── apis
│       └── user.js
├── models
│   └── user.js
├── package.json
├── package-lock.json
├── routes
│   ├── apis
│   │   ├── index.js
│   │   └── v1.js
│   └── index.js
├── server.js
└── services
    └── users
        └── user.js
```
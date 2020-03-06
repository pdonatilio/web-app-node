# Web-API Project

This project is useful to start an web-api project with nodejs + express + code-first
We add some useful technologies like: docker, swagger, redis, passport and others will be included as we need they

The idea with this _"Skeleton Project"_ is be quick to start new projects.
Basically this project is able to make a test with basic endpoint and be able to use passport and JWT to login.
With this project running correctly, we can create our models and new endpoints.

### The project folder structure

```
.
├── services
│   ├── global_services.js
│   ├── echo.js
│   └── auth.js
├── server.js
├── routes
│   ├── index.js
│   └── apis
│       ├── v1.js
│       └── index.js
├── README.md
├── package-lock.json
├── package.json
├── models
├── middlewares
│   └── auth.js
├── controllers
│   └── apis
│       ├── echo.js
│       └── auth.js
└── configs
    ├── swagger.js
    ├── env.js
    ├── db.js
    └── app.js
```

### To run the project

if you not have the nodejs in your system: https://nodejs.org/en/



Get the repository and inside the folder:

1 - Create an ENV File (_.env_) with these parameters:
```
NODE_ENV = development
PORT = 3000
hostname='localhost'

#JWT
jwt_secret_word = 'jwt_secret_word'
jwt_expires = '1d'
```

2 - run these command below:
`npm install` && `npm start`
# Micro API Boilerplate
Personal boilerplate to bootstrap simple applications and microservices

## Project Architecture 

```bash
.
├── configs             # Server configs
│   ├── default.json	# Environment variables file
│   ├── plugins.js		# HapiJS Plugins Config
│   └── server.js		# HapiJS Server Config
├── index.js			# Server Entrypoint
├── libs				# Libraries Folder
├── modules				# Modules / Feature Folder
│   └── pets			# Module name
│       ├── models		# Models of the context
│       │   └── Pet.js	# Model name
│       ├── routes		# Routes of context
│       │   └── crud.js	# Group of routes
│       ├── services	# Services of Context
│       │   └── crud.js	# Crud service example
│       └── views		# Views Folder
└── test				# Tests folder
    └── unit			# Unit Tests
        └── libs		# Library Tests
            └── system.test.js
```

## Development Environment 

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

## Running Tests

```bash
npm run unit-test
```

<h1 align="center"> :zap: Micro API Boilerplate :zap: </h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/fidelissauro">
    <img alt="Twitter: fidelissauro" src="https://img.shields.io/twitter/follow/fidelissauro.svg?style=social" target="_blank" />
  </a>
</p>

> Personal boilerplate to bootstrap simple applications and microservices

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

## Author

👤 **Matheus Fidelis**

* Twitter: [@fidelissauro](https://twitter.com/fidelissauro)
* Github: [@msfidelis](https://github.com/msfidelis)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](/issues).

## Show your support

Give a ⭐️ if this project helped you!
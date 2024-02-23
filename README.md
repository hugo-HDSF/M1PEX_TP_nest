<p align="center">
  <a><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
# M1PEX_TP_nest

## Description

Tp NestJS - M1PEX

git repository : https://github.com/hugo-HDSF/M1PEX_TP_nest

## Getting Started

### Prerequisites

> docker and docker compose v2 are required, see https://docs.docker.com/get-docker/

> I recommend using colima (--mount-inotify) or Orbstack on mac, see https://github.com/abiosoft/colima https://orbstack.dev/

### Installation

> I also recommend using nvm for node version management, see https://github.com/nvm-sh/nvm

```Shell
nvm install
nvm use
```
### Deploy

```Shell
make install
```

or

```Shell
make install -d
```

project will be deployed att "http://localhost:4000"


### Credentials


```JSON
[
  {
    "admin": true,
    "login": "admin",
    "password": "azerty"
  },
  {
    "admin": false,
    "login": "root",
    "password": "root"
  }
]
```

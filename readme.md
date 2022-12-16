# How to use

Create docker application using this command:

```
docker compose --env-file .env.development up -d
```

# About services

- Postgres SQL
- Backend using NestJS for more productive and standard development
- Frontend using React NextJS framework, great react development patterns
- Nginx for reverse proxy on Docker

# Development Features

## Entities

- Customers
- Users
- Departures
- Transportations
- Quotes

## APIs

There is a available swagger documentation in [http://localhost/api/swagger](http://localhost/api/swagger).

# Development Todos

### Infra (Docker)

- [x] Database
- [x] Backend
- [x] Frontend
- [x] Reverse Proxy

### Backend modules (DDD + Clean Arch)

- [x] Departures
  - [x] Entities
  - [x] Migrations
  - [x] Necessary endpoints
  - [] Tests
- [x] Transportations
  - [x] Entities
  - [x] Migrations
  - [x] Necessary endpoints
  - [] Tests
- [x] Users
  - [x] Entities
  - [x] Migrations
  - [x] Necessary endpoints
  - [] Tests
- [x] Customers
  - [x] Entities
  - [x] Migrations
  - [x] Necessary endpoints
  - [] Tests
- [x] Quotes
  - [x] Entities
  - [x] Migrations
  - [x] Necessary endpoints
  - [] Tests

### Backend Features

- [x] Should possible get all users
- [x] Should possible get all transportations
- [x] Should possible get all departures
- [x] Should possible get all quotes by status
- [] Should possible get simples analytical report
    - [] (Nice to have) Total of new leads (by all time)
    - [] (Nice to have) Total of created quotes (by all time)
    - [] (Nice to have) Total of pending quotes (by all time)
    - [] (Nice to have) Total revenue (by all time)
    - [] (Nice to have) Total potential revenue (by all time)
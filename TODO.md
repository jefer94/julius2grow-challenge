# Requeriments

- [X] Express.js Restful
- [X] MVC
- [X] React
- [X] Bootstrap
- [ ] Docker
- [ ] Docker compose
- [ ] Heroku
- [ ] Mongo Atlas https://www.mongodb.com/cloud/atlas
- [ ] Redux or context
- [X] JWT

# API requeriments

- [X] Token provider
  - [X] JWT
    - [X] Id
    - [X] Email
    - [X] Exp in one hour
  - [X] Check that user exist
- [X] DB
  - [X] News
    - [ ] Image in S3
    - [X] Title
    - [X] Content
    - [X] Created at
  - [X] Users
    - [X] Unique username
    - [X] Unique email
    - [X] Password with hash
- [X] With auth
  - [X] Add new
  - [X] List news by a user
  - [X] Delete new
  - [X] Filter by a user
    - [X] Title
    - [X] Content
- [X] Implement 10 elements by result

# Frontend requeriments

- [ ] Pages
  - [ ] Without auth
    - [X] Login
    - [X] Register
  - [ ] With auth
    - [ ] Post
      - [X] List
      - [ ] Add
      - [ ] Filter
      - [ ] Delete

# Where are upload the challenge

- [X] Github

# Repository requeriments

- [ ] Add one README.md with how to run example

# Requirements that cannot be developed

- S3 (I not have credit card)
- Microservices with a message broker (is complicated with Heroku free)
- Monorepo (is complicated deploy all in five hours in Heroku)
# lgbtqstories-be

### Developer
---
|                                           [K.W.Morlock](https://github.com/kwmorlock)                    |
| :-------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/60933227?s=400&u=f59ad5c61c259364c66bac0a68407b138024c357&v=4" width = "190" />](https://github.com/kwmorlock) |
|                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kwmorlock)                   |
|                                                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kwmorlock/)    |
---


## Description

---

Front End - A [React](https://www.npmjs.com/package/react) application using declarative routing [React Router](https://www.npmjs.com/package/react-router), DOM bindings [React Router Dom](https://www.npmjs.com/package/react-router-dom), promise based HTTP client [Axios](https://www.npmjs.com/package/axios), schema builder for value parsing and validation [Yup](https://www.npmjs.com/package/yup), and styled with [Styled Components](https://www.npmjs.com/package/styled-components).

Back End - A Node.JS [express](https://www.npmjs.com/package/express) API using SQL query builder [knex](https://www.npmjs.com/package/knex), optimized bcrypt [bcryptjs](https://www.npmjs.com/package/bcryptjs), SQL database engine [sqlite3](https://www.npmjs.com/package/sqlite3), URL-safe means of representing claims to be transferred between two parties [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), mechanism that allows restricted resources on a web page to be requested from another domain [cors](https://www.npmjs.com/package/cors), and securing the Express app by setting various HTTP headers [Helmet](https://www.npmjs.com/package/helmet).

---

## Login Info

Admins 

(Note: Admins cannot register themselves, please use these logins, and only on the admin section!)

---

| Username | Password |
| ------- | --- |
| adminone | adminone|
| admintwo | admintwo |

---

## Deployed

---

Important note, back end goes to sleep without use, and might take up to 10 seconds of waiting before it redirects to login after registering.

[Front End](https://lgbtqstories.netlify.app/)

[Back End](https://lgbtqstories.herokuapp.com/)

---

## Repos

---

[Front End](https://github.com/kwmorlock/lgbtqstories-fe)

[Back End](https://github.com/kwmorlock/lgbtqstories-be)

---

## Commits
| Prefix | Meaning |
| ------- | --- |
| Cle | Clean up code or sorting files|
| Com | Comments added to code |
| Cre | Create a new file, database etc |
| Dep | Dependency installed|
| Fix | Fix errors or bugs |
| Rea | Read me update |
| Set | Setup a new function etc |
| Sty | Styling and design |
| Upd | Update code for improved or more relevant use |

# Register / Login Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | /api/users/auth/register| register as a new user |
| POST | /api/users/auth/login | login as an existing user |
| POST | /api/admins/auth/login | login as an existing admin |

# Register / Login
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| username | string | yes | yes | users username |
| password | string | yes | no | users password |
| email | string | no | no | users email |

# Stories Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/stories | get all stories for all users (needs to be logged in) |
| GET | api/stories/:id | get stories with specific id |
| GET | api/stories/users/:id | get all stories from specific user id |
| POST | api/stories/:id | add stories from user |
| PUT | api/stories/:id | edit specific stories for user |
| DELETE | api/stories/:id | delete specific stories for user |

# Stories
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | story id |
| title | string | yes | no | story title|
| story | string | yes | no | story |
| tags | string | yes | no | story tags|
| usersId | integer | yes | no | users id |

# Notes Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/notes | get all notes (needs to be logged in) |
| GET | api/notes/:id | get note with specific id |
| GET | api/notes/admins/:id | get all notes from specific admin id |
| POST | api/notes | add note from admin |
| PUT | api/notes/:id | edit specific note for admin |
| DELETE | api/notes/:id | delete specific note for admin |

# Notes
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | story id |
| title | string | yes | no | story title|
| story | string | yes | no | story |
| tags | string | yes | no | story tags |
| note | string | yes | no | admin note |
| adminsId | integer | yes | no | admins id |

# Users Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/users/users | get all users (needs to be logged in) |
| DELETE | api/users/users/:id | delete specific user |

# Users
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | user id |
| username | string | yes | yes | user's name|
| password | string | yes | no | password |
| email | string | yes | yes | email |





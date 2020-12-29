# lgbtqstories-be

### Developers
---
|                                           [K.W.Morlock](https://github.com/kwmorlock)                    |
| :-------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/60933227?s=400&u=f59ad5c61c259364c66bac0a68407b138024c357&v=4" width = "190" />](https://github.com/kwmorlock) |
|                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kwmorlock)                   |
|                                                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kwmorlock/)    |
---
## Deployed

---

[Back End](https://lgbtqstories.herokuapp.com/)

[Front End](https://lgbtqstories.netlify.app/#/register)

---

## Repos

---

[Front End](https://github.com/kwmorlock/lgbtqstories-fe)

[Back End](https://github.com/kwmorlock/lgbtqstories-be)

---

### Commits
---
##### Cle - Clean up code or sorting files
---
##### Com - Comments added to code
---
##### Cre - Create a new file, database etc
---
##### Dep - Dependency installed
---
##### Fix - Fix errors or bugs
---
##### Rea - Read me update
---
##### Set - Setup a new function etc
---
##### Upd - Update code for improved or more relevant use
---

# Register / Login Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | /api/users/auth/register| register as a new user |
| POST | /api/users/auth/login | login as an existing user |
| POST | /api/admins/auth/login | login as an existing admin |

# Users
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
| POST | api/stories| add stories from user |
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



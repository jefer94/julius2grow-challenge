# Specifications

[JSON:API](https://jsonapi.org/examples/)

# Routes

| Route | Method | Description |
| :--- | :--- | :--- |
| /token | POST | Get token. |
| /users | POST | Add one user. |
| /users/me | GET | Get current user. |
| /posts/:offset? | GET | List posts. |
| /posts | POST | Add one post. |
| /posts/:id | DELETE | Delete post. |
| /posts/filter | POST | Filter posts. |

# Objects

```typescript
type Post = {
  image: string
  title: string
  content: string
  user: string
}

type User = {
  username: string
  email: string
  password: string
}
```

# Pagination

```typescript
type Offset = {
  offset: number
}
```
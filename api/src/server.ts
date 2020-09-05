import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import ora from 'ora'
import authMiddleware from './middlewares/auth'
import { getToken, addUser, getUser, fetchPostsByUser, addPost, deletePost } from './controllers'

export const app = express()
const port = process.env.PORT || 9000

app
  .use(morgan('combined'))
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(methodOverride())

app.post('/token',  getToken)
app.post('/users', addUser)
app.get('/users/me', authMiddleware, getUser)
app.get('/posts', authMiddleware, fetchPostsByUser)
app.post('/posts', authMiddleware, addPost)
app.delete('/posts/:postId', authMiddleware, deletePost)
app.post('/posts/filter', authMiddleware, () => {
  //
})

export function listen() {
  const spinner = ora(`Server ready in localhost:${port}`).start()
  app.listen(port)
}

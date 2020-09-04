import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import ora from 'ora'
import { getToken, addUser, getUser, fetchPostsByUser, addPost, deletePost } from './controllers'

export const app = express()
const port = process.env.PORT || 3000

app
  .use(morgan('combined'))
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(methodOverride())

app.post('/token', getToken)
app.post('/users', addUser)
app.get('/users/me', getUser)
app.get('/posts', fetchPostsByUser)
app.post('/posts', addPost)
app.delete('/posts/:id', deletePost)
app.post('/posts/filter', () => {
  //
})

export function listen() {
  const spinner = ora(`Server ready in localhost:${port}`).start()
  app.listen(port)
}

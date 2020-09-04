import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import ora from 'ora'

const app = express()
const port = process.env.PORT || 3000

app
  .use(morgan('combined'))
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(methodOverride())

export function listen() {
  const spinner = ora(`Server ready in localhost:${port}`).start()
  app.listen(port)
}
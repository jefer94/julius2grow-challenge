import request from 'supertest'
import { app } from './server'
import db from './db'

process.env.NODE_ENV = 'test'
process.env.SECRET = 'Konan'

beforeAll(() => {
  db()
})

const konan = {
  username: 'Konan',
  password: '123PassWor!',
  email: 'konan@naruto.io'
}
let konanToken: string

test('GET / not fount', async () => {
  const { statusCode } = await request(app).get('/')

  expect(statusCode).toBe(404)
})

test('POST /users', async () => {
  const { text, statusCode } = await request(app)
    .post('/users')
    .send(konan)

  expect(statusCode).toBe(200)
  expect(/^\{"token":".+"\}$/.test(text)).toBeTruthy()
})

test('POST /token', async () => {
  const { text, statusCode } = await request(app)
    .post('/token')
    .send(konan)

  expect(statusCode).toBe(200)
  expect(/^\{"token":".+"\}$/.test(text)).toBeTruthy()

  const { token } = JSON.parse(text)
  konanToken = token
})
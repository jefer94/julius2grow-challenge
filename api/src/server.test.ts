import request from 'supertest'
import { app } from './server'
import db from './db'

process.env.NODE_ENV = 'test'

beforeAll(() => {
  db()
})

test('a', async () => {
  const { text, statusCode } = await request(app).get('/')

  expect(statusCode).toBe(200)
  expect(text).toBe(200)
})
import dotenv from 'dotenv'
import { listen } from './server'
import db from './db'

dotenv.config()

db()
listen()

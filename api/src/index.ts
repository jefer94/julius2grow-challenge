import dotenv from 'dotenv'
import { listen } from './server'
import db from './db'
// import * as path from 'path'

dotenv.config()

db()
listen()

import dotenv from 'dotenv'
import { listen } from './server'
import db from './db'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

db()
listen()

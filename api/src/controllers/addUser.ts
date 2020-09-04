import { Request, Response } from 'express'
import { encrypt } from '@chocolab/password'
import { User } from '../models'

/**
 * Add post.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function addUser(req: Request, res: Response): Promise<void> {
  try {
    const user = new User(req.body)
    if (!user.password) throw 'password not provided'
    user.password = encrypt(user.password)
    await user.save()
    res.json({ data: { status: 'sucessful' } })
  }
  catch(e) {
    res.json({ errors: [e] })
  }
}

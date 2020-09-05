import { Request, Response } from 'express'
import { encrypt } from '@chocolab/password'
import jwt from 'jsonwebtoken'
import User from '../models/User'

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
    user.password = await encrypt(user.password)
    await user.save()
    const payload = { id: user._id, email: user.email }
    const token = jwt.sign(payload, process.env.SECRET, {
			expiresIn: 3600
    });
    
		res.json({ token: token })
  }
  catch(e) {
    // console.log(e)
    res.json({ errors: [e] })
  }
}

import { Request, Response } from 'express'
import { encrypt } from '@chocolab/password'
import jwt from 'jsonwebtoken'
import { User } from '../models'

/**
 * Get token.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function getToken(req: Request, res: Response): Promise<void> {
  try {
    const user = User.findOne({ username: req.body.username, password: req.body.password }).lean()
    const payload = { id: user._id, email: user.email, exp: '1h' }
    const token = jwt.sign(payload, process.env.SECRET, {
			expiresIn: '1h'
    });
    
		res.json({ token: token })
  }
  catch(e) {
    res.json({ errors: [e] })
  }
}

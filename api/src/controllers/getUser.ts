import { Request, Response } from 'express'
import { User } from '../models'

/**
 * Get user.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function getUser(req: Request, res: Response): Promise<void> {
  const { password, ...user } = User.findOne({ _id: req.params.id }).lean()
  res.json(user ? { data: user } : { errors: ['user id not exist'] })
}

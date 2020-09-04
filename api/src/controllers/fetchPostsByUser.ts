import { Request, Response } from 'express'
import { Post } from '../models'

/**
 * Fetch posts by user.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function fetchPostsByUser(req: Request, res: Response): Promise<void> {
  res.json({ data: Post.find({ user: req.body.user })
     .lean()
     .map(({ password, ...user }) => user) })
}

import { Request, Response } from 'express'
import Post from '../models/Post'

/**
 * Fetch posts by user.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function fetchPostsByUser(req: Request, res: Response): Promise<void> {
  res.json({ data: await Post.find({ user: req.params.id }).lean() })
}

import { Request, Response } from 'express'
import Post from '../models/Post'

/**
 * Add post.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function addPost(req: Request, res: Response): Promise<void> {
  try {
    const post = new Post(req.body)
    await post.save()
    res.json({ data: { status: 'sucessful' } })
  }
  catch(e) {
    res.json({ errors: [e] })
  }
}

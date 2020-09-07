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
    const post = new Post({ ...req.body, user: req.params.id })
    await post.save()
    res.json({ data: post })
  }
  catch(e) {
    res.json({ errors: [e] })
    // if (e.keyPattern.image) res.json({ errors: ['dup key: image'] })
    // else if (e.keyPattern.title) res.json({ errors: ['dup key: title'] })
    // else res.json({ errors: ['dup key: content'] })
  }
}

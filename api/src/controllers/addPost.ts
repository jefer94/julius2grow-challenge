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
    console.log('add post', req.file)
    const post = new Post({ ...req.body, user: req.params.id })
    await post.save()
    console.log(await Post.populate(post, { path: 'user', model: 'User', select: 'username' }))
    res.json({ data: await Post.populate(post, { path: 'user', model: 'User', select: 'username' }) })
  }
  catch(e) {
    res.json({ errors: [e] })
    // if (e.keyPattern.image) res.json({ errors: ['dup key: image'] })
    // else if (e.keyPattern.title) res.json({ errors: ['dup key: title'] })
    // else res.json({ errors: ['dup key: content'] })
  }
}

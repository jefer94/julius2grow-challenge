import { Request, Response } from 'express'
import Post from '../models/Post'

/**
 * Fetch posts by user.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function filterPostsByUser(req: Request, res: Response): Promise<void> {
  const limit = 10
  const offset = +req.body.offset || 0

  const listByTitle = req.body.title ?
    await Post.find({ user: req.params.id, title: new RegExp(req.body.title) })
      .limit(limit)
      .skip(offset * limit)
      .sort('createdAt')
      .lean() :
    []

  const listByContent = req.body.content ?
    await Post.find({ user: req.params.id, content: new RegExp(req.body.content) })
      .limit(limit)
      .skip(offset * limit)
      .sort('createdAt')
      .lean() :
    []
  // Post.populate(listByContent)

  // console.log()

  const filterListByTitle = listByTitle.filter(({ _id }) => !listByContent.some((v) => v._id !== _id))
  res.json({ data: [...filterListByTitle, ...listByContent] })
}

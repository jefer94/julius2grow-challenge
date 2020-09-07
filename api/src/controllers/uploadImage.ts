import { Request, Response } from 'express'

/**
 * Get user.
 *
 * @param req - Express request.
 * @param req - Express response.
 */
export async function uploadImage(req: Request, res: Response): Promise<void> {
  if (req.file) res.json({ data: req.file.path.replace('public', '') })
  else res.json({ errors: ['missing file'] })
}
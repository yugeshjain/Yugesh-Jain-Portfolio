import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return res.status(200).json({ total: 6.toString() });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
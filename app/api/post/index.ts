//app/api/post/route.ts
import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest, res: NextApiResponse
  ) {
  if (req.method === 'POST') {
    try {
        const { name, email, inquiry } = req.body; // フォームからのデータを取得

        // Prismaを介してデータベースに保存
        await prisma.contact.create({
          data: {
            name,
            email,
            inquiry,
          },
        });

        res.status(201).json({ message: 'Data saved successfully'});
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
      }
  }
}
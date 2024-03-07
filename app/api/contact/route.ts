//app/api/post/route.ts
import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";

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



/*
export async function POST(request: NextRequest) {
  const body = await request.json()
  
  const returnBody = 'POSTで受け取った値:${body.name}'

  return new Response(JSON.stringify({body:returnBody}))

}
*/
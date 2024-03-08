//app/contact/api/post/route.ts
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hundler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "POST")
    try {
        const { formData } = req.body; // フォームからのデータを取得
        // Prismaを介してデータベースに保存
        const result = await prisma.contact.create({
          data: {
            name: formData.name,
            email: formData.email,
            inquiry: formData.inquiry
          },
        });
        return res.status(201).json(result)
    }catch (error) {
        console.error('Error saving data:', error);
        
      }
      
      
  }




/*
export async function POST(request: NextRequest) {
  const body = await request.json()
  
  const returnBody = 'POSTで受け取った値:${body.name}'

  return new Response(JSON.stringify({body:returnBody}))

}
*/
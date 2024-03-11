import prisma from '@/lib/prisma';
//import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";

/*
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
*/

//このapiはアップロードする必要があるだろう。
//デプロイエラーがでないような方法。
//コンソールにて、ターミナルのjsonと同じような確認をする方法

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json()
    console.log("Received data:",body)
      //const { formData } = request.body; // フォームからのデータを取得
      // Prismaを介してデータベースに保存
      const result = await prisma.contact.create({
        data: {
          name: body.name,
          email: body.email,
          inquiry: body.inquiry,
        },
      });
      return new NextResponse(body);
  }catch (error) {
      console.error('Error saving data:', error);
      return new　NextResponse('Error saving data');    
    }

}

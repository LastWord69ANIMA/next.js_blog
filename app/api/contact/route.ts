import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

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

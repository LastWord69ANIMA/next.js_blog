//import { sql } from '@vercel/postgres';
//import { NextResponse } from 'next/server';

import { NextApiRequest, NextApiResponse } from 'next';
//import { PrismaClient } from '@prisma/client';
import prisma from '../../lib/prisma';
//const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { formData } = req.body; // フォームからのデータを取得

      // Prismaを介してデータベースに保存
      await prisma.contact.create({
        data: {
          name: formData.name,
          email: formData.email,
          inquiry: formData.inquiry,
        },
      });

      res.status(201).json({ message: 'Data saved successfully'});
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ message: 'Error saving data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


/*
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
*/
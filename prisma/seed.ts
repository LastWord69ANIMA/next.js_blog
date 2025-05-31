// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.contact.createMany({
    data: [
      {
        name: '田中 太郎',
        email: 'tanaka@example.com',
        inquiry: 'このアプリについて質問があります。',
      },
      {
        name: '山田 花子',
        email: 'yamada@example.com',
        inquiry: 'データの削除方法を教えてください。',
      },
      {
        name: '鈴木 一郎',
        email: 'suzuki@example.com',
        inquiry: '動作環境について教えてください。',
      },
    ],
  });

  console.log('🌱 シードデータを挿入しました');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

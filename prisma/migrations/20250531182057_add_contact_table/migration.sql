-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "inquiry" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

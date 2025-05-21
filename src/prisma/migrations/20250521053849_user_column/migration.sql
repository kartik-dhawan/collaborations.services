/*
  Warnings:

  - Added the required column `userId` to the `ClientContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ClientData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Collaborations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClientContact" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ClientData" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Collaborations" ADD COLUMN     "userId" TEXT NOT NULL;

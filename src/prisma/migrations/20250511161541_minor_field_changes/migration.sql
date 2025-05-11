/*
  Warnings:

  - You are about to drop the column `contactPerson` on the `ClientData` table. All the data in the column will be lost.
  - Added the required column `clientContactId` to the `ClientData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CsGender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY');

-- AlterTable
ALTER TABLE "ClientContact" ADD COLUMN     "contactNotes" TEXT,
ADD COLUMN     "gender" "CsGender" NOT NULL DEFAULT 'PREFER_NOT_TO_SAY';

-- AlterTable
ALTER TABLE "ClientData" DROP COLUMN "contactPerson",
ADD COLUMN     "clientContactId" TEXT NOT NULL,
ADD COLUMN     "clientNotes" TEXT;

-- CreateEnum
CREATE TYPE "CollabType" AS ENUM ('UNPAID_COLLABORATION', 'PAID_COLLABORATION', 'BARTER_COLLABORATION', 'PAID_PROMOTION', 'PAID_GIG');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'UNPAID');

-- CreateEnum
CREATE TYPE "CollaborationStatus" AS ENUM ('FINALISED', 'DID_NOT_HAPPEN', 'COMPLETED');

-- CreateEnum
CREATE TYPE "CollaborationDeliverables" AS ENUM ('REEL', 'REEL_WITHOUT_COLLAB', 'CAROUSEL_POST', 'CAROUSEL_POST_WITHOUT_COLLAB', 'STORIES', 'SONG_PROMOTION', 'PHOTO_SHOOT', 'VIDEO_EDIT');

-- CreateEnum
CREATE TYPE "DeliverableStatus" AS ENUM ('COMPLETED', 'CANCELLED', 'IN_PROGRESS', 'REJECTED', 'APPROVED', 'IN_REVIEW');

-- CreateTable
CREATE TABLE "Collaborations" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "type" "CollabType" NOT NULL,
    "collabStatus" "CollaborationStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "dealDate" TIMESTAMP(3),
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "paymentAmount" INTEGER DEFAULT 0,
    "paymentDate" TIMESTAMP(3),
    "clientId" TEXT NOT NULL,
    "deliverables" "CollaborationDeliverables"[],
    "deliverableDate" TIMESTAMP(3),
    "deliverableLink" TEXT,
    "deliverableStatus" "DeliverableStatus" NOT NULL DEFAULT 'IN_REVIEW',
    "deliverableNotes" TEXT,
    "collabNotes" TEXT,

    CONSTRAINT "Collaborations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Collaborations" ADD CONSTRAINT "Collaborations_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "ClientData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

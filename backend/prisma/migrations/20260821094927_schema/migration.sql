/*
  Warnings:

  - The values [MCB,RCCB,RCBO,FUSE,MAIN_BREAKER,SPD] on the enum `ProtectionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `cableLengthMeters` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `circuitTotalCurrentAmps` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `conductorSectionMm2` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `isDedicated` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `loadAmps` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `loadWatts` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfPoles` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `operatingCurrentAmps` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `protectionId` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `recommendedSectionMm2` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `room` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `shortCircuitCurrentAmps` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `voltageDropPercent` on the `Circuit` table. All the data in the column will be lost.
  - You are about to drop the column `customerName` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `objective` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `siteAddress` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `curve` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `equipmentName` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `poles` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `ratingAmps` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Protection` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Building` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Calculation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `Protection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Circuit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPower` to the `Circuit` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Circuit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breakingCapacity` to the `Protection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `curveType` to the `Protection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfPoles` to the `Protection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratedCurrent` to the `Protection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AlimentationType" AS ENUM ('MONOPHASE', 'TRIPHASE');

-- CreateEnum
CREATE TYPE "RegimeNeutre" AS ENUM ('TT', 'TN', 'IT');

-- CreateEnum
CREATE TYPE "CircuitType" AS ENUM ('ECLAIRAGE', 'PRISE_COURANT', 'FORCE_MOTRICE', 'CHAUFFAGE', 'CLIMATISATION', 'AUTRE');

-- CreateEnum
CREATE TYPE "CableMaterial" AS ENUM ('CUIVRE', 'ALUMINIUM');

-- CreateEnum
CREATE TYPE "CableIsolation" AS ENUM ('PVC', 'XLPE', 'EPR');

-- CreateEnum
CREATE TYPE "ModePose" AS ENUM ('SOUS_CONDUIT_EN_SAILLIE', 'ENCASTRE_DANS_MUR', 'CHEMINEE_DE_CABLES', 'ENTERRE', 'AIR_LIBRE');

-- CreateEnum
CREATE TYPE "CurveType" AS ENUM ('B', 'C', 'D', 'K', 'Z');

-- CreateEnum
CREATE TYPE "CheckStatus" AS ENUM ('PASS', 'FAIL', 'TO_VERIFY_WITH_MANUFACTURER');

-- CreateEnum
CREATE TYPE "Standard" AS ENUM ('NFC_15_100', 'CEI_60364', 'IEEE_141', 'IEEE_242');

-- AlterEnum
BEGIN;
CREATE TYPE "ProtectionType_new" AS ENUM ('DISJONCTEUR', 'FUSIBLE', 'INTERRUPTEUR_SECTIONNEUR');
ALTER TABLE "public"."Protection" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Protection" ALTER COLUMN "type" TYPE "ProtectionType_new" USING ("type"::text::"ProtectionType_new");
ALTER TYPE "ProtectionType" RENAME TO "ProtectionType_old";
ALTER TYPE "ProtectionType_new" RENAME TO "ProtectionType";
DROP TYPE "public"."ProtectionType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Building" DROP CONSTRAINT "Building_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Calculation" DROP CONSTRAINT "Calculation_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Circuit" DROP CONSTRAINT "Circuit_protectionId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropIndex
DROP INDEX "Project_reference_key";

-- AlterTable
ALTER TABLE "Circuit" DROP COLUMN "cableLengthMeters",
DROP COLUMN "circuitTotalCurrentAmps",
DROP COLUMN "comment",
DROP COLUMN "conductorSectionMm2",
DROP COLUMN "createdAt",
DROP COLUMN "isDedicated",
DROP COLUMN "label",
DROP COLUMN "loadAmps",
DROP COLUMN "loadWatts",
DROP COLUMN "numberOfPoles",
DROP COLUMN "operatingCurrentAmps",
DROP COLUMN "protectionId",
DROP COLUMN "quantity",
DROP COLUMN "recommendedSectionMm2",
DROP COLUMN "room",
DROP COLUMN "shortCircuitCurrentAmps",
DROP COLUMN "updatedAt",
DROP COLUMN "voltageDropPercent",
ADD COLUMN     "circuitCount" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "totalPower" DOUBLE PRECISION NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "CircuitType" NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "customerName",
DROP COLUMN "description",
DROP COLUMN "objective",
DROP COLUMN "ownerId",
DROP COLUMN "reference",
DROP COLUMN "siteAddress",
DROP COLUMN "status",
ADD COLUMN     "client" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Protection" DROP COLUMN "createdAt",
DROP COLUMN "curve",
DROP COLUMN "description",
DROP COLUMN "equipmentName",
DROP COLUMN "poles",
DROP COLUMN "ratingAmps",
DROP COLUMN "updatedAt",
ADD COLUMN     "breakingCapacity" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "curveType" "CurveType" NOT NULL,
ADD COLUMN     "numberOfPoles" INTEGER NOT NULL,
ADD COLUMN     "ratedCurrent" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "type" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "photo",
ADD COLUMN     "avatarUrl" TEXT;

-- DropTable
DROP TABLE "Building";

-- DropTable
DROP TABLE "Calculation";

-- DropEnum
DROP TYPE "BuildingType";

-- DropEnum
DROP TYPE "CircuitCategory";

-- DropEnum
DROP TYPE "ProjectStatus";

-- CreateTable
CREATE TABLE "PowerSupply" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "type" "AlimentationType" NOT NULL,
    "nominalVoltage" DOUBLE PRECISION NOT NULL,
    "frequency" DOUBLE PRECISION NOT NULL,
    "regimeNeutre" "RegimeNeutre" NOT NULL,
    "distanceSourceToTGBT" DOUBLE PRECISION NOT NULL,
    "standard" "Standard" NOT NULL,

    CONSTRAINT "PowerSupply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FurthestLoadDistance" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "circuitName" TEXT NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FurthestLoadDistance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CableData" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "material" "CableMaterial" NOT NULL,
    "isolation" "CableIsolation" NOT NULL,
    "modePose" "ModePose" NOT NULL,

    CONSTRAINT "CableData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "currentNominal" DOUBLE PRECISION NOT NULL,
    "currentDesign" DOUBLE PRECISION NOT NULL,
    "recommendedCableSection" DOUBLE PRECISION NOT NULL,
    "correctedCableCapacity" DOUBLE PRECISION NOT NULL,
    "recommendedBreaker" DOUBLE PRECISION NOT NULL,
    "voltageDropVolts" DOUBLE PRECISION NOT NULL,
    "voltageDropPercent" DOUBLE PRECISION NOT NULL,
    "shortCircuitCurrentAtEnd" DOUBLE PRECISION NOT NULL,
    "breakerBreakingCapacity" DOUBLE PRECISION NOT NULL,
    "overloadCheck" "CheckStatus" NOT NULL,
    "voltageDropCheck" "CheckStatus" NOT NULL,
    "breakingCapacityCheck" "CheckStatus" NOT NULL,
    "coordinationCheck" "CheckStatus" NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PowerSupply_projectId_key" ON "PowerSupply"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "FurthestLoadDistance_projectId_key" ON "FurthestLoadDistance"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "CableData_projectId_key" ON "CableData"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Result_projectId_key" ON "Result"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Protection_projectId_key" ON "Protection"("projectId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PowerSupply" ADD CONSTRAINT "PowerSupply_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FurthestLoadDistance" ADD CONSTRAINT "FurthestLoadDistance_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CableData" ADD CONSTRAINT "CableData_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

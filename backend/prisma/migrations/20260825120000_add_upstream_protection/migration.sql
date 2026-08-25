-- AlterTable
ALTER TABLE "Protection"
ADD COLUMN "manufacturer" TEXT,
ADD COLUMN "reference" TEXT,
ADD COLUMN "selectivityLimitA" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "UpstreamProtection" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "type" "ProtectionType" NOT NULL,
    "ratedCurrent" DOUBLE PRECISION NOT NULL,
    "numberOfPoles" INTEGER NOT NULL,
    "curveType" "CurveType" NOT NULL,
    "breakingCapacity" DOUBLE PRECISION NOT NULL,
    "manufacturer" TEXT,
    "reference" TEXT,
    "selectivityLimitA" DOUBLE PRECISION,
    CONSTRAINT "UpstreamProtection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UpstreamProtection_projectId_key" ON "UpstreamProtection"("projectId");

-- AddForeignKey
ALTER TABLE "UpstreamProtection" ADD CONSTRAINT "UpstreamProtection_projectId_fkey"
FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Circuit" ADD COLUMN     "breakingCapacity" DOUBLE PRECISION,
ADD COLUMN     "cableIsolation" "CableIsolation",
ADD COLUMN     "cableMaterial" "CableMaterial",
ADD COLUMN     "correctionFactors" JSONB,
ADD COLUMN     "curveType" "CurveType",
ADD COLUMN     "distance" DOUBLE PRECISION,
ADD COLUMN     "izReference" DOUBLE PRECISION,
ADD COLUMN     "millivoltsPerAmpereMeter" DOUBLE PRECISION,
ADD COLUMN     "modePose" "ModePose",
ADD COLUMN     "numberOfPoles" INTEGER,
ADD COLUMN     "protectionType" "ProtectionType",
ADD COLUMN     "ratedCurrent" DOUBLE PRECISION,
ADD COLUMN     "selectivityVerified" BOOLEAN NOT NULL DEFAULT false;

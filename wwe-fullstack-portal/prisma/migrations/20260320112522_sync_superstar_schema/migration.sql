/*
  Warnings:

  - The primary key for the `Superstar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageUrl` on the `Superstar` table. All the data in the column will be lost.
  - You are about to drop the column `isChampion` on the `Superstar` table. All the data in the column will be lost.
  - You are about to drop the column `losses` on the `Superstar` table. All the data in the column will be lost.
  - You are about to drop the column `wins` on the `Superstar` table. All the data in the column will be lost.
  - The `id` column on the `Superstar` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[slug]` on the table `Superstar` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Superstar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intro` to the `Superstar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Superstar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Superstar" DROP CONSTRAINT "Superstar_pkey",
DROP COLUMN "imageUrl",
DROP COLUMN "isChampion",
DROP COLUMN "losses",
DROP COLUMN "wins",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "height" TEXT,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "intro" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "weight" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Superstar_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Superstar_slug_key" ON "Superstar"("slug");

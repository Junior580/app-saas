/*
  Warnings:

  - You are about to drop the column `user_id` on the `organizations` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `projcets` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `organizations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `projcets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "projcets" DROP CONSTRAINT "projcets_user_id_fkey";

-- AlterTable
ALTER TABLE "organizations" DROP COLUMN "user_id",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projcets" DROP COLUMN "user_id",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projcets" ADD CONSTRAINT "projcets_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

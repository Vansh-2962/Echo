/*
  Warnings:

  - Added the required column `userId` to the `Collections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collections" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Collections" ADD CONSTRAINT "Collections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

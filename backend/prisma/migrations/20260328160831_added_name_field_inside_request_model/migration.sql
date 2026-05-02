/*
  Warnings:

  - Added the required column `name` to the `Requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "name" TEXT NOT NULL;

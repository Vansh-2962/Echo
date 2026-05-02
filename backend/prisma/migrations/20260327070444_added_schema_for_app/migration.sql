-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('NONE', 'JSON', 'FORMDATA', 'URLENCODED', 'RAW');

-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('NONE', 'BEARER', 'BASIC', 'API_KEY', 'OAUTH2');

-- CreateTable
CREATE TABLE "Collections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requests" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "bodyType" "BodyType" NOT NULL,
    "rawBody" JSONB,
    "authType" "AuthType" NOT NULL,
    "scripts" TEXT,
    "collectionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auth" (
    "id" SERIAL NOT NULL,
    "type" "AuthType" NOT NULL,
    "token" TEXT,
    "username" TEXT,
    "password" TEXT,
    "apiKey" TEXT,
    "key" TEXT,
    "addTo" TEXT,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodyField" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "BodyField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyValue" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT,
    "description" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "paramsRequestId" INTEGER,
    "headersRequestId" INTEGER,
    "type" TEXT NOT NULL,

    CONSTRAINT "KeyValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "requestId" INTEGER NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "responseTime" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "timeline" JSONB NOT NULL,
    "breakdown" JSONB NOT NULL,
    "headers" JSONB NOT NULL,
    "body" JSONB NOT NULL,
    "cookies" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auth_requestId_key" ON "Auth"("requestId");

-- AddForeignKey
ALTER TABLE "Requests" ADD CONSTRAINT "Requests_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auth" ADD CONSTRAINT "Auth_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BodyField" ADD CONSTRAINT "BodyField_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyValue" ADD CONSTRAINT "KeyValue_paramsRequestId_fkey" FOREIGN KEY ("paramsRequestId") REFERENCES "Requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeyValue" ADD CONSTRAINT "KeyValue_headersRequestId_fkey" FOREIGN KEY ("headersRequestId") REFERENCES "Requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT,
    "PublicKey" TEXT NOT NULL,
    "History" INTEGER[],
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Account" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "PendingAmount" INTEGER NOT NULL,
    "WithdrawlAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Game" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Bet" INTEGER NOT NULL,
    "Player1Id" INTEGER NOT NULL,
    "Player2Id" INTEGER NOT NULL,
    "WinnerId" INTEGER,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_PublicKey_key" ON "User"("PublicKey");

-- CreateIndex
CREATE UNIQUE INDEX "Account_UserId_key" ON "Account"("UserId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

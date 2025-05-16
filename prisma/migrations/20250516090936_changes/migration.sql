/*
  Warnings:

  - The primary key for the `favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `place` DROP FOREIGN KEY `Place_knowledgeContentId_fkey`;

-- AlterTable
ALTER TABLE `favorite` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_knowledgeContentId_fkey` FOREIGN KEY (`knowledgeContentId`) REFERENCES `KnowledgeContent`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

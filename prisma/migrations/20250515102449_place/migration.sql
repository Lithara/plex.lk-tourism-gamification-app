-- CreateTable
CREATE TABLE `VisaApplication` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `personal_info` JSON NOT NULL,
    `passport_info` JSON NOT NULL,
    `child_info` JSON NOT NULL,
    `travel_info` JSON NOT NULL,
    `contact_info` JSON NOT NULL,
    `declarations` JSON NOT NULL,
    `document_upload` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Place` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `longDescription` VARCHAR(191) NOT NULL,
    `specialNotes` VARCHAR(191) NOT NULL,
    `mainImage` VARCHAR(191) NOT NULL,
    `galleryImages` JSON NOT NULL,
    `plexes` INTEGER NOT NULL,
    `flags` INTEGER NOT NULL,
    `visitors` INTEGER NOT NULL,
    `difficulty` VARCHAR(191) NOT NULL,
    `popular` BOOLEAN NOT NULL,
    `knowledge` BOOLEAN NOT NULL,
    `knowledgeContentId` INTEGER NULL,
    `coordinatesId` INTEGER NULL,
    `addedById` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Place_slug_key`(`slug`),
    UNIQUE INDEX `Place_knowledgeContentId_key`(`knowledgeContentId`),
    UNIQUE INDEX `Place_coordinatesId_key`(`coordinatesId`),
    UNIQUE INDEX `Place_addedById_key`(`addedById`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KnowledgeContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KnowledgeSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `images` JSON NULL,
    `knowledgeContentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coordinates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlaceAddedBy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_knowledgeContentId_fkey` FOREIGN KEY (`knowledgeContentId`) REFERENCES `KnowledgeContent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_coordinatesId_fkey` FOREIGN KEY (`coordinatesId`) REFERENCES `Coordinates`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Place` ADD CONSTRAINT `Place_addedById_fkey` FOREIGN KEY (`addedById`) REFERENCES `PlaceAddedBy`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KnowledgeSection` ADD CONSTRAINT `KnowledgeSection_knowledgeContentId_fkey` FOREIGN KEY (`knowledgeContentId`) REFERENCES `KnowledgeContent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

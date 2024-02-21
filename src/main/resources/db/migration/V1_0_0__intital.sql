CREATE TABLE IF NOT EXISTS `book_inventory` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(100) NOT NULL,
    `author` VARCHAR(50) NOT NULL,
    `year_of_publication` INT NOT NULL,
    `isbn_code` VARCHAR(20) NOT NULL,
    `genre` VARCHAR(50) NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL,
    `identifier` VARCHAR(50) NOT NULL
);

CREATE UNIQUE INDEX `idx_book_identifier` ON `book_inventory` (`identifier`);


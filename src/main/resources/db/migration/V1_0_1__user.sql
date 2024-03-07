CREATE TABLE IF NOT EXISTS `user` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `username` VARCHAR(50) NOT NULL UNIQUE ,
    `password` VARCHAR(200) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL,
    `identifier` VARCHAR(50) UNIQUE NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,
    `enabled` BIT NOT NULL,
    `credentials_non_expired` BIT NOT NULL,
    `account_non_expired` BIT NOT NULL,
    `shipping_address` TEXT
    );

CREATE UNIQUE INDEX `idx_user_identifier` ON `user` (`identifier`);
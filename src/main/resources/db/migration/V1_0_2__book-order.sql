
CREATE TABLE IF NOT EXISTS `book_orders` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `status` VARCHAR(50) NOT NULL,
    `total_amount` BIGINT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL,
    `identifier` VARCHAR(50) UNIQUE NOT NULL,
    `user_id` INT,
     FOREIGN KEY (`user_id`) REFERENCES user(id)
);

CREATE UNIQUE INDEX `idx_book_orders_identifier` ON `book_orders` (`identifier`);


CREATE TABLE IF NOT EXISTS `order_items` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `price` BIGINT NOT NULL,
    `quantity` INT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL,
    `identifier` VARCHAR(50) UNIQUE NOT NULL,
    `book_entity_id` INT,
    FOREIGN KEY (`book_entity_id`) REFERENCES book_inventory(id)
);

CREATE UNIQUE INDEX `idx_order_items_identifier` ON `order_items` (`identifier`);

CREATE TABLE IF NOT EXISTS `book_order_items` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `book_order_entity_id` INT,
    `order_items_id` INT,
    FOREIGN KEY (`book_order_entity_id`) REFERENCES book_orders(id),
    FOREIGN KEY (`order_items_id`) REFERENCES order_items(id)
);
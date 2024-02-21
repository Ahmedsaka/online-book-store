package com.interswitch.onlinebookstore.dataloaders;

import com.interswitch.onlinebookstore.inventory.entity.BookInventory;
import com.interswitch.onlinebookstore.inventory.repository.BookInventoryRepository;
import lombok.RequiredArgsConstructor;
import net.datafaker.Faker;
import net.datafaker.providers.base.Book;
import org.apache.commons.lang3.EnumUtils;
import org.hibernate.validator.constraints.ISBN;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.Year;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Component
@ConditionalOnProperty(value="app.seed.database")
@RequiredArgsConstructor
public class Seeds implements CommandLineRunner {

    final Random random = new Random();
    final Faker faker = new Faker();

    private final BookInventoryRepository bookInventoryRepository;

    final List<BookInventory.Genre> genre = EnumUtils.getEnumList(BookInventory.Genre.class);

    @Override
    public void run(String... args) {
        List<BookInventory> bookInventories = new LinkedList<>();
        for (int i = 0; i < 1000; i++) {
            Book book = faker.book();

            bookInventories.add(BookInventory.builder()
                    .identifier(UUID.randomUUID().toString())
                    .author(book.author())
                    .title(book.title())
                    .isbnCode("%s-%s".formatted(String.format("%04d", random.nextInt(10000)), String.format("%04d", random.nextInt(10000))))
                    .yearOfPublication(random.nextInt(Year.now().getValue() - 100, Year.now().getValue()))
                    .genre(genre.get(random.nextInt(0, genre.size()-1)).name())
                    .createdAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .build());
        }
        bookInventoryRepository.saveAll(bookInventories);
    }
}

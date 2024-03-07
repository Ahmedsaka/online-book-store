package com.interswitch.onlinebookstore.dataloaders;

import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import com.interswitch.onlinebookstore.user.model.UserRequest;
import com.interswitch.onlinebookstore.user.service.UserService;
import com.interswitch.onlinebookstore.utilities.BookInventoryUtil;
import com.interswitch.onlinebookstore.inventory.repository.BookInventoryRepository;
import lombok.RequiredArgsConstructor;
import net.datafaker.Faker;
import org.apache.commons.lang3.EnumUtils;
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
    private final UserService userService;

    final List<BookEntity.Genre> genre = EnumUtils.getEnumList(BookEntity.Genre.class);

    @Override
    public void run(String... args) {
        List<BookEntity> bookEntityInventories = new LinkedList<>();
        for (int i = 0; i < 1000; i++) {
            net.datafaker.providers.base.Book book = faker.book();

            bookEntityInventories.add(BookEntity.builder()
                    .identifier(UUID.randomUUID().toString())
                    .author(book.author())
                    .title(book.title())
//                    .isbnCode("%s-%s".formatted(String.format("%04d", random.nextInt(10000)), String.format("%04d", random.nextInt(10000))))
                    .isbnCode(BookInventoryUtil.generateISBN("978", 13))
                    .yearOfPublication(random.nextInt(Year.now().getValue() - 100, Year.now().getValue()))
                    .genre(String.valueOf(genre.get(random.nextInt(0, genre.size()-1))))
                    .stock(random.nextInt(0, 20))
                    .price(random.nextLong(200000, 500000))
                    .createdAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .build());
        }
        bookInventoryRepository.saveAll(bookEntityInventories);

        userService.createUser(UserRequest.builder()
                .shippingAddress("Lagos Nigeria")
                .email("therealeng@email.com")
                .firstName("Engineer")
                .lastName("test")
                .password("password")
                .username("user")
                .phoneNumber("+23489135199661")
                .build());
    }
}

package com.interswitch.onlinebookstore.inventory.service;

import com.interswitch.onlinebookstore.inventory.entity.BookInventory;
import com.interswitch.onlinebookstore.inventory.model.BookInventoryResponse;
import com.interswitch.onlinebookstore.inventory.model.SearchRequest;
import com.interswitch.onlinebookstore.inventory.repository.BookInventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.UtilityClass;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Year;

@Service
@RequiredArgsConstructor
public class BookInventoryService {
    private final BookInventoryRepository bookInventoryRepository;

    public Page<BookInventoryResponse> search(SearchRequest request) {
        return new PageImpl<>(bookInventoryRepository.search(request)
                .map(BookInventoryMapper::toBookInventoryResponse)
                .stream().toList());
    }

    @UtilityClass
    static class BookInventoryMapper {
        public BookInventoryResponse toBookInventoryResponse(BookInventory bookInventory) {
            return BookInventoryResponse.builder()
                    .id(bookInventory.getIdentifier())
                    .title(bookInventory.getTitle())
                    .author(bookInventory.getAuthor())
                    .isbnCode(bookInventory.getIsbnCode())
                    .genre(bookInventory.getGenre().name().toLowerCase())
                    .yearOfPublication(Year.of(bookInventory.getYearOfPublication()))
                    .price(BigDecimal.valueOf(bookInventory.getPrice()).divide(BigDecimal.valueOf(100L), 2, 2))
                    .stock(bookInventory.getStock())
                    .build();
        }
    }
}

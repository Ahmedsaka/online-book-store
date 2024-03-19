package com.interswitch.onlinebookstore.inventory.service;

import com.interswitch.onlinebookstore.commons.ListApiResponse;
import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import com.interswitch.onlinebookstore.inventory.exception.BookNotFoundException;
import com.interswitch.onlinebookstore.inventory.model.BookInventoryResponse;
import com.interswitch.onlinebookstore.inventory.model.SearchRequest;
import com.interswitch.onlinebookstore.inventory.repository.BookInventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.UtilityClass;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Year;
import java.util.Optional;

import static com.fasterxml.classmate.AnnotationOverrides.builder;

@Service
@RequiredArgsConstructor
public class BookInventoryService {
    private final BookInventoryRepository bookInventoryRepository;

    public Page<BookInventoryResponse> search(SearchRequest request) {
        return new PageImpl<>(bookInventoryRepository.search(request)
                .map(BookInventoryMapper::toBookInventoryResponse)
                .stream().toList());
    }

    public BookInventoryResponse findByIdentifier(String bookId) {
        return Optional.ofNullable(bookInventoryRepository.findByIdentifier(bookId))
                .map(BookInventoryMapper::toBookInventoryResponse)
                .orElseThrow(() -> new BookNotFoundException("Book with id %s not found".formatted(bookId)));
    }

    public void updateStockById(String bookId, int updatedStock) {
        bookInventoryRepository.updateStockById(bookId, updatedStock);
    }
    public ListApiResponse<BookInventoryResponse> fetchAll(int pageNumber, int pageSize, String field) {
        Page result = bookInventoryRepository.findAll(PageRequest.of(pageNumber, pageSize, Sort.by(field)));
        int totalNumber = result.getNumberOfElements(), offset = result.getTotalPages(), size = result.getNumber();
//        return ListApiResponse.builder()
//                .totalNumber(result.getNumber())
//                .content(result.map(BookInventoryMapper::toBookInventoryResponse).stream().toList())
//                .build();
        ListApiResponse<BookInventoryResponse> response = new ListApiResponse<>();
        return response;

    }

    @UtilityClass
    public static class BookInventoryMapper {
        public BookInventoryResponse toBookInventoryResponse(BookEntity bookEntity) {
            return BookInventoryResponse.builder()
                    .id(bookEntity.getIdentifier())
                    .title(bookEntity.getTitle())
                    .author(bookEntity.getAuthor())
                    .isbnCode(bookEntity.getIsbnCode())
                    .genre(bookEntity.getGenre().toLowerCase())
                    .yearOfPublication(Year.of(bookEntity.getYearOfPublication()))
                    .price(BigDecimal.valueOf(bookEntity.getPrice()).divide(BigDecimal.valueOf(100L), 2, 2))
                    .stock(bookEntity.getStock())
                    .build();
        }
    }
}

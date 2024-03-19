package com.interswitch.onlinebookstore.inventory.api;

import com.interswitch.onlinebookstore.commons.ListApiResponse;
import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import com.interswitch.onlinebookstore.inventory.model.BookInventoryResponse;
import com.interswitch.onlinebookstore.inventory.model.SearchRequest;
import com.interswitch.onlinebookstore.inventory.service.BookInventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/books")
@RequiredArgsConstructor
public class BookInventoryController {
    private final BookInventoryService bookInventoryService;

    @PostMapping("/search")
    public Page<BookInventoryResponse> search(@Validated @RequestBody SearchRequest searchRequest) {
        return bookInventoryService.search(searchRequest);
    }

    @GetMapping
    public ListApiResponse<BookInventoryResponse> fetchAll(@RequestParam(value = "offset", defaultValue = "0") int offset,
                                                @RequestParam(value = "size", defaultValue = "10") int pageSize,
                                                @RequestParam(value = "sortBy", defaultValue = "yearOfPublication") String sortBy) {
        return bookInventoryService.fetchAll(offset, pageSize, sortBy);
    }
}

package com.interswitch.onlinebookstore.inventory.api;

import com.interswitch.onlinebookstore.inventory.model.BookInventoryResponse;
import com.interswitch.onlinebookstore.inventory.model.SearchRequest;
import com.interswitch.onlinebookstore.inventory.service.BookInventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/books")
@RequiredArgsConstructor
public class BookInventoryController {
    private final BookInventoryService bookInventoryService;

    @GetMapping("/search")
    public Page<BookInventoryResponse> search(@ModelAttribute SearchRequest searchRequest) {
        return bookInventoryService.search(searchRequest);
    }
}

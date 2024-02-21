package com.interswitch.onlinebookstore.inventory.repository;

import com.interswitch.onlinebookstore.inventory.entity.BookInventory;
import com.interswitch.onlinebookstore.inventory.model.SearchRequest;
import org.springframework.data.domain.Page;


public interface CustomBookInventoryRepository {
    Page<BookInventory> search(SearchRequest searchRequest);
}

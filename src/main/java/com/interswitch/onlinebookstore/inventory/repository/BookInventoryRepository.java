package com.interswitch.onlinebookstore.inventory.repository;

import com.interswitch.onlinebookstore.inventory.entity.BookInventory;
import org.springframework.data.repository.CrudRepository;

public interface BookInventoryRepository extends CrudRepository<BookInventory, Long>, CustomBookInventoryRepository { }

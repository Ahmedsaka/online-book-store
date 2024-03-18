package com.interswitch.onlinebookstore.inventory.repository;

import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface BookInventoryRepository extends CrudRepository<BookEntity, Long>, CustomBookInventoryRepository, JpaSpecificationExecutor<BookEntity> {
    BookEntity findByIdentifier(String identifier);

    @Modifying
    @Query("UPDATE BookEntity b SET b.stock = :stock WHERE  b.identifier = :id ")
    void updateStockById(@Param("id")String id, @Param("stock")int stock);
}

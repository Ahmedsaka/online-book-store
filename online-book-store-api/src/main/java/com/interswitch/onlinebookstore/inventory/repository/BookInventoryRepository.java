package com.interswitch.onlinebookstore.inventory.repository;

import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookInventoryRepository extends JpaRepository<BookEntity, Long>, CustomBookInventoryRepository {
    BookEntity findByIdentifier(String identifier);

    @Modifying
    @Query("UPDATE BookEntity b SET b.stock = :stock WHERE  b.identifier = :id ")
    void updateStockById(@Param("id")String id, @Param("stock")int stock);
}

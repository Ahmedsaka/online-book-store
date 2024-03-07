package com.interswitch.onlinebookstore.cart.repository;

import com.interswitch.onlinebookstore.cart.entity.BookOrderEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookOrderRepository extends CrudRepository<BookOrderEntity, Long> {
    Optional<BookOrderEntity> findByIdentifier(String identifier);
    Optional<BookOrderEntity> findByCartStatusAndUser(BookOrderEntity.CartStatus status, UserDetails userDetails);
}

package com.interswitch.onlinebookstore.cart.repository;

import com.interswitch.onlinebookstore.cart.entity.OrderItemEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<OrderItemEntity, Long> {
    OrderItemEntity findByIdentifier(String identifier);
}

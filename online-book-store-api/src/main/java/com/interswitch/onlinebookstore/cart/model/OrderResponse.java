package com.interswitch.onlinebookstore.cart.model;

import com.interswitch.onlinebookstore.inventory.model.BookInventoryResponse;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder
@Data
public class OrderResponse {
    private BookInventoryResponse book;
    private int quantity;
    private BigDecimal price;
    private String identifier;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

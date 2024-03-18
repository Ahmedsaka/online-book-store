package com.interswitch.onlinebookstore.cart.model;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class BookOrderResponse {
    private String status;
    private BigDecimal totalAmount;
    private List<OrderResponse> orderItems;
    private String identifier;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

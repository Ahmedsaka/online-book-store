package com.interswitch.onlinebookstore.cart.model;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class OrderRequest {
    @NotBlank(message = "BookId cannot be blank or empty")
    private String bookId;
    @Min(value = 1, message = "Quantity supplied is invalid")
    private int quantity;
}

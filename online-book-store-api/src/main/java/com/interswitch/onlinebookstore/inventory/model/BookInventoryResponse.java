package com.interswitch.onlinebookstore.inventory.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Year;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookInventoryResponse {
    private String id;
    private String title;
    private String isbnCode;
    private String author;
    private String genre;
    private Year yearOfPublication;
    private BigDecimal price;
    private int stock;
}

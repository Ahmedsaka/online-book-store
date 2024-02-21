package com.interswitch.onlinebookstore.inventory.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.interswitch.onlinebookstore.validator.annotation.ValidYear;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.ISBN;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BookInventoryRequest {
    private String title;
    @ISBN(message = "ISBN is invalid")
    private String isbnCode;
    private String author;
    private String genre;
    @ValidYear
    private int yearOfPublication;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

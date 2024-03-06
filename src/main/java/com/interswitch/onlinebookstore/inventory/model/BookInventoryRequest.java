package com.interswitch.onlinebookstore.inventory.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.interswitch.onlinebookstore.validator.annotation.ValidGenre;
import com.interswitch.onlinebookstore.validator.annotation.ValidYear;
import jakarta.validation.constraints.NotBlank;
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
    @NotBlank(message = "Title cannot be null")
    private String title;
    @NotBlank(message = "ISBN cannot be null")
    @ISBN(message = "ISBN is invalid")
    private String isbnCode;
    private String author;
    @NotBlank(message = "Supplied year is invalid cannot be null")
    @ValidGenre(message = "Genre is invalid")
    private String genre;
    @NotBlank(message = "Year of publication cannot be null")
    @ValidYear(message = "Supplied year is invalid")
    private Integer yearOfPublication;
    private long price;
    private int stock;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

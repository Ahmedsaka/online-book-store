package com.interswitch.onlinebookstore.inventory.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.interswitch.onlinebookstore.validator.annotation.ValidGenre;
import com.interswitch.onlinebookstore.validator.annotation.ValidYear;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@NoArgsConstructor
public class SearchRequest {
    private int pageSize = 10;
    private int pageNumber = 0;
    private String title;
    private String author;
    @ValidYear(message = "Year of publication is invalid")
    private Integer yearOfPublication;
    @ValidGenre(message = "Genre is invalid")
    private String genre;
}

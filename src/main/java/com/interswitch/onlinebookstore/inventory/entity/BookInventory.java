package com.interswitch.onlinebookstore.inventory.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "book_inventory")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "identifier")
    private String identifier;
    @Column(name = "isbn_code")
    private String isbnCode;
    @Column(name = "author")
    private String author;
    @Column(name = "genre")
    private String genre;
    @Column(name = "year_of_publication")
    private int yearOfPublication;
    @Column(name = "created_at")
    @CreatedDate
    private LocalDateTime createdAt;
    @Column(name = "updated_at")
    @LastModifiedDate
    private LocalDateTime updatedAt;

    public enum Genre {
        FRICTION, THRILLER, MYSTERY, POETRY, HORROR, SATIRE
    }
}

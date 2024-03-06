package com.interswitch.onlinebookstore.inventory.entity;

import com.interswitch.onlinebookstore.commons.BaseEntity;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "book_inventory")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookInventory extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "title")
    private String title;
    @Column(name = "isbn_code")
    private String isbnCode;
    @Column(name = "author")
    private String author;
    @Column(name = "genre")
    @Enumerated(EnumType.STRING)
    private Genre genre;
    @Column(name = "year_of_publication")
    private int yearOfPublication;
    @Column(name = "price")
    private long price;
    @Column(name = "stock")
    private int stock;
    @Column(name = "identifier")
    private String identifier;
    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "updated_at")
    @LastModifiedDate
    private LocalDateTime updatedAt;

    public enum Genre {
        FRICTION, THRILLER, MYSTERY, POETRY, HORROR, SATIRE
    }
}

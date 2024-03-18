package com.interswitch.onlinebookstore.inventory.entity;

import jakarta.persistence.*;
import lombok.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "book_inventory")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookEntity implements Serializable {
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
    private String genre;
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

    @PrePersist
    void setUuid() {
        if (Objects.isNull(identifier) || StringUtils.isBlank(identifier)) {
            identifier = UUID.randomUUID().toString();
        }
        if (Objects.isNull(createdAt)) createdAt = LocalDateTime.now();
        if (Objects.isNull(updatedAt)) updatedAt = LocalDateTime.now();
    }

    public enum Genre {
        FRICTION, THRILLER, MYSTERY, POETRY, HORROR, SATIRE
    }
}

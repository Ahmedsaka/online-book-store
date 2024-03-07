package com.interswitch.onlinebookstore.cart.entity;

import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.util.ObjectUtils;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "order_items")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItemEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private BookEntity bookEntity;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "price")
    private Long price;
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
}

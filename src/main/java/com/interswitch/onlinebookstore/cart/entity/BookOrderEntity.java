package com.interswitch.onlinebookstore.cart.entity;


import com.interswitch.onlinebookstore.user.entity.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "book_orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookOrderEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private UserEntity user;
    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private CartStatus cartStatus;
    @Column(name = "total_amount")
    private long totalAmount;
    @OneToMany
    @JoinTable(name = "book_order_items")
    private List<OrderItemEntity> orderItems;
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

    public enum CartStatus {
        ACTIVE, INACTIVE
    }
}
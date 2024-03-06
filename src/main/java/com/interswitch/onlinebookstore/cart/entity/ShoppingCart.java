package com.interswitch.onlinebookstore.cart.entity;


import com.interswitch.onlinebookstore.commons.BaseEntity;
import com.interswitch.onlinebookstore.user.entity.User;
import jakarta.persistence.*;
import lombok.*;


@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "shopping_cart")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShoppingCart extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne
    private User user;
    @Column(name = "cart_status")
    private String cartStatus;
    @Column(name = "total_amount")
    private long totalAmount;

    public enum CartStatus {
        ACTIVE, INACTIVE
    }
}


//order_id (INT PRIMARY KEY)
//user_id (INT FOREIGN KEY REFERENCES Users(user_id))
//order_date (DATETIME NOT NULL)
//order_status (ENUM('PENDING', 'PROCESSING', 'SHIPPED', 'CANCELLED'))
//total_amount (DECIMAL(10,2) NOT NULL)

//order_item_id (INT PRIMARY KEY)
//order_id (INT FOREIGN KEY REFERENCES Orders(order_id))
//book_id (INT FOREIGN KEY REFERENCES Books(book_id))
//quantity (INT NOT NULL)
//unit_price (DECIMAL(10,2) NOT NULL)
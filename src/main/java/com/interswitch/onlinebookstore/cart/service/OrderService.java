package com.interswitch.onlinebookstore.cart.service;

import com.interswitch.onlinebookstore.cart.entity.BookOrderEntity;
import com.interswitch.onlinebookstore.cart.entity.OrderItemEntity;
import com.interswitch.onlinebookstore.cart.exception.BookOrderNotFoundException;
import com.interswitch.onlinebookstore.cart.model.BookOrderResponse;
import com.interswitch.onlinebookstore.cart.model.OrderRequest;
import com.interswitch.onlinebookstore.cart.model.OrderResponse;
import com.interswitch.onlinebookstore.cart.repository.BookOrderRepository;
import com.interswitch.onlinebookstore.cart.repository.OrderRepository;
import com.interswitch.onlinebookstore.inventory.entity.BookEntity;
import com.interswitch.onlinebookstore.inventory.repository.BookInventoryRepository;
import com.interswitch.onlinebookstore.inventory.service.BookInventoryService;
import com.interswitch.onlinebookstore.user.entity.UserEntity;
import com.interswitch.onlinebookstore.user.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {
    private final BookOrderRepository bookOrderRepository;
    private final BookInventoryService bookInventoryService;
    private final BookInventoryRepository bookInventoryRepository;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    public BookOrderResponse viewOrdersInCartForLoggedInUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = (String) authentication.getPrincipal();

        UserEntity loggedInUser = userRepository.findByUsername(username);

        BookOrderEntity bookOrderEntity = bookOrderRepository.findByCartStatusAndUser(BookOrderEntity.CartStatus.ACTIVE, loggedInUser)
                .orElseThrow(() -> new BookOrderNotFoundException("No cart for found for user %s".formatted(username)));
        return BookOrderMapper.toBookOrderResponse(bookOrderEntity);
    }

    @Transactional
    public BookOrderResponse addOrderToCart(OrderRequest orderRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = (String) authentication.getPrincipal();

        BookEntity book = bookInventoryRepository.findByIdentifier(orderRequest.getBookId());
        if (book.getStock() < 1) {
            log.error("{} is out of stock", book.getTitle());
            throw new RuntimeException();
        }

        if (book.getStock() - orderRequest.getQuantity() < 0) {
            log.error("The requested quantity for {} is greater than what is available in stock", book.getTitle());
            throw new RuntimeException();
        }

        bookInventoryService.updateStockById(orderRequest.getBookId(), book.getStock() - orderRequest.getQuantity());

        UserEntity finalUser = userRepository.findByUsername(username);

        BookOrderEntity bookOrderEntity = bookOrderRepository.findByCartStatusAndUser(BookOrderEntity.CartStatus.ACTIVE, finalUser)
                .orElseGet(() -> create(finalUser));

        OrderItemEntity savedOrderItem = orderRepository.save(OrderItemEntity.builder()
                .bookEntity(book)
                .quantity(orderRequest.getQuantity())
                .identifier(UUID.randomUUID().toString())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .price(orderRequest.getQuantity() * book.getPrice())
                .build());

        bookOrderEntity.getOrderItems().add(savedOrderItem);
        bookOrderEntity.setTotalAmount(bookOrderEntity.getOrderItems().stream().map(OrderItemEntity::getPrice).reduce(0L, Long::sum));
        return BookOrderMapper.toBookOrderResponse(bookOrderRepository.save(bookOrderEntity));
    }

    private BookOrderEntity create(UserEntity user) {
        return bookOrderRepository.save(BookOrderEntity.builder()
                .orderItems(new ArrayList<>())
                .cartStatus(BookOrderEntity.CartStatus.ACTIVE)
                .totalAmount(0L)
                .identifier(UUID.randomUUID().toString())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .user(user)
                .build());
    }

    @UtilityClass
    static class BookOrderMapper {
        public static BookOrderResponse toBookOrderResponse(BookOrderEntity bookOrderEntity) {
            List<OrderResponse> orderResponses = new ArrayList<>();
            if (!CollectionUtils.isEmpty(bookOrderEntity.getOrderItems())) {
                orderResponses = bookOrderEntity.getOrderItems().stream().map(BookOrderMapper::toOrderResponse).toList();
            }
            return BookOrderResponse.builder()
                    .status(bookOrderEntity.getCartStatus().name())
                    .createdAt(bookOrderEntity.getCreatedAt())
                    .identifier(bookOrderEntity.getIdentifier())
                    .updatedAt(bookOrderEntity.getUpdatedAt())
                    .orderItems(orderResponses)
                    .totalAmount(BigDecimal.valueOf(bookOrderEntity.getTotalAmount()).divide(BigDecimal.valueOf(100), RoundingMode.UP))
                    .build();
        }

        public static OrderResponse toOrderResponse(OrderItemEntity orderItemEntity) {
            return OrderResponse.builder()
                    .quantity(orderItemEntity.getQuantity())
                    .createdAt(orderItemEntity.getCreatedAt())
                    .updatedAt(orderItemEntity.getUpdatedAt())
                    .identifier(orderItemEntity.getIdentifier())
                    .book(BookInventoryService.BookInventoryMapper.toBookInventoryResponse(orderItemEntity.getBookEntity()))
                    .price(BigDecimal.valueOf(orderItemEntity.getPrice()).divide(BigDecimal.valueOf(100), RoundingMode.UP))
                    .build();
        }
    }
}

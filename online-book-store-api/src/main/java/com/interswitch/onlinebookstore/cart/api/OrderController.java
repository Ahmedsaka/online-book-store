package com.interswitch.onlinebookstore.cart.api;

import com.interswitch.onlinebookstore.cart.model.BookOrderResponse;
import com.interswitch.onlinebookstore.cart.model.OrderRequest;
import com.interswitch.onlinebookstore.cart.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public BookOrderResponse addOrderToCart(@RequestBody @Validated OrderRequest orderRequest) {
        return orderService.addOrderToCart(orderRequest);
    }

    @GetMapping
    public BookOrderResponse viewOrdersInCartForLoggedInUser() {
        return orderService.viewOrdersInCartForLoggedInUser();
    }
}

package com.interswitch.onlinebookstore.cart.exception;

public class BookOrderNotFoundException extends RuntimeException {
    public BookOrderNotFoundException(String message) {
        super(message);
    }

    public BookOrderNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

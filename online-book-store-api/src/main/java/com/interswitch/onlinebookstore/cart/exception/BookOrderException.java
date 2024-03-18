package com.interswitch.onlinebookstore.cart.exception;

public class BookOrderException extends RuntimeException{

    public BookOrderException(String message) {
        super(message);
    }

    public BookOrderException(String message, Throwable cause) {
        super(message, cause);
    }
}

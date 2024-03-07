package com.interswitch.onlinebookstore.user.api;

import com.interswitch.onlinebookstore.user.model.AuthRequest;
import com.interswitch.onlinebookstore.user.model.AuthResponse;
import com.interswitch.onlinebookstore.user.model.UserDataResponse;
import com.interswitch.onlinebookstore.user.model.UserRequest;
import com.interswitch.onlinebookstore.user.service.AuthService;
import com.interswitch.onlinebookstore.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    @PostMapping
    public ResponseEntity<AuthResponse> login(@Validated @RequestBody AuthRequest authRequest) {
        return ResponseEntity.ok(authService.processLogin(authRequest));
    }

    @PostMapping("/signup")
    public ResponseEntity<UserDataResponse> login(@Validated @RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(userService.createUser(userRequest));
    }
}

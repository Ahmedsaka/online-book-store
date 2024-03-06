package com.interswitch.onlinebookstore.user.api;

import com.interswitch.onlinebookstore.user.model.UserDataResponse;
import com.interswitch.onlinebookstore.user.model.UserRequest;
import com.interswitch.onlinebookstore.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public UserDataResponse createUser(@Validated @RequestBody UserRequest userRequest) {
        return userService.createUser(userRequest);
    }
}

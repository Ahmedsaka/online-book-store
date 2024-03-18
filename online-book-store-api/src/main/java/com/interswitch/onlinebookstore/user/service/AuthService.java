package com.interswitch.onlinebookstore.user.service;

import com.interswitch.onlinebookstore.user.exception.AuthenticationException;
import com.interswitch.onlinebookstore.user.model.AuthRequest;
import com.interswitch.onlinebookstore.user.model.AuthResponse;
import com.interswitch.onlinebookstore.utilities.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse processLogin(AuthRequest authRequest) {
        String jwt;
        try {
            UserDetails details = userDetailsService.loadUserByUsername(authRequest.getUsername());
            passwordEncoder.matches(authRequest.getPassword(), details.getPassword());
            jwt = jwtUtil.generate(authRequest.getUsername(), null);
        } catch (AuthenticationException | UsernameNotFoundException ex) {
            log.error("Error occurred while generating token: {}", ex.getMessage());
            throw new AuthenticationException(ex.getMessage(), ex.getCause());
        }
        return AuthResponse.builder()
                .token(jwt)
                .build();
    }
}

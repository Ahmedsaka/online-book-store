package com.interswitch.onlinebookstore.user.service;

import com.interswitch.onlinebookstore.user.entity.User;
import com.interswitch.onlinebookstore.user.model.UserDataResponse;
import com.interswitch.onlinebookstore.user.model.UserRequest;
import com.interswitch.onlinebookstore.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.experimental.UtilityClass;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return Optional.of(userRepository.findByUsername(username))
                .orElseThrow(() -> new UsernameNotFoundException("User %s does not exists".formatted(username)));
    }

    public UserDataResponse findUserByUsername(String username) throws UsernameNotFoundException {
        return Optional.of(userRepository.findByUsername(username))
                        .map(UserMapper::toUserDataResponse)
                        .orElseThrow(() -> new UsernameNotFoundException("User %s does not exists".formatted(username)));
    }

    public UserDataResponse createUser(UserRequest userRequest) {
        userRequest.setPassword(new BCryptPasswordEncoder().encode(userRequest.getPassword()));
        return Optional.of(userRepository.save(UserMapper.toUserEntity(userRequest)))
                .map(UserMapper::toUserDataResponse)
                .get();
    }

    @UtilityClass
    public static class UserMapper {
        public static UserDataResponse toUserDataResponse(User user) {
            return UserDataResponse.builder()
                    .email(user.getEmail())
                    .firstName(user.getFirstName())
                    .username(user.getUsername())
                    .lastName(user.getLastName())
                    .shippingAddress(user.getShippingAddress())
                    .phoneNumber(user.getPhoneNumber())
                    .id(user.getIdentifier())
                    .createdDate(user.getCreatedAt())
                    .lastUpdatedDate(user.getUpdatedAt())
                    .build();
        }

        public static User toUserEntity(UserRequest userRequest) {
            return User.builder()
                    .email(userRequest.getEmail())
                    .accountNonExpired(true)
                    .credentialsNonExpired(true)
                    .password(userRequest.getPassword())
                    .username(userRequest.getUsername())
                    .phoneNumber(userRequest.getPhoneNumber())
                    .firstName(userRequest.getFirstName())
                    .lastName(userRequest.getLastName())
                    .shippingAddress(userRequest.getShippingAddress())
                    .identifier(UUID.randomUUID().toString())
                    .createdAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .build();
        }
    }
}

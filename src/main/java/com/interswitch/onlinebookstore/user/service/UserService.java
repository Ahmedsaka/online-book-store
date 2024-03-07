package com.interswitch.onlinebookstore.user.service;

import com.interswitch.onlinebookstore.user.entity.UserEntity;
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
        public static UserDataResponse toUserDataResponse(UserEntity userEntity) {
            return UserDataResponse.builder()
                    .email(userEntity.getEmail())
                    .firstName(userEntity.getFirstName())
                    .username(userEntity.getUsername())
                    .lastName(userEntity.getLastName())
                    .shippingAddress(userEntity.getShippingAddress())
                    .phoneNumber(userEntity.getPhoneNumber())
                    .id(userEntity.getIdentifier())
                    .createdDate(userEntity.getCreatedAt())
                    .lastUpdatedDate(userEntity.getUpdatedAt())
                    .build();
        }

        public static UserEntity toUserEntity(UserRequest userRequest) {
            return UserEntity.builder()
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

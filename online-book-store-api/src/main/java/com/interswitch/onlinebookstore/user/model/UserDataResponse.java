package com.interswitch.onlinebookstore.user.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDataResponse {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String phoneNumber;
    private String shippingAddress;
    private String id;
    private LocalDateTime createdDate;
    private LocalDateTime lastUpdatedDate;

}

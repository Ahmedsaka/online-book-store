package com.interswitch.onlinebookstore.user.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserRequest {
    @NotBlank(message = "First name cannot be null or empty")
    private String firstName;
    @NotBlank(message = "Last name cannot be null or empty")
    private String lastName;
    private String username;
    @NotBlank(message = "email cannot be null or empty")
    @Email(message = "Kindly enter a valid email")
    private String email;
    @NotBlank(message = "Password cannot be null or empty")
    private String password;
    private String phoneNumber;
    private String shippingAddress;
}

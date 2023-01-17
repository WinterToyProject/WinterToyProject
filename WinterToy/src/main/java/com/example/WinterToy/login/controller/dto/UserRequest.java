package com.example.WinterToy.login.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public final class UserRequest {
    private String userId;
    private String password;
    private String userName;
}

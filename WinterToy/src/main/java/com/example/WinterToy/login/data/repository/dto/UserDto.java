package com.example.WinterToy.login.data.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public final class UserDto {    //UserRequest -> UserDto
    private String userId;
    private String password;
    private String userName;
}

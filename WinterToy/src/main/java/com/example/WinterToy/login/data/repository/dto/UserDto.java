package com.example.WinterToy.login.data.repository.dto;

import com.example.WinterToy.login.data.repository.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public final class UserDto {    //UserRequest -> UserDto

    private String userId;
    private String password;
    private String userName;

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .password(password)
                .userName(userName)
                .build();
    }
}

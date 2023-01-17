package com.example.WinterToy.login.data.repository.dto;

import com.example.WinterToy.login.data.repository.entity.User;
import lombok.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public final class UserDto {    //UserRequest -> UserDto
    @Min(value = 5)
    @Max(value = 20)
    private String userId;
    @Min(value = 8)
    @Max(value = 20)
    private String password;
    @Min(value = 1)
    @Max(value = 15)
    private String userName;

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .password(password)
                .userName(userName)
                .build();
    }
}

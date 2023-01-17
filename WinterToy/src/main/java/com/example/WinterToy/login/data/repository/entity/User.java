package com.example.WinterToy.login.data.repository.entity;

import com.example.WinterToy.login.data.repository.dto.UserDto;
import lombok.*;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Validated
@Builder
@Getter
@Table
public class User {
    @Id
    @GeneratedValue
    private long seq;

    @Column(unique = true)
    private String userId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String userName;

    public UserDto toDto(){
        return UserDto.builder()
                .userId(userId)
                .password(password)
                .userName(userName)
                .build();
    }
}
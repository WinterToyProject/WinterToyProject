package com.example.WinterToy.login.service;

import com.example.WinterToy.login.controller.dto.UserRequest;
import com.example.WinterToy.login.repository.UserRepository;
import com.example.WinterToy.login.repository.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    public final UserRepository userRepository;
    public String signup(UserRequest request){
        userRepository.save(User.builder().userId(request.getUserId()).password(request.getPassword()).userName(request.getUserName()).build());
        return "Success";
    }
}

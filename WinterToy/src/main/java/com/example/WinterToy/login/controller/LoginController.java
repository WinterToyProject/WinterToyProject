package com.example.WinterToy.login.controller;

import com.example.WinterToy.login.data.repository.dto.UserDto;
import com.example.WinterToy.login.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RequestMapping("/user")
@RestController
@RequiredArgsConstructor
public class LoginController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody UserDto request){

        log.info("userId = {}, password = {}, userName = {}", request.getUserId(), request.getPassword(), request.getUserName());
        if(userService.signup(request).equals("Success")) {
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/login")
    public UserDto login(@RequestBody UserDto request) {
        UserDto nullDto = null;
        log.info("userId = {}, password = {}", request.getUserId(), request.getPassword());
        if(userService.login(request.getUserId(), request.getPassword()).equals("Success")) {
            return request;
        }
        return nullDto;
    }

}


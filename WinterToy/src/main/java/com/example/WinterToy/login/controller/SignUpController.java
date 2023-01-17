package com.example.WinterToy.login.controller;

import com.example.WinterToy.login.controller.dto.UserRequest;
import com.example.WinterToy.login.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@Slf4j
@RequestMapping("user")
@RestController
@RequiredArgsConstructor
public class SignUpController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody UserRequest request){
        log.info("userId = {}, password = {}, userName = {}", request.getUserId(), request.getPassword(), request.getUserName());
        if(userService.signup(request).equals("Success")) {
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }
    }


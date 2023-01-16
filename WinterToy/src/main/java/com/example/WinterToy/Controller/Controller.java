package com.example.WinterToy.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
    
}

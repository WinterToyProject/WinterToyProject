package com.example.WinterToy.gps.controller;

import com.example.WinterToy.gps.repository.dto.Markdto;
import com.example.WinterToy.gps.service.MarkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RequestMapping("/gps")
@RestController
@RequiredArgsConstructor
public class GpsController {
    private final MarkService markService;

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Markdto markdto, HttpServletRequest request) {
        if(markService.save(markdto,request).equals("Success")){
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus. BAD_REQUEST);
    }
}

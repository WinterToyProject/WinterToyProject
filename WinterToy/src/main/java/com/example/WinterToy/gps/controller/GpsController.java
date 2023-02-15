package com.example.WinterToy.gps.controller;

import com.example.WinterToy.gps.repository.dto.Markdto;
import com.example.WinterToy.gps.repository.dto.Userdto;
import com.example.WinterToy.gps.repository.entity.Mark;
import com.example.WinterToy.gps.service.MarkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RequestMapping("/gps")
@RestController
@RequiredArgsConstructor
public class GpsController {
    private final MarkService markService;

    @PostMapping("/save")
    public ResponseEntity save(@RequestBody Markdto markdto, HttpServletRequest request) {
        request.getSession().getAttribute("id");
        if(markService.save(markdto).equals("Success")){
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus. BAD_REQUEST);
    }
    @GetMapping ("/mark")
    @ResponseBody
    public List<Mark> mark(@RequestParam String userId){
        List<Mark> mark=markService.mark(userId);
        return mark;
    }
}

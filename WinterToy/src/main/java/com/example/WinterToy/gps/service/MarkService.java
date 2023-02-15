package com.example.WinterToy.gps.service;

import com.example.WinterToy.gps.repository.MarkRepository;
import com.example.WinterToy.gps.repository.dto.Markdto;
import com.example.WinterToy.gps.repository.entity.Mark;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MarkService {
    private final MarkRepository markRepository;

    public String save(Markdto markdto){
        markRepository.save(Mark.builder().
                userId(markdto.getUserId()).
                latitude(markdto.getLatitude()).
                longitude(markdto.getLongitude()).
                text(markdto.getText()).build());
        return "Success";
    }
    public List<Mark> mark(String userId){
        List<Mark> mark=markRepository.findByUserId(userId);
        return mark;
    }
    
}

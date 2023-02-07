package com.example.WinterToy.Session;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
public class SessionInfoController {
    @GetMapping("/sessioninfo")
    public String sessionInfo(HttpServletRequest request){
        String session1 = request.getSession().getId();
        request.getSession().getAttribute("id");
        log.info(session1);
        if(session1==null){
            log.info("씨발");
            return null;
        }
        System.out.println(request.getSession().getId()+","+(request.getSession().getAttribute("id")));
        log.info("수행됨");
        return  "Success";
    }
}

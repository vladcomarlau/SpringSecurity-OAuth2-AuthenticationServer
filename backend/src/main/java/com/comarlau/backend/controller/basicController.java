package com.comarlau.backend.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://business-frontend-svc:8080", allowCredentials = "true")
public class basicController {
    @GetMapping("/helloworld")
    public String hello() {
        return"Hello World!";
    }
}

package com.comarlau.backend.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class basicController {
    @GetMapping("/helloworld")
    public String hello() {
        return"Hello World!";
    }
}

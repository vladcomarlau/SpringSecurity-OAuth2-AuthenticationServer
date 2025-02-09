package com.comarlau.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@RequestMapping("/")
@RestController
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @GetMapping("/")
    public String hello() {
        return "COMARLAU.COM!";
    }

    @GetMapping("/c")
    public String c() {
        return "ccc!";
    }

    @GetMapping("/test")
    public String test() {
        return "ssl!";
    }
}

package com.comarlau.backend.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;


@Configuration
@EnableWebSecurity
@Log4j2
public class WebConfig {

    @Value("${app.allowed.origin}")
    private String allowedOrigin;


}
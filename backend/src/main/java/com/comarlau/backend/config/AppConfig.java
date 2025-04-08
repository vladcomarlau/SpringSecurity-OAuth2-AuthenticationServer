package com.comarlau.backend.config;

import com.comarlau.backend.model.MyClass;
import com.comarlau.backend.model.MySecondClass;
import com.comarlau.backend.model.MyThirdClass;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public MyThirdClass myThirdClass() {
        return new MyThirdClass();
    }

    @Bean
    public MySecondClass mySecondClass() {
        return new MySecondClass();
    }

    @Bean
    public MyClass myClass() {
        return new MyClass();
    }

}

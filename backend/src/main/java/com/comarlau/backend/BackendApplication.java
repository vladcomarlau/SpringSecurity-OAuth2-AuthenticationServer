package com.comarlau.backend;

import com.comarlau.backend.model.MyClass;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import lombok.extern.log4j.Log4j2;

@SpringBootApplication
@Log4j2
public class BackendApplication {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BackendApplication.class, args);
        MyClass myClass = context.getBean(MyClass.class);

        log.info(myClass.myMethod());
        log.info(String.valueOf(myClass.printInstance()));
        log.info(String.valueOf(myClass.printInstance()));
        log.info(String.valueOf(myClass.printInstance()));

        log.debug("Logging in user {} with birthday {}", "VLAD", 3);
    }
}

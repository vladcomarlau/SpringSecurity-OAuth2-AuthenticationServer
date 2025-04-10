package com.comarlau.backend;

import com.comarlau.backend.model.MyClass;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.ApplicationContext;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class BackendApplication {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BackendApplication.class, args);
        MyClass myClass = context.getBean(MyClass.class);
        myClass.myMethod();
        myClass.printInstance();
        myClass.printInstance();
        myClass.printInstance();
    }
}

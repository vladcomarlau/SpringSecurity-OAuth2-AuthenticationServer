package com.comarlau.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Lookup;
import org.springframework.stereotype.Component;

@Component
public class MyClass {
    @Autowired
    private MySecondClass mySecondClass;

    public void myMethod() {
        mySecondClass.myMethod();
    }

    @Lookup
    public MySecondClass getMySecondClass() {
        return null;
    }

    public void printInstance() {
        MySecondClass mySecondClass = getMySecondClass();
        System.out.println(mySecondClass);
    }
}

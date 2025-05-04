package com.comarlau.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Lookup;
import org.springframework.stereotype.Component;

@Component
public class MyClass {
    @Autowired
    private MySecondClass mySecondClass;

    public String myMethod() {
        return mySecondClass.myMethod();
    }

    @Lookup
    public MySecondClass getMySecondClass() {
        return null;
    }

    public MySecondClass printInstance() {
        return getMySecondClass();

    }
}

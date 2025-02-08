FROM openjdk:25-jdk
LABEL authors="vladcomarlau"
WORKDIR /backend
COPY build/libs/*.jar app.jar
#trebuie pus acelasi ca portul aplicatiei
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
FROM openjdk:25-jdk
LABEL authors="vladcomarlau"
WORKDIR /backend
COPY build/libs/*.jar app.jar
#EXPOSE 8080               trebuie pus acelasi ca portul aplicatiei
ENTRYPOINT ["java", "-jar", "app.jar"]
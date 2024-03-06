FROM openjdk:21-slim AS build
COPY target/*.jar app.jar
EXPOSE 8091
CMD ["java", "-jar", "app.jar"]
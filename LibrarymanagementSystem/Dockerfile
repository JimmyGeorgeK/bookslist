# Use an official OpenJDK runtime as a base image
FROM openjdk:17-jdk

# Copy the JAR file into the container at /app
COPY LibrarymanagementSystem/target/librarymanagementsystem.jar .

# Expose the port that your Spring Boot application will run on
EXPOSE 8080

# Specify the command to run on container start
ENTRYPOINT ["java", "-jar", "librarymanagementsystem.jar"]
package com.example.boardservicever1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BoardServiceVer1Application {

    public static void main(String[] args) {
        SpringApplication.run(BoardServiceVer1Application.class, args);
    }

}

package com.example.WinterToy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class WinterToyApplication {

	public static void main(String[] args) {
		SpringApplication.run(WinterToyApplication.class, args);
		System.out.println(org.hibernate.Version.getVersionString());
	}

}

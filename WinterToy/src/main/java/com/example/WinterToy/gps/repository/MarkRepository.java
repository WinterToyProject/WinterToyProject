package com.example.WinterToy.gps.repository;

import com.example.WinterToy.gps.repository.entity.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MarkRepository extends JpaRepository<Mark, String> {
        Optional<Mark> findByUserId(String userId);
}

package com.example.WinterToy.gps.repository;

import com.example.WinterToy.gps.repository.entity.Mark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarkRepository extends JpaRepository<Mark, String> {
        List<Mark> findByUserId(String userId);
}

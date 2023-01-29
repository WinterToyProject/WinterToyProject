package com.example.WinterToy.gps.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public final class Markdto {
    private String userId;
    private double latitude;
    private double longitude;
    private String text;
}

package com.example.backend.review.presentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ReviewRequestDTO {
    private String reviewerName;
    private String reviewContent;
    private String reviewerRelationship;

    public static String generateUUIDString(){
        return UUID.randomUUID().toString();
    }
}

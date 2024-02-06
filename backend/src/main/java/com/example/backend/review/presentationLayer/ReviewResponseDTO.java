package com.example.backend.review.presentationLayer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ReviewResponseDTO {
    private String reviewId;
    private String reviewerName;
    private String reviewContent;
    private String reviewerRelationship;
}

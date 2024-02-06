package com.example.backend.review.dataLayer;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity

@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @GeneratedValue(strategy = GenerationType.UUID)
    private String reviewId;
    private String reviewerName;
    private String reviewContent;
    private String reviewerRelationship;
}

package com.example.backend.review.dataLayer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    Review findReviewByReviewId(String reviewId);
    void deleteByReviewId(String reviewId);
}

package com.example.backend.review.businessLayer;

import com.example.backend.review.presentationLayer.ReviewRequestDTO;
import com.example.backend.review.presentationLayer.ReviewResponseDTO;

import java.util.List;

public interface ReviewService {
    List<ReviewResponseDTO> getAllReviews();
    ReviewResponseDTO getReviewById(String reviewId);
    ReviewResponseDTO createReview(ReviewRequestDTO reviewRequestDTO);
    ReviewResponseDTO updateReview(String reviewId, ReviewRequestDTO reviewRequestDTO);
    void deleteReview(String reviewId);
}

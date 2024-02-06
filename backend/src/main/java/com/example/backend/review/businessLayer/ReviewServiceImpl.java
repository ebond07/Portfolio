package com.example.backend.review.businessLayer;

import com.example.backend.review.dataLayer.Review;
import com.example.backend.review.dataLayer.ReviewRepository;
import com.example.backend.review.dataMapperLayer.ReviewRequestMapper;
import com.example.backend.review.dataMapperLayer.ReviewResponseMapper;
import com.example.backend.review.presentationLayer.ReviewRequestDTO;
import com.example.backend.review.presentationLayer.ReviewResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ReviewResponseMapper reviewResponseMapper;
    private final ReviewRequestMapper reviewRequestMapper;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ReviewResponseMapper reviewResponseMapperMapper, ReviewRequestMapper reviewRequestMapper) {
        this.reviewRepository = reviewRepository;
        this.reviewResponseMapper = reviewResponseMapperMapper;
        this.reviewRequestMapper = reviewRequestMapper;
    }
    @Override
    public List<ReviewResponseDTO> getAllReviews() {
        return reviewResponseMapper.entityListToResponseModelList(reviewRepository.findAll());
    }

    @Override
    public ReviewResponseDTO getReviewById(String reviewId) {
        return reviewResponseMapper.entityToResponseModel(reviewRepository.findReviewByReviewId(reviewId));
    }

    @Override
    public ReviewResponseDTO createReview(ReviewRequestDTO reviewRequestDTO) {
        Review review = reviewRequestMapper.requestModelToEntity(reviewRequestDTO);
        review.setReviewId(ReviewRequestDTO.generateUUIDString());
        return reviewResponseMapper.entityToResponseModel(reviewRepository.save(review));
    }

    @Override
    public ReviewResponseDTO updateReview(String reviewId, ReviewRequestDTO reviewRequestDTO) {
        Review existingReview = reviewRepository.findReviewByReviewId(reviewId);
        if (existingReview == null) {
            return null;
        }

        Review updatedReview = reviewRequestMapper.requestModelToEntity(reviewRequestDTO);
        updatedReview.setId(existingReview.getId());
        updatedReview.setReviewId(existingReview.getReviewId());

        return reviewResponseMapper.entityToResponseModel(reviewRepository.save(updatedReview));
    }

    @Override
    public void deleteReview(String reviewId) {
        reviewRepository.deleteByReviewId(reviewId);
    }
}

package com.example.backend.review.dataMapperLayer;

import com.example.backend.review.dataLayer.Review;
import com.example.backend.review.presentationLayer.ReviewResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
@Component
public interface ReviewResponseMapper {
    @Mapping(source = "reviewId", target = "reviewId")
    @Mapping(source = "reviewerName", target = "reviewerName")
    @Mapping(source = "reviewContent", target = "reviewContent")
    @Mapping(source = "reviewerRelationship", target = "reviewerRelationship")

    ReviewResponseDTO entityToResponseModel(Review review);
    List<ReviewResponseDTO> entityListToResponseModelList(List<Review> reviews);
}

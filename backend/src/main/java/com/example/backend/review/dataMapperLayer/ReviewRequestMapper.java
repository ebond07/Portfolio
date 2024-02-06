package com.example.backend.review.dataMapperLayer;

import com.example.backend.review.dataLayer.Review;
import com.example.backend.review.presentationLayer.ReviewRequestDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface ReviewRequestMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "reviewId", ignore = true)
    @Mapping(source = "reviewerName", target = "reviewerName")
    @Mapping(source = "reviewContent", target = "reviewContent")
    @Mapping(source = "reviewerRelationship", target = "reviewerRelationship")

    Review requestModelToEntity(ReviewRequestDTO reviewRequestDTO);
}

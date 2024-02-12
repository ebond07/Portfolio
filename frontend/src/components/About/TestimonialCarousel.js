import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

const TestimonialContainer = styled.div`
  width: 100%; /* Adjust the width as needed */
  margin: 0 auto;
`;

const TestimonialBox = styled.div`
  background-color: #007bff;
  color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 600px;
  overflow: hidden;
`;

const TestimonialContent = styled.p`
  flex: 1;
  overflow: hidden;
`;

const AuthorName = styled.p`
  font-style: italic;
  margin-top: 10px;
`;

const CustomCarousel = styled(Carousel)`
  .rec-arrow-left:hover, .rec-arrow-right:hover {
    background-color: #007bff;
  }
  .rec-dot:hover {
    box-shadow: 0px 0px 1px 3px rgb(0, 97, 204)
  }
  .rec-dot_active {
    background-color: #007bff;
    box-shadow: 0px 0px 1px 3px rgb(0, 97, 204)
  }
`;

function TestimonialCarousel({ testimonials }) {
  return (
    <TestimonialContainer>
      <h2 className='SectionTitleTest'>Testimonials</h2>
      <CustomCarousel>
        {testimonials.map(testimonial => (
          <TestimonialBox key={testimonial.id}>
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <AuthorName>- {testimonial.author}</AuthorName>
          </TestimonialBox>
        ))}
      </CustomCarousel>
    </TestimonialContainer>
  );
}

export default TestimonialCarousel;

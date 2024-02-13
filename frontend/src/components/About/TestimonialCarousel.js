import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    overflow-y: auto;
    max-height: 500px; /* Adjust the max-height as needed */
    padding: 10px; /* Remove padding */
    width: auto; /* Set width to auto */
  }
`;

const TestimonialContent = styled.p`
  flex: 1;
  overflow-y: auto;
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

  @media screen and (max-width: 1000px) {
    .rec-arrow {
      font-size: 16px;
    }
  }
`;


function TestimonialCarousel({ testimonials }) {
  const { t } = useTranslation();
  return (
    <TestimonialContainer>
      <h2 className='SectionTitleTest'>{t('about.testHeader')}</h2>
      
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

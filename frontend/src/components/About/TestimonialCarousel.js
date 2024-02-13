import React, { useState, useEffect } from 'react';
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

const ReadMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const AuthorName = styled.p`
  font-style: italic;
  margin-top: 10px;
`;

const CustomCarousel = styled(Carousel)`
  .rec-arrow-left:hover,
  .rec-arrow-right:hover {
    background-color: #007bff;
  }
  .rec-dot:hover {
    box-shadow: 0px 0px 1px 3px rgb(0, 97, 204);
  }
  .rec-dot_active {
    background-color: #007bff;
    box-shadow: 0px 0px 1px 3px rgb(0, 97, 204);
  }

  @media screen and (max-width: 1000px) {
    .rec-arrow {
      font-size: 16px;
    }
  }
`;

function TestimonialCarousel({ testimonials }) {
  const [expandedId, setExpandedId] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleReadMore = id => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <TestimonialContainer>
      <h2 className='SectionTitleTest'>Testimonials</h2>

      <CustomCarousel>
        {testimonials.map(testimonial => (
          <TestimonialBox key={testimonial.id}>
            <TestimonialContent>
              {testimonial.content.length > 100 && !isSmallScreen && !expandedId
                ? `${testimonial.content.substring(0, 100)}...`
                : testimonial.content}
            </TestimonialContent>
            {testimonial.content.length > 100 && isSmallScreen && (
              <ReadMoreButton onClick={() => handleReadMore(testimonial.id)}>
                {expandedId === testimonial.id ? 'Read less' : 'Read more'}
              </ReadMoreButton>
            )}
            <AuthorName>- {testimonial.author}</AuthorName>
          </TestimonialBox>
        ))}
      </CustomCarousel>
    </TestimonialContainer>
  );
}

export default TestimonialCarousel;

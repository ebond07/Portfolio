import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from 'react-i18next';
import TestimonialCarousel from './TestimonialCarousel';

function About() {
  const { t } = useTranslation();

  const selectedTestimonials = [
    { id: "uuid1", content: "Working alongside Evan in our computer science courses has been truly inspiring. Their dedication to understanding complex algorithms and problem-solving techniques is unparalleled. Evan consistently contributes innovative ideas to group projects, demonstrating both their technical prowess and their ability to collaborate effectively within a team. Beyond their impressive technical skills, Evan is also known for their willingness to help others, always offering support and guidance to classmates facing challenges.", author: "David", relationship: "Coworker" },
    { id: "uuid2", content: "As Evan's computer science instructor, I've had the privilege of witnessing their growth and development into a highly skilled and passionate student. Evan exhibits a deep understanding of fundamental concepts while also displaying a knack for pushing the boundaries of what's possible in coding and software development. Their projects consistently showcase creativity and attention to detail, reflecting a genuine enthusiasm for the subject matter.", author: "Some Teacher", relationship: "Teacher" },
    { id: "uuid3", content: "Having Evan as a student in my computer science class has been a true pleasure. Evan's dedication to mastering complex programming languages and algorithms is evident in their work ethic and achievements. They approach challenges with a tenacity and problem-solving mindset that sets them apart. Evan's ability to think critically and analytically is reflected in the quality of their code and the innovative solutions they propose.", author: "Another Teacher", relationship: "Teacher"}
  ];

  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">{t('about.header')}</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/profilePic.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            <div dangerouslySetInnerHTML={{ __html: t('about.sectionOne') }} />
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            {t('about.sectionTwo')}
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              {t('about.sectionThree')}
              <div className="tagline2">
                {t('about.sectionFour')}
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
          <br/>
          <ScrollAnimation animateIn="fadeInLeft">
          <TestimonialCarousel testimonials={selectedTestimonials} />
          </ScrollAnimation>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

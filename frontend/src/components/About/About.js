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

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/profilePic.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Evan Bond</strong>. I'm from Montreal, Canada and have lived there my entire life.
            Throughout my life, I have gained valuable experience through jobs in various fields. These not only increased my knowledge of computers but also gave way to some of the things I am most proud of; my adaptability, my work ethic, as well as my dedication to improving myself every day.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My adventure into the world of computers began in my first year of high school as I took on a specialized program, dedicating 2 hours every day to learning various aspects within the computer science field.
            This continued into college as I took on the challenge of pursuing a DEC in computer science. It took nothing short of hard work, dedication, and many many of my hours to complete the program while earning myself a spot on the Dean’s List every semester.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working within teams throughout my time in college was an incredibly valuable and eye-opening experience that has fueled my eagerness to continue exploring exciting projects in the future, with a particular interest in web development and full-stack applications.
              <div className="tagline2">
                I have become confident using the following technologies:
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

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

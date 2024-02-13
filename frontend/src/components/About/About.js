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
  const { t, i18n } = useTranslation();

  const selectedTestimonials = i18n.language === 'en' ?
  [
    { id: "uuid1", content: "Working alongside Evan in our computer science courses has been truly inspiring. Their dedication to understanding complex algorithms and problem-solving techniques is unparalleled. Evan consistently contributes innovative ideas to group projects, demonstrating both their technical prowess and their ability to collaborate effectively within a team. Beyond their impressive technical skills, Evan is also known for their willingness to help others, always offering support and guidance to classmates facing challenges.", author: "David", relationship: "Coworker" },
    { id: "uuid2", content: "As Evan's computer science instructor, I've had the privilege of witnessing their growth and development into a highly skilled and passionate student. Evan exhibits a deep understanding of fundamental concepts while also displaying a knack for pushing the boundaries of what's possible in coding and software development. Their projects consistently showcase creativity and attention to detail, reflecting a genuine enthusiasm for the subject matter.", author: "Some Teacher", relationship: "Teacher" },
    { id: "uuid3", content: "Having Evan as a student in my computer science class has been a true pleasure. Evan's dedication to mastering complex programming languages and algorithms is evident in their work ethic and achievements. They approach challenges with a tenacity and problem-solving mindset that sets them apart. Evan's ability to think critically and analytically is reflected in the quality of their code and the innovative solutions they propose.", author: "Another Teacher", relationship: "Teacher"}
  ]
  :
  [
    { id: "uuid4", content: "Travailler avec Evan dans le contexte de nos cours d'informatique a été une véritable source d'inspiration. Leur engagement à comprendre des algorithmes complexes et des techniques de résolution de problèmes est inégalé. Evan apporte constamment des idées novatrices aux projets de groupe, démontrant à la fois ses prouesses techniques et sa capacité à collaborer efficacement au sein d'une équipe. Au-delà de ses impressionnantes compétences techniques, Evan est également connu pour sa volonté d'aider les autres, offrant toujours son soutien et ses conseils à ses camarades de classe confrontés à des difficultés.", author: "David", relationship: "Collègue" },
    { id: "uuid5", content: "En tant que professeur d'informatique d'Evan, j'ai eu le privilège d'assister à sa croissance et à son développement en tant qu'étudiant hautement qualifié et passionné. Evan fait preuve d'une compréhension profonde des concepts fondamentaux tout en démontrant un talent pour repousser les limites du possible en matière de codage et de développement de logiciels. Ses projets font constamment preuve de créativité et d'attention aux détails, reflétant un véritable enthousiasme pour le sujet.", author: "X", relationship: "Enseignant" },
    { id: "uuid6", content: "Avoir Evan comme étudiant dans mon cours d'informatique a été un vrai plaisir. L'engagement d'Evan à maîtriser des langages de programmation et des algorithmes complexes est évident dans son éthique de travail et ses réalisations. Ils abordent les défis avec une ténacité et un esprit de résolution de problèmes qui les distinguent des autres. La capacité d'Evan à penser de manière critique et analytique se reflète dans la qualité de leur code et les solutions innovantes qu'ils proposent.", author: "X", relationship: "Enseignant"}
  ]

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

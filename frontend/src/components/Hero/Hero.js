import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation, Trans } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  t('hero.introTitle'),
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    t('hero.descSequenceOne'),
                    1000,
                    t('hero.descSequenceTwo'),
                    1000,
                    t('hero.descSequenceThree'),
                    1000,
                    t('hero.descSequenceFour'),
                    1000,
                    t('hero.descSequenceFive'),
                    1000,
                    t('hero.descSequenceSix'),
                    // 1000,
                    // 'A.... cool guy?',
                    // 1000,
                    // "Ok...",
                    // 1000,
                    // "Ok...  I'm running out of ideas...",
                    // 1000,
                    // "Uhh...",
                    // 1000,
                    // "Uhh... you can scroll down to see my projects now...",
                    // 300,
                    // 1000,
                    // "Seriously, my projects are really cool, go check them out!",
                    // 1000,
                    // "You're uh...",
                    // 1000,
                    // "You're uh... still here?",
                    // 1000,
                    // "Ok, this has been fun, but I'm gonna restart the loop now...",
                    1000,
                    t('hero.descSequenceSeven'),
                    () => setShowScrollDown(true),
                    2000,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/profilePic.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            {t('hero.scrollDown')}
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;

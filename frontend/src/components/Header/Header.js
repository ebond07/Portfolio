import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, LanguageSelector } from "./HeaderElements";
import resumeEN from '../../CV-Evan_Bond-EN.pdf';
import resumeFR from '../../CV-Evan_Bond-FR.pdf';
import { useTranslation } from 'react-i18next';

const languages = {
  en: { nativeName: 'EN' },
  fr: { nativeName: 'FR' }
};

const Header = ({ toggle }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };

  const resumeLink = i18n.language === 'fr' ? resumeFR : resumeEN;

  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/profilePic.svg"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            {t('header.navMenuProjects')}
          </NavLink>
          <NavLink className="menu-item" to="about">
            {t('header.navMenuAbout')}
          </NavLink>
          <NavLink className="menu-item" to="contact">
            {t('header.navMenuContact')}
          </NavLink>
          <NavLink className="menu-item" to="review">
            {t('header.navMenuTestimonial')}
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href= {resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('header.resume')}
          </a>
        </NavBtn>
          <LanguageSelector
            onChange={(e) => handleLanguageChange(e.target.value)}
            value={i18n.language}
          >
            {Object.keys(languages).map((lng) => (
              <option key={lng} value={lng}>
                {languages[lng].nativeName}
              </option>
            ))}
          </LanguageSelector>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;

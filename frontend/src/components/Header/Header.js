import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import resumeEN from '../../CV-Evan_Bond-EN.pdf';
import { useTranslation, Trans } from 'react-i18next';

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
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            // href="https://www.linkedin.com/in/evanjamesbond/"
            href= {resumeEN}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('header.resume')}
          </a>
        </NavBtn>
        <div>
          {Object.keys(languages).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => handleLanguageChange(lng)}>
              {languages[lng].nativeName}
            </button>
          ))}
        </div>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;

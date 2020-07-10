import React from 'react';
//import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import LogoRef from '../../assets/logos/provisional_logo.png';

import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LanguageContainer,
  LanguageList,
  LanguageItem,
  LanguageText
} from './header.styles';

const changeLanguage = (i18n, lng) => {
  i18n.changeLanguage(lng);
}

const Header = ({i18n}) => {
  //const { t } = useTranslation();
  //const sectionItems = t('nav.sectionItem')

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={LogoRef} alt="item"/>
      </LogoContainer>
      <LanguageContainer>
        <LanguageList>
          <LanguageItem onClick={() => changeLanguage(i18n, 'es')}><LanguageText >[ES]</LanguageText></LanguageItem>
          <LanguageItem onClick={() => changeLanguage(i18n, 'en')}><LanguageText >[EN]</LanguageText></LanguageItem>
        </LanguageList>
        <LanguageText>Language</LanguageText>
      </LanguageContainer>
    </HeaderContainer>
  );
};

export default withTranslation()(Header);

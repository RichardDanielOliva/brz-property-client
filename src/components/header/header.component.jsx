import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
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

const Header = () => {
  const { t } = useTranslation();
  const sectionItems = t('nav.sectionItem')

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={LogoRef} alt="item"/>
      </LogoContainer>
      <LanguageContainer>
        <LanguageList>
          <LanguageItem><LanguageText>[ES]</LanguageText></LanguageItem>
          <LanguageItem><LanguageText href="?lang=en" title="English" lang="en" hreflang="en" class="linkIdioma">[EN]</LanguageText></LanguageItem>
        </LanguageList>
        <LanguageText>Language</LanguageText>
      </LanguageContainer>
    </HeaderContainer>
  );
};

export default Header;

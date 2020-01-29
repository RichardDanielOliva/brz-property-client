import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  HeaderContainer,
  LogoContainer
} from './header.styles';

const Header = ({ displayProfileDrownDown, enterpriseDrownDown, languageDrownDown }) => {
  const { t } = useTranslation();
  const sectionItems = t('nav.sectionItem')

  return (
    <HeaderContainer>
      <LogoContainer>

      </LogoContainer>
      <LanguageContainer>
        <ul>
          <li><a href="?lang=es" title="Castellano" lang="es" hreflang="es" class="linkIdioma">ES</a></li>
          <li><a href="?lang=en" title="English" lang="en" hreflang="en" class="linkIdioma">EN</a></li>
          <li><a href="?lang=pt" title="Portuguï¿½s" lang="pt" hreflang="pt" class="linkIdioma">PT</a></li>
        </ul>
      </LanguageContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  displayProfileDrownDown: state.nav.profileDrownDown,
  enterpriseDrownDown: state.nav.enterpriseDrownDown,
  languageDrownDown: state.nav.languageDrownDown
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import NavItemProfile from './nav-item-profile/nav-item-profile.component';
import NavProfileDropDown from './nav-profile-dropdown/nav-profile-dropdown.component';

import {
  NavContainer,
  NavItemsContainer,
  NavItemContainer
} from './nav.styles';

const Nav = ({ displayProfileDrownDown, enterpriseDrownDown, languageDrownDown }) => {
  const { t } = useTranslation();
  const sectionItems = t('nav.sectionItem')

  return (
    <NavContainer>
      <NavItemsContainer>
        {sectionItems.map(({name, logo}) => {
          return (
            <NavItemContainer>
              <NavItemProfile name={name} logo={logo}/>
            </NavItemContainer>
        )})}
      </NavItemsContainer>
    </NavContainer>
  );
};

const mapStateToProps = state => ({
  displayProfileDrownDown: state.nav.profileDrownDown,
  enterpriseDrownDown: state.nav.enterpriseDrownDown,
  languageDrownDown: state.nav.languageDrownDown
});

export default connect(mapStateToProps)(Nav);

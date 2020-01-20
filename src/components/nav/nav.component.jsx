import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import NavItemProfile from './nav-item-profile/nav-item-profile.component';
import NavSearchInput from './nav-search-input/nav-search-input.component';
import NavProfileDropDown from './nav-profile-dropdown/nav-profile-dropdown.component';

import {
  NavContainer,
  MainLogoContainer,
  NavFilterContainer,
  AppImage,
  NavItemsContainer,
  NavItemContainer
} from './nav.styles';

const getDrownDownMenu = (sectionName, display) => {
  switch (sectionName) {
    case 'User':
        return display ? <NavProfileDropDown /> : null;
    case 'Enterprise':
        return display ? <NavProfileDropDown /> : null;
    case 'Language':
        return display ? <NavProfileDropDown /> : null;
    default:
        break;
  }
}

const Nav = ({ displayProfileDrownDown, enterpriseDrownDown, languageDrownDown }) => {
  const { t } = useTranslation();
  const sectionItems = t('nav.sectionItem')

  return (
    <NavContainer>
      <MainLogoContainer to="/home">
        {/*<AppImage src={mainLogo} alt="item" />*/}
      </MainLogoContainer>

      <NavFilterContainer>
        <NavSearchInput />
      </NavFilterContainer>

      <NavItemsContainer>
        {sectionItems.map(({name, logo}) => {
          return (<NavItemContainer>
            <NavItemProfile name={name} logo={logo}/>
            {getDrownDownMenu(name, displayProfileDrownDown) }
          </NavItemContainer>)
        })}

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

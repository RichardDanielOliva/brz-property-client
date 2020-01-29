import React from 'react';
import { useTranslation } from 'react-i18next';
import useReactRouter from 'use-react-router';
import { connect } from 'react-redux';

import NavItemProfile from './nav-item-profile/nav-item-profile.component';
import {
  NavContainer,
  NavItemsContainer,
  NavItemContainer
} from './nav.styles';

const Nav = ({...props}) => {
  const { t } = useTranslation();
  const { location } = useReactRouter();

  const sectionItems = t('nav.sectionItem')
  console.log(location.pathname)
  return (
    <NavContainer>
      <NavItemsContainer>
        {sectionItems.map(({...props}) => {
          return (
            <NavItemContainer>
              <NavItemProfile 
                actualLocation={location.pathname}
                {...props} />
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

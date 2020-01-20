import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {getLogoComponent} from '../../../utils/LogoFactory';
import profileDefaultImg from '../../../assets/logos/nav/profile-default.jpg';

import {NavItemProfileContainer, 
    NavProfileLogo,
    NavProfileText,
    NavProfileDropdownLogo
} from './nav-item-profile.style';
    
import { handleDropDownProfile } from '../../../redux/nav/nav.actions';

const NavItemProfile = ({name, logo, handleDropDownProfile}) => {
    const dropLogo = "drop-down";
    
    return (
        <NavItemProfileContainer onClick={() => handleDropDownProfile()}> 
            <NavProfileLogo>
                {getLogoComponent(logo)}
            </NavProfileLogo>
            <NavProfileText>
                {name}
            </NavProfileText>
            <NavProfileDropdownLogo>
                {getLogoComponent(dropLogo)}
            </NavProfileDropdownLogo>
        </NavItemProfileContainer>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    handleDropDownProfile: () => 
        dispatch(handleDropDownProfile())}
  );


export default connect(mapStateToProps, mapDispatchToProps)(NavItemProfile);
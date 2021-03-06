import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {NavItemProfileContainer, 
    NavProfileLogo,
    NavProfileText,
    Icon
} from './nav-item-profile.style';
    
import { handleDropDownProfile } from '../../../redux/nav/nav.actions';

const NavItemProfile = ({name, url, logo, actualLocation}) => {    
    return (
        <Link to={url} style={{ width: '100%', height: '100%' }}>
            <NavItemProfileContainer
                isSelected={url===actualLocation}
                onClick={() => handleDropDownProfile()}> 
                <NavProfileLogo>
                    <Icon className={logo}/>
                </NavProfileLogo>
                <NavProfileText>
                    {name}
                </NavProfileText>
            </NavItemProfileContainer>
        </Link>
    )
}

const mapDispatchToProps = dispatch => ({
    handleDropDownProfile: () => 
        dispatch(handleDropDownProfile())}
  );


export default connect(null, mapDispatchToProps)(NavItemProfile);
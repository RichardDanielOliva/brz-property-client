import React from 'react';

import {
    ShortCutContainer,
    TitleContainer,
    OptionsContainer,
    ShortCutLink
  } from './nav-short-cut.styles';

const NavProfile = ({sectionName, sectionLinks}) => {
    return (
        <ShortCutContainer>
            <TitleContainer>
                {sectionName}
            </TitleContainer>
            <OptionsContainer id="ShortCutContainer">
                {sectionLinks.map(({id, name, link}) => (
                    <ShortCutLink key={id} to={link}>{name}</ShortCutLink>
                 ))}
            </OptionsContainer>
        </ShortCutContainer>
    )
}

export default NavProfile;
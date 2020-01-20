import React from 'react';

import { ReactComponent as UserProfileLogo } from '../assets/logos/nav/user-profile.svg';
import { ReactComponent as EnterpriseProfileLogo } from '../assets/logos/nav/enterprise.svg';
import { ReactComponent as LanguageLogo } from '../assets/logos/nav/language.svg';


import { ReactComponent as DropDownArrowLogo } from '../assets/logos/community/drop-down-arrow.svg';

export const getLogoComponent = (name) => {
    switch (name) {
        case 'user-profile':
            return <UserProfileLogo />;
        case 'enterprise-profile':
            return <EnterpriseProfileLogo />;
        case 'language':
            return <LanguageLogo />;
        case 'drop-down':
            return <DropDownArrowLogo />;
        default:
            break;
    }
}
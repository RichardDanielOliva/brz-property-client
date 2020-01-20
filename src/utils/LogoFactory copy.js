import React from 'react';

import { ReactComponent as HomeLogo } from '../assets/logos/nav/home.svg';
import { ReactComponent as NetworkLogo } from '../assets/logos/nav/network.svg';
import { ReactComponent as ActivityLogo } from '../assets/logos/nav/activity.svg';
import { ReactComponent as SearchLogo } from '../assets/logos/nav/search.svg';
import { ReactComponent as MenuLogo } from '../assets/logos/nav/menu.svg';

import { ReactComponent as BikeLogo } from '../assets/logos/sports/bike.svg';
import { ReactComponent as RunLogo } from '../assets/logos/sports/run.svg';
import { ReactComponent as SwimmingLogo } from '../assets/logos/sports/swimming.svg';
import { ReactComponent as MemberLogo } from '../assets/logos/sports/member.svg';
import { ReactComponent as SoccerLogo } from '../assets/logos/sports/soccer.svg';

import { ReactComponent as ClubsLogo } from '../assets/logos/community/clubs.svg';
import { ReactComponent as EventsLogo } from '../assets/logos/community/events.svg';
import { ReactComponent as FacilitiesLogo } from '../assets/logos/community/facilities.svg';
import { ReactComponent as GroupsLogo } from '../assets/logos/community/groups.svg';
import { ReactComponent as NextLogo } from '../assets/logos/community/next.svg';
import { ReactComponent as BackLogo } from '../assets/logos/community/back.svg';
import { ReactComponent as DropDownArrowLogo } from '../assets/logos/community/drop-down-arrow.svg';

export const getLogoComponent = (name) => {
    switch (name) {
        case 'home':
            return <HomeLogo />;
        case 'community':
            return <NetworkLogo />;
        case 'activity':
            return <ActivityLogo />;
        case 'search':
            return <SearchLogo />;
        case 'menu':
            return <MenuLogo />;
        case 'cicling':
            return <BikeLogo />;
        case 'running':
            return <RunLogo />;
        case 'swimming':
            return <SwimmingLogo />;
        case 'soccer':
            return <SoccerLogo />;
        case 'member':
            return <MemberLogo />;
        case 'back':
            return <BackLogo />;
        case 'next':
            return <NextLogo />;
        case 'groups':
            return <GroupsLogo />;
        case 'clubs':
            return <ClubsLogo />;
        case 'events':
            return <EventsLogo />;
        case 'facilities':
            return <FacilitiesLogo />;
        case 'dropDown':
            return <DropDownArrowLogo />;
        default:
            break;
    }
}
import React from 'react';
import {Link} from 'react-router-dom';
import useReactRouter from 'use-react-router';

import PSRSortedGroup from './psr-sorted-group/psr-sorted-group.component';
import PropertyCardList from '../property-card-list/property-card-list.component';
import PropertyOperation from '../commons/property-operations/property-operation.component'
import CustomButton from '../commons/custom-button/custom-button.component';
import PropertiesMap from '../properties-map/properties-map.component';
import LocationSearchInput from '../commons/location-search-input/location-search-input.component';

import { 
    PropertySearchResultContainer, 
    HeaderContainer,
    SubHeaderContainer,
    BodyContainer,
    ViewContainer,
    LocationSearchContainer,
    SortedContainer,
    ButtonText,
    Icon } from './property-search-result.styles';

const getViewButton = (pathname) =>{
    if(pathname !=="/search/map")
        return {
            name: "Map",
            linkValue: "/search/map"
        }
    else
    return {
        name: "List",
        linkValue: "/search"
    }
}

const PropertySearchResult = () => {
    const { location } = useReactRouter();

    let viewButton = getViewButton(location.pathname)

    return (
        <PropertySearchResultContainer>
            <HeaderContainer>
                <PropertyOperation/>
                <ViewContainer>
                    <Link to={viewButton.linkValue}>
                        <CustomButton>
                            <Icon className="fas fa-map-marked-alt fa-lg"/>
                            <ButtonText>{viewButton.name}</ButtonText>
                        </CustomButton>
                    </Link>
                </ViewContainer>
                {/**<PSRSortedGroup/>*/}
            </HeaderContainer>
            {(location.pathname !== "/search/map") 
                ?   <SubHeaderContainer>
                        <LocationSearchContainer>
                            <LocationSearchInput/>
                        </LocationSearchContainer>
                        <SortedContainer>
                            <PSRSortedGroup/>
                        </SortedContainer>
                    </SubHeaderContainer>
                : null
            }
            <BodyContainer>
                {(location.pathname !== "/search/map") ?
                    <PropertyCardList/>
                    : <PropertiesMap/>
                    }
            </BodyContainer>
        </PropertySearchResultContainer>
    )
}

export default PropertySearchResult;
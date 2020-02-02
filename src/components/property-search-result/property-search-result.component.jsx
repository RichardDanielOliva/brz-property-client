import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PSRSortedGroup from './psr-sorted-group/psr-sorted-group.component';
import PropertyCardList from '../property-card-list/property-card-list.component';
import PropertyOperation from '../commons/property-operations/property-operation.component'
import CustomButton from '../commons/custom-button/custom-button.component';
import PropertiesMap from '../properties-map/properties-map.component';


import { 
    PropertySearchResultContainer, 
    PSR_HeaderContainer,
    PSR_BodyContainer,
    ViewContainer,
    ButtonText,
    Icon } from './property-search-result.styles';

const getViewButton = (pathname) =>{
    if(pathname !="/search/map")
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
            <PSR_HeaderContainer>
                <PropertyOperation/>
                {/**<PSRSortedGroup/>*/}
                <ViewContainer>
                    <Link to={viewButton.linkValue}>
                        <CustomButton>
                            <Icon className="fas fa-map-marked-alt fa-lg"/>
                            <ButtonText>{viewButton.name}</ButtonText>
                        </CustomButton>
                    </Link>
                </ViewContainer>
            </PSR_HeaderContainer>
            <PSR_BodyContainer>
                {(location.pathname!="/search/map") ?
                    <PropertyCardList/>
                    : <PropertiesMap/>
                    }
            </PSR_BodyContainer>
        </PropertySearchResultContainer>
    )
}

export default PropertySearchResult;
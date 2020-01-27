import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FilterBasicGroup from './filter-basic-group/filter-basic-group.component';
import FilterCheckboxGroup from './filter-checkbox-group/filter-checkbox-group.component';

import {
    FilterPropertyContainer,
    GroupContainer
  } from './filter-property.styles';

const getAppropriateGroup= ({optionType, ...props}) => {
    switch (optionType) {
        case "basic-group":
            return <FilterBasicGroup {...props}/>
        case "checkbox-group":
            return <FilterCheckboxGroup {...props}/>
        default:
            break;
    }
}

const getEspecificData = (t) => {
    let key = "provisional"
    switch (key) {
        case "provisional":
            return t('propertySearchResult.filter.home');
        default:
            break;
    }
}

const FilterProperty = () => {
    const { t } = useTranslation();
    const commonsOptions = t('propertySearchResult.filter.commons');
    const specificData = getEspecificData(t);

    return (
        <FilterPropertyContainer>
                <div>
                {commonsOptions.map(({...props}) => {
                    return(
                        <GroupContainer>
                            <FilterBasicGroup {...props}/>
                        </GroupContainer>
                    )
                    })}
                </div>
                <div>
                {specificData.map(({...args}) => {
                    return(
                        <GroupContainer>
                            {getAppropriateGroup(args)}
                        </GroupContainer>
                    )
                })}
                </div>
        </FilterPropertyContainer>
    )
}

const mapStateToProps = state => ({
    homeState: {
        rooms: "myClubs",
        bathrooms : "myClubsActualPage",
        surface: {
            from: "",
            to: ""
        },
        extras: "",
        status: ""
    }
});

export default connect(mapStateToProps)(FilterProperty);

import React from 'react';
import { connect } from 'react-redux';

import {
    CustomSelectContainer,
    AuxiliarRelativeContainer,
    Select,
    Option,
    Icon
  } from './custom-select.styles';

import {handleInputAttributte} from '../../../redux/filter/filter.actions';

const isChecked = (filterSimpleState, reduxState, value) => {
    if(null === filterSimpleState[reduxState])
        return false

    return filterSimpleState[reduxState] == value;
}

const getDefaultValue = (filterSimpleState, reduxState) => {
    if(null === filterSimpleState[reduxState])
        return 

    return filterSimpleState[reduxState]
}

const CustomSelect = ({name, reduxState, data, filterSimpleState, handleInputAttributte}) => {
    return (
        <CustomSelectContainer>
            <AuxiliarRelativeContainer>
                <Select value={getDefaultValue(filterSimpleState, reduxState)} id={`filter-select-${name}`} 
                    onChange={(event)=> handleInputAttributte(event.target.value, reduxState)}>
                    {data.map(({title, value}) => {
                        return (<Option key={`filter-select-${reduxState}-${value}`} className={`custom-select-option`} value={value}>
                            {title}
                        </Option> )
                        })}
                </Select>
                <Icon className="fas fa-angle-down"/>
            </AuxiliarRelativeContainer>
        </CustomSelectContainer>
    )
}

const mapStateToProps = state => ({
    filterSimpleState: {
        propertyType: state.filter.propertyType,
        propertyOperation: state.filter.propertyOperation,
        propertyMinPrice: state.filter.propertyMinPrice,
        propertyMaxPrice: state.filter.propertyMaxPrice,
        areaTo: state.filter.areaTo,
        areaFrom: state.filter.areaFrom,
        homeRooms: state.filter.homeRooms,
        homeBathRooms: state.filter.homeBathRooms
    }
})

const mapDispatchToProps = dispatch => ({
    handleInputAttributte: (value, name) => {
        dispatch(handleInputAttributte(value, name))
        }
    }
);
  
export default connect(mapStateToProps, mapDispatchToProps)(CustomSelect);
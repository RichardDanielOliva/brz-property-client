import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
    CustomSelectContainer,
    AuxiliarRelativeContainer,
    Select,
    Option,
    OptionText,
    Icon
  } from './custom-select.styles';

import {handleInputAttributte} from '../../../redux/filter/filter.actions';
import {fetchPropertiesStartAsync} from '../../../redux/property/property.actions';

const CustomSelect = ({name, reduxState, data, handleInputAttributte, filterState}) => {
    console.log(filterState)
    return (
        <CustomSelectContainer>
            <AuxiliarRelativeContainer>
                <Select id={`filter-select-${name}`} 
                    onChange={(event)=> handleInputAttributte(event.target.value, reduxState, filterState)}>
                    {data.map(({title, value}) => {
                            if(true)
                                //return (<option className={`custom-select-${name}-${title}-option`} selected>
                                return (
                                    <Option className={`custom-select-option`} value={value}>
                                        {title}
                                    </Option> 
                                )
                        })}
                </Select>
                <Icon className="fas fa-angle-down"/>
            </AuxiliarRelativeContainer>
        </CustomSelectContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    handleInputAttributte: (value, name, filterState) => {
        dispatch(handleInputAttributte(value, name))
        dispatch(fetchPropertiesStartAsync(filterState))
        }
    }
);
  
export default connect(null, mapDispatchToProps)(CustomSelect);
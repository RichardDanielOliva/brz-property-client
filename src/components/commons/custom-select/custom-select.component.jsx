import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
    CustomSelectContainer,
    AuxiliarRelativeContainer,
    Select,
    Option,
    Icon
  } from './custom-select.styles';

const CustomSelect = ({name, selectedOption, data}) => {
    return (
        <CustomSelectContainer>
            <AuxiliarRelativeContainer>
                <Select>
                    {data.map(({title, value}) => {
                            if(true)
                                //return (<option className={`custom-select-${name}-${title}-option`} selected>
                                return (<Option className={`custom-select-option`} value={value} selected>
                                    {title}    
                                </Option> )
                            else
                                return (<Option className={`custom-select-${name}-li`}>
                                    {title}
                                </Option>)
                        })}
                    
                </Select>
                <Icon className="fas fa-angle-down"/>
            </AuxiliarRelativeContainer>
        </CustomSelectContainer>
    )
}

export default CustomSelect;
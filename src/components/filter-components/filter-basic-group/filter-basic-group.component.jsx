import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CustomSelect from '../../commons/custom-select/custom-select.component';

import './filter-basic-group.styles.scss';

const FilterBasicGroup = ({title, data}) => {
    return (
        <div className="filter-group-container">
            <div className="filter-group-title-container">
                {title}
            </div>
            <div className="filter-group-options-container">
                {data.map(({...props}) => (
                    <CustomSelect {...props}/>
                    ))}
            </div>
        </div>
    )
}

export default FilterBasicGroup;
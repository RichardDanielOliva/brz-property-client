import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CustomCheckbox from '../../commons/custom-checkbox/custom-checkbox.component';

import './filter-checkbox-group.styles.scss';

const FilterCheckboxGroup = ({title, data}) => {
    console.log(data)
    return (
        <div className="filter-checkbox-container">
            <div className="filter-checkbox-title-container">
                {title}
            </div>
            <div className="filter-checkbox-input-container">
                <CustomCheckbox data={data}/>
            </div>
        </div>
    )
}

export default FilterCheckboxGroup;
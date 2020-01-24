import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CustomSelect from '../../commons/custom-select/custom-select.component';

import './psr-sorted-group.styles.css';

const PSRSortedGroup = () => {
    const { t } = useTranslation();
    const {title, data} = t('propertySearchResult.sort');
    console.log(data)
    return (
        <div className="prs-sorted-group-container">
            <span className="prs-sorted-group-title-container">
                {title}
            </span>
            <span className="filter-group-options-container">
                <CustomSelect data={data}/>
            </span>
        </div>
    )
}

export default PSRSortedGroup;
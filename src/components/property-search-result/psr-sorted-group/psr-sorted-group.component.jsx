import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FormSelect from '../form-select/form-select.component';

import './prs-sorted-group.styles.scss';

const PSRSortedGroup = ({title, selectData}) => {
    return (
        <div className="prs-sorted-group-container">
            <span className="prs-sorted-group-title-container">
                {title}
            </span>
            <span className="filter-group-options-container">
                <FormSelect {...selectData}/>
            </span>
        </div>
    )
}

export default PSRSortedGroup;
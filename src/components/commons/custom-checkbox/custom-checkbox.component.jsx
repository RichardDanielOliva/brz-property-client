import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './form-select.styles.scss';

const CustomCheckbox = ({name, selectedOption, options}) => {
    return (
        <div className="form-select-${name}-container">
            {
            options.map((title) => {
                return(
                    <label class="container">{title}
                        <input type="checkbox" checked="checked"/>
                        <span class="checkmark"></span>
                    </label>
                )  })}
        </div>
    )
}

export default CustomCheckbox;
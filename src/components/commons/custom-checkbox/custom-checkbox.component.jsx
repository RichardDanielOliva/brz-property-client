import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './custom-checkbox.styles.css';

const CustomCheckbox = ({name, selectedOption, data}) => {
    return (
        <div className={`form-select-${name}-container`}>
            {
            data.map(({title, value}) => {
                return(
                    <label class="container">{title}
                        <input type="checkbox" name={`form-select-${name}-container`} value={value}/>
                        <span class="checkmark"></span>
                    </label>
                )  })}
        </div>
    )
}

export default CustomCheckbox;
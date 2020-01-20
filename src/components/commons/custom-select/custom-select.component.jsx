import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './custom-select.styles.css';

const CustomSelect = ({name, selectedOption, options}) => {
    return (
        <div className={`custom-select-container`}>
            <select className={`custom-select`}>
                {options.map((title) => {
                        if(true)
                            //return (<option className={`custom-select-${name}-${title}-option`} selected>
                            return (<option className={`custom-select-option`} selected>
                                {title} <i class="fa fa-bars"></i>
                            </option>)
                        else
                            return (<option className={`custom-select-${name}-li`}>
                                {title}
                            </option>)
                    })}
            </select>
        </div>
    )
}

export default CustomSelect;
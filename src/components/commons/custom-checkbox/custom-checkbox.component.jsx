import React from 'react';
import { connect } from 'react-redux';

import './custom-checkbox.styles.css';

import {handleCheckboxAttributte} from '../../../redux/filter/filter.actions';

const isChecked = (filterCheckBoxState, reduxState, value) => {
    if(null === filterCheckBoxState[reduxState])
        return false

    return filterCheckBoxState[reduxState].includes(value);
}

const CustomCheckbox = ({name, reduxState, data, filterCheckBoxState, handleCheckboxAttributte}) => {
    return (
        <div className={`form-select-${name}-container`}>
            {
            data.map(({title, value}) => {
                return(
                    <label key={`custom-check-box-${reduxState}-${value}`} className="container">
                        {title}
                        {isChecked(filterCheckBoxState, reduxState, value) 
                            ? 
                            <input type="checkbox" 
                                onClick={(event) => handleCheckboxAttributte(value, reduxState)}
                                name={`form-select-${name}-container`} 
                                checked value={value}/> 
                            : 
                            <input type="checkbox" 
                                onClick={(event) => handleCheckboxAttributte(value, reduxState)}
                                name={`form-select-${name}-container`} 
                                value={value}/>
                        }
                        <span className="checkmark"></span>
                    </label>
                )  })}
        </div>
    )
}

const mapStateToProps = state => ({
    filterCheckBoxState: {
        homeExtras: state.filter.homeExtras,
        homeType: state.filter.homeType,
        propertyStatus: state.filter.propertyStatus,
    }
})

const mapDispatchToProps = dispatch => ({
    handleCheckboxAttributte: (value, name) => {
        dispatch(handleCheckboxAttributte(value, name))
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CustomCheckbox);
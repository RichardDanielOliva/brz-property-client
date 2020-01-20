import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FilterGroup from './filter-group-basic/filter-group.component';

import './filter-property.styles.scss';

const commonsOptions = [
    {
        name:"main",
        optionType:"group-basic",
        style:"property-filter",
        data: [{
            name: "operation",
            selectedOption:"buy",
            options: ["buy", "rent", "share"]
        },
        {
            name: "property-type",
            selectedOption:"home",
            options: ["home", "apartment", "office"]
        }]
    },
    {
        name:"price",
        title: "Price",
        optionType:"group-basic",
        style:"property-filter",
        data: [{
            name: "min-prices",
            selectedOption:"precio desde",
            options: ["desde 25", "desde 50", "desde 75"]
        },
        {
            name: "max-price",
            selectedOption:"precio hasta",
            options: ["hasta 50", "hasta 75", "hasta 100"]
        }]
    }
]

const homeData = [
    {   name: "type-home",
        title: "Type of home",
        optionType:"group-box-nested",
        style:"property-filter",
        data: [{
                title: "All flats",
                options: ["Intermediate floors", "Apartment"]
            }]
    },
    {name:"features",
    title: "Features",
    optionType:"group-basic",
    style:"property-filter",
    groups: [{
        defaultValue: "rooms",
        name: "rooms",
        actualValue:"precio desde",
        options: ["1 or more", "2 or more", "3 or more", "4 or more"]
    },
    {
        defaultValue:"bathrooms",
        name: "baths",
        selectedOption:"precio hasta",
        options: ["hasta 50", "hasta 75", "hasta 100"]
    }]
    },
    {
        name:"Surface",
        title: "Surface",
        groups: [{
            defaultValue: "floor area from",
            name: "surface-area-from",
            actualValue:"precio desde",
            options: ["from 60 m2", "2 or more", "3 or more", "4 or more"]
        },
        {
            defaultValue:"floor area to",
            name: "surface-area-to",
            selectedOption:"precio hasta",
            options: ["hasta 50", "hasta 75", "hasta 100"]
        }]
    },
    {
        name:"extras",
        title: "Extras",
        data: ["Parking", "Lift", "Furnished", "Heating", "Garden",
            "Swimming Pool", "Terrace", "Box room"]
    },
    {
        name:"status",
        title: "Status",
        data: ["New home", "Almost new", "Very good", "For renovation", "Reburbished"]
    }
]

const getPriceData = (propertyOperation) => {
    switch (propertyOperation) {
        case "buy": return 
            
            break;
    
        default:
            break;
    }
}

const FilterProperty = () => {
    return (
        <div className="filter-property-container">
            <div className="filter-property-container">
                {commonsOptions.map(({...props}) => (
                    <FilterGroup {...props}/>
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    homeState: {
        rooms: "myClubs",
        bathrooms : "myClubsActualPage",
        surface: {
            from: "",
            to: ""
        },
        extras: "",
        status: ""
    }
});

export default connect(mapStateToProps)(FilterProperty);

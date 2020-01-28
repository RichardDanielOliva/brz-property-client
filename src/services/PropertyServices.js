import React from 'react';
import { connect } from 'react-redux';

const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";

export const getPropertyList = ({...property}) => {
    console.log(property);

    fetch(HOME_BASE_URL)
        .then((response) => response.json())
        .then(function(myJson) {
            console.log(myJson);
          });

}
  


import React from 'react';

import { Switch, Route } from 'react-router-dom';
import PropertyTableWrapper from '../../components/property-table/property-table-wrapper.component';
import PropertyFormWrapper from '../../components/property-form/property-form-wrapper.component';

//Styles
import {
  PropertyAdminContainer,
} from './property-admin-page.styles';

const PropertyAdminPage = () => {
  return (
    <PropertyAdminContainer>
        <Switch>
          <Route exact path="/admin/property" component={PropertyTableWrapper} />
          <Route exact path="/admin/property/create" component={PropertyFormWrapper} />
          <Route path="/admin/property/edit" component={PropertyFormWrapper} />
        </Switch>
    </PropertyAdminContainer>
  );
};

export default PropertyAdminPage;


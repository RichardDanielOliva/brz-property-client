import React from 'react';

import { Switch, Route } from 'react-router-dom';
import PropertyTableWrapper from '../../components/property-table/property-table.component';
import PropertyForm from '../../components/property-form/property-form.component';

//Styles
import {
  PropertyAdminContainer,
} from './property-admin-page.styles';

const PropertyAdminPage = () => {
  return (
    <PropertyAdminContainer>
        <Switch>
          <Route exact path="/admin/property" component={PropertyTableWrapper} />
          <Route exact path="/admin/property/create" component={PropertyForm} />
          <Route exact path="/admin/property/edit" component={PropertyForm} />
        </Switch>
    </PropertyAdminContainer>
  );
};

export default PropertyAdminPage;


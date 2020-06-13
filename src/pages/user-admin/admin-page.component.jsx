import React from 'react';

import UserForm from '../../components/user-form/user-form.component';

//Styles
import {
  AdminPageContainer,
} from './admin-page.styles';

const AdminPage = () => {
  return (
    <AdminPageContainer>
      <UserForm/>
    </AdminPageContainer>
  );
};

export default AdminPage;

import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import {
  AdminPageContainer,
} from './admin-page.styles';


const AdminPage = () => {
  return (
    <AdminPageContainer>
      <Link to='/admin/property'>Property</Link>
      <Link to='/admin/user'>User</Link>
    </AdminPageContainer>
  );
};

export default AdminPage;

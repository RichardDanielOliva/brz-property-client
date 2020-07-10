import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//Styles
import {
  AdminPageContainer,
  LinksContainer
} from './admin-page.styles';


const AdminPage = ({user}) => {
  return (
    <AdminPageContainer>
      <h2>Welcome {user.name}</h2>
      <LinksContainer>
        <Link to='/admin/property' class="btn btn-primary btn-lg mb-2" role="button">Property</Link>
        <Link to='/admin/user' class="btn btn-secondary btn-lg disabled" role="button">User</Link>
      </LinksContainer>
    </AdminPageContainer>
  );
};


const mapStateToProps = state => ({
  user: state.auth.user,
})


export default connect(mapStateToProps)(AdminPage);


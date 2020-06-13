import React, { Suspense } from 'react';
//import useReactRouter from 'use-react-router';
import { Switch, Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Pages
import HomePage from './pages/home/home-page.component';
import PropertySearchPage from './pages/property-search/property-search-page.component';
import ServicesPage from './pages/services/services-page.component';
import LoginPage from './pages/login/login-page.component';
import PropertyAdminPage from './pages/property-admin/property-admin-page.component';
import AdminPage from './pages/admin/admin-page.component';
import PrivateRoute from './utils/PrivateRoute';

// Components
import Nav from './components/nav/nav.component';

// CSS
import './App.css';

const App = () => {
  //const { location } = useReactRouter();
  const hideHeader = () => {
    return <Nav />;
  };

  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        {hideHeader()}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={PropertySearchPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="/admin/property" component={PropertyAdminPage} />
          <Route exact path="/admin" component={AdminPage} />
          <PrivateRoute exact path="/user" component={ServicesPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  null,
  mapDispatchToProps
)(App);

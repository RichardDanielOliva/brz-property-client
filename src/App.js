import React, { Suspense } from 'react';
import useReactRouter from 'use-react-router';
import { Switch, Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Pages
import HomePage from './pages/home/home-page.component';
import PropertySearchPage from './pages/property-search/property-search-page.component';
//import ActivityPage from './pages/activity/activityPage.component';

// Components
import Nav from './components/nav/nav.component';

// CSS
import './App.css';

const App = () => {
  const { location } = useReactRouter();

  const hideHeader = () => {
    /*if (location.pathname === '/') return <Header />;

    if (location.pathname === '/signin' || location.pathname === '/signup')
      return null;*/

    return <Nav />;
  };

  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        {hideHeader()}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={PropertySearchPage} />
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

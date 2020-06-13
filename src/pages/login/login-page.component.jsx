import React from 'react';

import backgroundSearchImageUrl from '../../assets/img/home-search.jpg';
import UserForm from '../../components/user-form/user-form.component';

//Styles
import {
  ServicesPageContainer,
  BackgroundSearchImage
} from './login-page.styles';

const LoginPage = () => {
  return (
    <ServicesPageContainer>
      <UserForm/>
      <BackgroundSearchImage src={backgroundSearchImageUrl} alt="item"/>
    </ServicesPageContainer>
  );
};

export default LoginPage;

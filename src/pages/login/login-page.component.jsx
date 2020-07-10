import React from 'react';

import backgroundSearchImageUrl from '../../assets/img/home-search.jpg';
import UserForm from '../../components/user-form/user-form.component';
import Header from '../../components/header/header.component';

//Styles
import {
  ServicesPageContainer,
  BackgroundSearchImage,
  HeaderContainer,
  UserFormContainer
} from './login-page.styles';

const LoginPage = () => {
  return (
    <ServicesPageContainer>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
      <UserFormContainer>
        <UserForm/>
      </UserFormContainer>
      <BackgroundSearchImage src={backgroundSearchImageUrl} alt="item"/>
    </ServicesPageContainer>
  );
};

export default LoginPage;

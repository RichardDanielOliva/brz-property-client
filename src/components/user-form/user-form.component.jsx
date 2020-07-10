import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { useInputValue } from '../../effects/useInputValue';

import { Form, Input, Title, UserFormContainer } from './user-form.styles';

import { setToken, setUser } from '../../redux/auth/auth.actions';
import AuthServices from '../../utils/services/auth.services';
import { useState } from 'react';

const UserForm = ({disabled, onSubmit, title, setToken, setUser }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const authServices = new AuthServices();
  const [ invalidCredentials, setInvalidCredentials] = useState(false)
  const [ handleRedirect, setHandleRedirect] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    authServices.fecthLogin({
        username: email.value,
        password: password.value
      }).then(jsonResponse => {
        console.log(jsonResponse)
        setToken(jsonResponse.access_token)
        let { user_name, email} = AuthServices.extractDataForToken(jsonResponse.access_token)
        let user = { name:user_name, email: email};
        setUser(user)
        setHandleRedirect(true)
      }).catch(error => {
        console.log(error)
        setInvalidCredentials(true)
      })
  }

  if(handleRedirect)
    return (<Redirect to="/admin/"/>)

  return (
    <UserFormContainer>
      <Title>Login</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <input type="submit" value="Login" className="btn btn-info"/>
      </Form>
      {invalidCredentials && 
        <div class="alert alert-danger" role="alert">
          {`Invalid credentials`}
        </div>}
    </UserFormContainer>
  )
}


const mapDispatchToProps = dispatch => ({
    setToken: (token) => 
      dispatch(setToken(token)),
    setUser: (token) => 
      dispatch(setUser(token)),
  }
);

export default connect(null, mapDispatchToProps)(UserForm);

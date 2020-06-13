import React, { Fragment } from 'react';
import { useInputValue } from '../../effects/useInputValue';

import { Error, Form, Input, Title } from './user-form.styles';
import AuthServices from '../../utils/services/auth.services';

const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const authServices = new AuthServices();

  const handleSubmit = (event) => {
    event.preventDefault()
    //onSubmit({
    //  email: email.value,
    //  password: password.value
    //})
    authServices.fecthLogin({
        username: email.value,
        password: password.value
      })
  }

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <input type="submit"/>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}

export default UserForm;

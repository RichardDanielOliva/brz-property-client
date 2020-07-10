import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
  width: 40%;
`

export const UserFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 88%;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h1`
  color: rgba(250,250,250,1)
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`

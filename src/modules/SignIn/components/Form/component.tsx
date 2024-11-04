import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions';

import * as Styled from './styled';

import { ISignInData } from './types';

const FormComponent = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: ISignInData): void => {
    dispatch(login(data));
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Title>Sign In</Styled.Title>
        <Styled.InputGroup>
          <Styled.Label htmlFor="login">Username or Email</Styled.Label>
          <Styled.Input
            id="login"
            type="text"
            name="login"
            ref={register({ required: 'Username or Email is required' })}
          />
          {errors.login && (
            <Styled.Error>{(errors.login as FieldError).message}</Styled.Error>
          )}
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.Label htmlFor="password">Password</Styled.Label>
          <Styled.Input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: 'Password is required',
            })}
          />
          {errors.password && (
            <Styled.Error>
              {(errors.password as FieldError).message}
            </Styled.Error>
          )}
        </Styled.InputGroup>
        <Styled.Button type="submit">Sign In</Styled.Button>
        <Styled.RegisterContainer>
          <Styled.Text>Don&apos;t have an account?</Styled.Text>
          <Link to="/register">Register</Link>
        </Styled.RegisterContainer>
      </Styled.Form>
    </Styled.Container>
  );
};

export default FormComponent;

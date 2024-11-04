import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { register as registerUser, setRegisterStep } from '../../actions';

import * as Styled from './styled';

import { IState } from '../../../../store/types';

const Step3FormComponent = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm();
  const password = watch('password');
  const userData = useSelector((state: IState) => state.register.userData);

  const onSubmit = (): void => {
    const { email, username, name, surname, currency } = userData;

    if (!email || !username || !password || !name || !surname || !currency) {
      return;
    }
    dispatch(
      registerUser({
        email,
        username,
        password,
        name,
        surname,
        currency,
      })
    );
  };

  const onBack = (): void => {
    dispatch(setRegisterStep(1));
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Create a password (3 of 3)</Styled.Title>

      <Styled.InputGroup>
        <Styled.Label htmlFor="password">Password</Styled.Label>
        <Styled.Input
          id="password"
          type="password"
          name="password"
          ref={register({
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
        {errors.password && (
          <Styled.Error>{(errors.password as FieldError).message}</Styled.Error>
        )}
      </Styled.InputGroup>

      <Styled.InputGroup>
        <Styled.Label htmlFor="confirmPassword">Confirm Password</Styled.Label>
        <Styled.Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          ref={register({
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && (
          <Styled.Error>
            {(errors.confirmPassword as FieldError).message}
          </Styled.Error>
        )}
      </Styled.InputGroup>

      <Styled.ButtonGroup>
        <Styled.BackButton type="button" onClick={onBack}>
          Back
        </Styled.BackButton>
        <Styled.Button type="submit">Register</Styled.Button>
      </Styled.ButtonGroup>
    </Styled.Form>
  );
};

export default Step3FormComponent;

import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  checkUsername as checkUsernameRequest,
  checkEmail as checkEmailRequest,
} from 'api';

import { IState } from 'store/types';

import { formValidationMessages } from 'utils/consts';

import { updateUserData, setRegisterStep } from '../../actions';
import { clearServerError, setServerError } from '../../../_shared/actions';

import * as Styled from './styled';

interface IStep1Data {
  email: string;
  username: string;
}

const Step1FormComponent = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const {
    register: { userData },
    shared,
  } = useSelector((state: IState) => state);

  const onSubmit = async (data: IStep1Data): Promise<void> => {
    try {
      dispatch(clearServerError());
      // Check username availability
      const usernameResponse = await checkUsernameRequest(data.username);
      if (usernameResponse.status === 409) {
        dispatch(setServerError(formValidationMessages.register.username));
        return;
      }

      // Check email availability
      const emailResponse = await checkEmailRequest(data.email);
      if (emailResponse.status === 409) {
        dispatch(setServerError(formValidationMessages.register.email));
        return;
      }

      dispatch(updateUserData(data));
      dispatch(setRegisterStep(1));
    } catch (error) {
      dispatch(setServerError(formValidationMessages.register.default));
    }
  };

  const changeHandler = (): void => {
    dispatch(clearServerError());
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.TitleGroup>
        <Styled.Title>
          Let&apos;s start with your identification (1 of 3)
        </Styled.Title>
      </Styled.TitleGroup>
      <Styled.InputGroup>
        <Styled.Label htmlFor="email">Email</Styled.Label>
        <Styled.Input
          id="email"
          type="email"
          name="email"
          defaultValue={userData.email}
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          onChange={changeHandler}
        />
        {errors.email && (
          <Styled.Error>{(errors.email as FieldError).message}</Styled.Error>
        )}
      </Styled.InputGroup>
      <Styled.InputGroup>
        <Styled.Label htmlFor="username">Username</Styled.Label>
        <Styled.Input
          id="username"
          type="text"
          name="username"
          defaultValue={userData.username}
          ref={register({ required: 'Username is required' })}
          onChange={changeHandler}
        />
        {errors.username && (
          <Styled.Error>{(errors.username as FieldError).message}</Styled.Error>
        )}
      </Styled.InputGroup>
      {shared.serverError && <Styled.Error>{shared.serverError}</Styled.Error>}
      <Styled.Button type="submit">Continue</Styled.Button>
      <Styled.SignInContainer>
        <Styled.Text>Already have an account?</Styled.Text>
        <Link to="/sign-in">Sign In</Link>
      </Styled.SignInContainer>
    </Styled.Form>
  );
};

export default Step1FormComponent;

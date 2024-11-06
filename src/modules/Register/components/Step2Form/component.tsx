import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'store/types';
import { updateUserData, setRegisterStep } from '../../actions';

import * as Styled from './styled';

interface IStep2Data {
  name: string;
  surname: string;
  currency: string;
}

const CURRENCIES = ['USD', 'UAH', 'EUR'];

const Step2FormComponent = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const { userData } = useSelector((state: IState) => state.register);

  const onSubmit = (data: IStep2Data): void => {
    dispatch(updateUserData(data));
    dispatch(setRegisterStep(2));
  };

  const onBack = (): void => {
    dispatch(setRegisterStep(0));
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Personal Information (2 of 3)</Styled.Title>
      <Styled.InputGroup>
        <Styled.Label htmlFor="name">First Name</Styled.Label>
        <Styled.Input
          id="name"
          type="text"
          name="name"
          defaultValue={userData.name}
          ref={register({ required: 'First name is required' })}
        />
        {errors.name && (
          <Styled.Error>{(errors.name as FieldError).message}</Styled.Error>
        )}
      </Styled.InputGroup>

      <Styled.InputGroup>
        <Styled.Label htmlFor="surname">Last Name</Styled.Label>
        <Styled.Input
          id="surname"
          type="text"
          name="surname"
          defaultValue={userData.surname}
          ref={register({ required: 'Last name is required' })}
        />
        {errors.surname && (
          <Styled.Error>{(errors.surname as FieldError).message}</Styled.Error>
        )}
      </Styled.InputGroup>

      <Styled.InputGroup>
        <Styled.Label htmlFor="currency">Currency</Styled.Label>
        <Styled.Select
          id="currency"
          name="currency"
          defaultValue={userData.currency}
          ref={register({ required: 'Currency is required' })}
        >
          <option value="">Select currency</option>
          {CURRENCIES.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Styled.Select>
        {errors.currency && (
          <Styled.Error>{(errors.currency as FieldError).message}</Styled.Error>
        )}
        <Styled.Label>
          Please note, that changing currency in the future will affect your
          expenses because of the exchange rate.
        </Styled.Label>
      </Styled.InputGroup>

      <Styled.ButtonGroup>
        <Styled.BackButton type="button" onClick={onBack}>
          Back
        </Styled.BackButton>
        <Styled.Button type="submit">Continue</Styled.Button>
      </Styled.ButtonGroup>
    </Styled.Form>
  );
};

export default Step2FormComponent;

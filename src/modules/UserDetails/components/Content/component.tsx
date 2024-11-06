import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

// import { updateUserDetails } from '../../actions';
import * as Styled from './styled';
import { IProps } from './types';

const CURRENCIES = ['USD', 'UAH', 'EUR'];

const Content = ({
  email,
  username,
  name,
  surname,
  currency,
}: IProps): React.ReactElement => {
  // const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <Styled.Container>
      <Styled.Title>Account Details</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.InputGroup>
          <Styled.Label>Email</Styled.Label>
          <Styled.Input value={email} disabled />
        </Styled.InputGroup>

        <Styled.InputGroup>
          <Styled.Label>Username</Styled.Label>
          <Styled.Input value={username} disabled />
        </Styled.InputGroup>

        <Styled.InputGroup>
          <Styled.Label htmlFor="name">First Name</Styled.Label>
          <Styled.Input
            id="name"
            type="text"
            name="name"
            defaultValue={name}
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
            defaultValue={surname}
            ref={register({ required: 'Last name is required' })}
          />
          {errors.surname && (
            <Styled.Error>
              {(errors.surname as FieldError).message}
            </Styled.Error>
          )}
        </Styled.InputGroup>

        <Styled.InputGroup>
          <Styled.Label htmlFor="currency">Currency</Styled.Label>
          <Styled.Select
            id="currency"
            name="currency"
            defaultValue={currency}
            ref={register({ required: 'Currency is required' })}
          >
            <option value="">Select currency</option>
            {CURRENCIES.map((currencyItem) => (
              <option key={currencyItem} value={currencyItem}>
                {currencyItem}
              </option>
            ))}
          </Styled.Select>
          {errors.currency && (
            <Styled.Error>
              {(errors.currency as FieldError).message}
            </Styled.Error>
          )}
          <Styled.Label>
            Please note, that changing currency will affect your expenses
            because of the exchange rate.
          </Styled.Label>
        </Styled.InputGroup>

        <Styled.Button type="submit">Save Changes</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Content;

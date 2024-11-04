import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0;
  padding: 4rem;
  margin-left: 35rem;
  margin-top: 20rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-weight: 600;
  text-align: left;
`;

export const Subtitle = styled.h2`
  text-align: left;
  color: var(--text-secondary);
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const TitleGroup = styled.div`
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: var(--gray-400);
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--background-secondary);
  border: 1px solid var(--gray-700);
  border-radius: 4px;
  font-size: 1rem;
  color: var(--text-primary);
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--gray-500);
  }

  &::placeholder {
    color: var(--gray-600);
  }
`;

export const Error = styled.span`
  color: var(--danger);
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const Button = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RegisterContainer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
`;

export const Text = styled.span`
  color: var(--text-primary);
  margin-right: 0.5rem;
`;

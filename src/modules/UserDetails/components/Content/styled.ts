import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin-left: 35rem;
  margin-top: 13.5rem;
  padding: 4rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: var(--gray-400);
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

  &:focus {
    outline: none;
    border-color: var(--gray-500);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  background-color: #0066cc;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #0052a3;
  }
`;

export const Error = styled.span`
  color: var(--danger);
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const Select = styled.select`
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

  option {
    color: var(--text-primary);
    background-color: var(--background-secondary);
  }
`;

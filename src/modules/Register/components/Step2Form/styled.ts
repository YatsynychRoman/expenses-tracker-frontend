import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  color: var(--text-primary);
  font-weight: 500;
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
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 75%;
  &:hover {
    background-color: #0052a3;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BackButton = styled.button`
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--gray-700);
  border-radius: 4px;
  width: 25%;
  &:hover {
    background-color: var(--background-secondary);
    opacity: 1;
  }
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

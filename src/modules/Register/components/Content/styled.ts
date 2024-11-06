import styled from 'styled-components';

interface IFormContainerProps {
  direction: 'forward' | 'backward';
}

export const Container = styled.div`
  max-width: 600px;
  margin-left: 35rem;
  margin-top: 18rem;
  padding: 4rem;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-weight: 600;
  text-align: left;
`;

export const FormContainer = styled.div<IFormContainerProps>`
  position: relative;

  /* Enter transitions */
  .fade-enter {
    opacity: 0;
    transform: translateX(
      ${(props) => (props.direction === 'forward' ? '20px' : '-20px')}
    );
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }

  /* Exit transitions */
  .fade-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateX(
      ${(props) => (props.direction === 'forward' ? '-20px' : '20px')}
    );
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
`;

export const SignIn = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

export const SignInText = styled.span`
  margin-right: 0.5rem;
  color: var(--text-primary);
`;

export const Link = styled.a`
  color: var(--text-primary);
  &:hover {
    text-decoration: none;
  }
`;

export const Error = styled.div`
  color: red;
  text-align: center;
`;

import styled from 'styled-components';

export const Wrapper = styled.div<{ fullScreen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ fullScreen }) =>
    fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-primary);
    z-index: 9999;
  `}

  svg {
    width: 200px;
    height: 200px;
  }
`;

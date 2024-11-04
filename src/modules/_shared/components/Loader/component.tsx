import React from 'react';

// styled
import { Wrapper } from './styled';

// types
import { IProps } from './types';

const Loader = ({ fullScreen = false }: IProps): React.ReactElement => (
  <Wrapper fullScreen={fullScreen}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <circle
        fill="#6b7280"
        stroke="#6b7280"
        strokeWidth="15"
        r="15"
        cx="40"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        />
      </circle>
      <circle
        fill="#6b7280"
        stroke="#6b7280"
        strokeWidth="15"
        r="15"
        cx="100"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        />
      </circle>
      <circle
        fill="#6b7280"
        stroke="#6b7280"
        strokeWidth="15"
        r="15"
        cx="160"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        />
      </circle>
    </svg>
  </Wrapper>
);

export default Loader;

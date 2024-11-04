import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { IState } from 'store/types';
import Loader from 'modules/_shared/components/Loader';

import Step1Form from '../Step1Form';
import Step2Form from '../Step2Form';
import Step3Form from '../Step3Form';

import * as Styled from './styled';

const ContentComponent = (): React.ReactElement => {
  const { register, shared } = useSelector((state: IState) => state);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [prevStep, setPrevStep] = useState(register.registerStep);

  useEffect(() => {
    if (register.registerStep > prevStep) {
      setDirection('forward');
    } else if (register.registerStep < prevStep) {
      setDirection('backward');
    }
    setPrevStep(register.registerStep);
  }, [register.registerStep, prevStep]);

  if (shared.loading) {
    return <Loader fullScreen />;
  }

  return (
    <Styled.Container>
      <Styled.MainTitle>Register</Styled.MainTitle>
      <Styled.FormContainer direction={direction}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={register.registerStep}
            timeout={200}
            classNames="fade"
          >
            {() => {
              if (register.registerStep === 0) return <Step1Form />;
              if (register.registerStep === 1) return <Step2Form />;
              return <Step3Form />;
            }}
          </CSSTransition>
        </SwitchTransition>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default ContentComponent;

import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const Button: React.FC<IButtonProps> = ({ type, buttonText, ...rest }) => (
  <Container type={type} {...rest}>
    {buttonText}
  </Container>
);

export default Button;

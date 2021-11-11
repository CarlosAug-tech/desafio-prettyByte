import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  labelText: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({
  icon: Icon,
  type,
  labelText,
  ...rest
}) => (
  <Container>
    <input type={type} placeholder=" " {...rest} />
    <label htmlFor="">{labelText}</label>
    {Icon && <Icon size={16} />}
  </Container>
);

export default Input;

import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Container } from './styles';

interface ISwitchButtonProps {
  toggleTheme: Function;
  theme: string;
}

const SwitchButton: React.FC<ISwitchButtonProps> = ({ toggleTheme, theme }) => (
  <Container>
    <label htmlFor="switchButton">
      <input
        type="checkbox"
        id="switchButton"
        onClick={() => toggleTheme()}
        checked={theme === 'dark'}
      />
      <span>{theme === 'dark' ? <FaMoon /> : <FaSun />}</span>
    </label>
  </Container>
);

export default SwitchButton;

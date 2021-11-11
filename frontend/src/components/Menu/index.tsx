import React, { useEffect } from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import SwitchButton from '../SwitchButton';

import { Header, Nav } from './styles';

interface IMenuProps {
  toggleTheme: Function;
  theme: string;
}

const Menu: React.FC<IMenuProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();

  useEffect(() => {
    document.querySelectorAll('a').forEach((item) => {
      if (item.pathname === location.pathname) {
        item.classList.add('active');
      } else if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
  }, [location.pathname]);

  return (
    <Header>
      <Nav>
        <div>
          <FaConnectdevelop size={25} />
          <strong>Gerenciador de Clientes</strong>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addCustomer">Adicionar Cliente</Link>
          </li>
          <li>
            <SwitchButton toggleTheme={toggleTheme} theme={theme} />
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Menu;

import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { FaTimes } from 'react-icons/fa';
import { ICustomer } from '../../store/modules/Customer/type';
import { AppState } from '../../store/storeTypes';

import { Container, Content } from './styles';
import { getCustomerById } from '../../controllers/CustomerController';

interface IModalProps {
  isActive: boolean;
  setIsActive: Function;
  customerId: number;
}

const Modal: React.FC<IModalProps> = ({
  isActive,
  setIsActive,
  customerId,
}) => {
  const customer = useSelector<AppState, ICustomer>(
    (state) => state.customer.customer,
  );

  useEffect(() => {
    getCustomerById(customerId);
  }, []);

  const closeModal = () => {
    setIsActive(false);
  };

  return (
    <Container isActive={isActive}>
      <Content>
        <h3>Ficha Completa do Cliente</h3>
        <strong>
          Nome: {customer.name} {customer.lastName}
        </strong>
        <strong>
          Data de Nascimento:{' '}
          {moment(customer.dateBirthday, 'YYYY/MM/DD').format('DD/MM/YYYY')}
        </strong>
        <button type="button" onClick={closeModal}>
          <FaTimes />
        </button>
      </Content>
    </Container>
  );
};

export default Modal;

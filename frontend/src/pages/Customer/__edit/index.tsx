import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {
  editCustomer,
  getCustomerById,
} from '../../../controllers/CustomerController';
import { useToast } from '../../../hooks/toast';

import * as actions from '../../../store/modules/Customer/action';
import { ICustomer } from '../../../store/modules/Customer/type';
import { AppState } from '../../../store/storeTypes';

import { Container } from './styles';

const EditCustomer: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { id } = useParams();
  const customer = useSelector<AppState, ICustomer>(
    (state) => state.customer.customer,
  );

  useEffect(() => {
    getCustomerById(Number(id), addToast);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await editCustomer(Number(id), customer);
      navigate('/');
      addToast({
        type: 'success',
        title: 'Cliente editado com sucesso!',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Oops.. houve uma falha ao editar o Cliente.',
        description: 'Verifique os dados preenchidos',
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Editar Cliente</h3>
        <Input
          type="text"
          labelText="Nome:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.addCustomer({ ...customer, name: e.target.value })
          }
          value={customer.name}
        />
        <Input
          type="text"
          labelText="Sobrenome:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.addCustomer({ ...customer, lastName: e.target.value })
          }
          value={customer.lastName}
        />
        <Input
          type="date"
          labelText="Data:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.addCustomer({ ...customer, dateBirthday: e.target.value })
          }
          value={customer.dateBirthday}
        />
        <Button type="submit" buttonText="Editar" />
      </form>
    </Container>
  );
};

export default EditCustomer;

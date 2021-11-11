import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { addCustomer } from '../../../controllers/CustomerController';
import { useToast } from '../../../hooks/toast';

import * as actions from '../../../store/modules/Customer/action';
import { ICustomer } from '../../../store/modules/Customer/type';
import { AppState } from '../../../store/storeTypes';

import { Container } from './styles';

const AddCustomer: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const customer = useSelector<AppState, ICustomer>(
    (state) => state.customer.customer,
  );

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await addCustomer(customer);
      addToast({
        type: 'success',
        title: 'Cliente adicionado com sucesso!',
      });
      navigate('/');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Oops.. houve uma falha ao adicionar o Cliente.',
        description: 'Verifique os dados preenchidos',
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Adicionar Cliente</h3>
        <Input
          type="text"
          labelText="Nome:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.addCustomer({ ...customer, name: e.target.value })
          }
        />
        <Input
          type="text"
          labelText="Sobrenome:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.addCustomer({ ...customer, lastName: e.target.value })
          }
        />
        <Input
          type="date"
          labelText="Data:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.addCustomer({ ...customer, dateBirthday: e.target.value })
          }
        />
        <Button type="submit" buttonText="Adicionar" />
      </form>
    </Container>
  );
};

export default AddCustomer;

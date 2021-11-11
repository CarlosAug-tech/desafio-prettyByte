import moment from 'moment';
import api from '../services/api';
import store from '../store';

import * as actions from '../store/modules/Customer/action';
import { ICustomer } from '../store/modules/Customer/type';

export async function getCustomers(
  setIsLoading?: Function,
  addToast?: Function,
) {
  try {
    const response = await api.get('/api/customers');
    const data = await response.data.map((item: ICustomer) => ({
      ...item,
      yearsOld: moment(new Date()).year() - moment(item.dateBirthday).year(),
    }));

    actions.setListCustomers(data);
    if (setIsLoading) {
      setIsLoading(false);
    }
    if (addToast) {
      addToast({
        type: 'success',
        title: 'Busca realizada com sucesso!',
      });
    }
  } catch (err) {
    if (addToast) {
      addToast({
        type: 'error',
        title: 'Oops.. houve uma falha ao realizar a busca.',
        description: 'Verifique a conexão com o servidor!',
      });
    }
  }
}

export async function getCustomerById(id: number, addToast?: Function) {
  try {
    const response = await api.get(`/api/customers/${id}`);
    const data = {
      ...response.data,
      dateBirthday: moment(response.data.dateBirthday, 'YYYY-MM-DD').format(
        'YYYY-MM-DD',
      ),
    };
    actions.addCustomer(data);
  } catch (err) {
    if (addToast) {
      addToast({
        type: 'error',
        title: 'Oops.. houve uma falha ao buscar este Cliente.',
        description: 'Verifique se este cliente existe!',
      });
    }
  }
}

export async function getCustomerByName(
  name: string,
  setIsLoadingSearch?: Function,
  addToast?: Function,
) {
  try {
    const response = await api.get(`/api/customers?name=${name}`);
    const data = await response.data.map((item: ICustomer) => ({
      ...item,
      yearsOld: moment(new Date()).year() - moment(item.dateBirthday).year(),
    }));
    actions.setListCustomers(data);
    if (setIsLoadingSearch) {
      setIsLoadingSearch(false);
    }
  } catch (err) {
    if (addToast) {
      addToast({
        type: 'error',
        title: 'Oops.. houve uma falha ao buscar este Cliente.',
      });
    }
  }
}

export async function addCustomer(customer: ICustomer) {
  await api.post('/api/customers', {
    name: customer.name,
    lastName: customer.lastName,
    dateBirthday: customer.dateBirthday,
  });
}

export async function editCustomer(id: number, customer: ICustomer) {
  await api.put(`/api/customers/${id}`, customer);
}

export async function removeCustomer(id: number, addToast?: Function) {
  const {
    customer: { customers },
  } = store.getState();

  try {
    await api.delete(`/api/customers/${id}`);
    const newArrCustomers = customers.filter((item) => item.id !== id && item);
    actions.setListCustomers(newArrCustomers);
    if (addToast) {
      addToast({
        type: 'success',
        title: 'Cliente removido com sucesso!',
      });
    }
  } catch (err) {
    if (addToast) {
      addToast({
        type: 'error',
        title: 'Não foi possivel remover este Cliente!',
      });
    }
  }
}

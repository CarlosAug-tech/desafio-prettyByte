import store from '../..';
import {
  CustomerAction,
  CustomerStore,
  CustomerTypes,
  ICustomer,
  ISearchCustomer,
} from './type';

export const setListCustomers = (customers: ICustomer[]) =>
  store.dispatch<CustomerAction>({
    idStore: CustomerStore.ID_STORE,
    type: CustomerTypes.SET_LIST_CUSTOMERS,
    customers,
  });

export const addCustomer = (customer: ICustomer) =>
  store.dispatch<CustomerAction>({
    idStore: CustomerStore.ID_STORE,
    type: CustomerTypes.ADD_CUSTOMER,
    customer,
  });

export const setSearch = (search: ISearchCustomer) =>
  store.dispatch<CustomerAction>({
    idStore: CustomerStore.ID_STORE,
    type: CustomerTypes.SET_SEARCH_CUSTOMER,
    search,
  });

export enum CustomerStore {
  ID_STORE = 'CUSTOMER',
}

export enum CustomerTypes {
  SET_LIST_CUSTOMERS = 'SET_LIST_CUSTOMERS',
  ADD_CUSTOMER = 'ADD_CUSTOMER',
  SET_SEARCH_CUSTOMER = 'SET_SEARCH_CUSTOMER',
}

export type CustomerAction = {
  idStore: CustomerStore.ID_STORE;
  type: CustomerTypes;
  customers?: ICustomer[];
  customer?: ICustomer;
  search?: ISearchCustomer;
};

export interface CustomerState {
  customers: ICustomer[];
  customer: ICustomer;
  search: ISearchCustomer;
}

export interface ICustomer {
  id?: number;
  name: string;
  lastName: string;
  dateBirthday: string;
  yearsOld?: number;
}

export interface ISearchCustomer {
  name: string;
}

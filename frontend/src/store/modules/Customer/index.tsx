import { Reducer } from 'redux';
import { CustomerAction, CustomerState, CustomerTypes } from './type';

const INITIAL_STATE: CustomerState = {
  customers: [],
  customer: {
    name: '',
    lastName: '',
    dateBirthday: '',
  },
  search: {
    name: '',
  },
};

const customer: Reducer<CustomerState, CustomerAction> = (
  state = INITIAL_STATE,
  action: CustomerAction,
): any => {
  switch (action.idStore) {
    case 'CUSTOMER': {
      switch (action.type) {
        case CustomerTypes.SET_LIST_CUSTOMERS: {
          if (action.customers) {
            return { ...state, customers: action.customers };
          }
          break;
        }
        case CustomerTypes.ADD_CUSTOMER: {
          if (action.customer) {
            return { ...state, customer: action.customer };
          }
          break;
        }
        case CustomerTypes.SET_SEARCH_CUSTOMER: {
          if (action.search) {
            return { ...state, search: action.search };
          }
          break;
        }
        default:
          return state;
      }
      break;
    }
    default:
      return state;
  }
  return null;
};

export default customer;

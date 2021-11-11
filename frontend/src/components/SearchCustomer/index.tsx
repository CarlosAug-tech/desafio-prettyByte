import React, { useEffect } from 'react';
import { FaInfoCircle, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getCustomerByName } from '../../controllers/CustomerController';
import { useToast } from '../../hooks/toast';

import * as actions from '../../store/modules/Customer/action';
import { ISearchCustomer } from '../../store/modules/Customer/type';
import { AppState } from '../../store/storeTypes';

import Input from '../Input';

import { Container } from './styles';

interface ISearchCustomerProps {
  setIsLoadingSearch?: Function;
}

const SearchCustomer: React.FC<ISearchCustomerProps> = ({
  setIsLoadingSearch,
}) => {
  const { addToast } = useToast();
  const search = useSelector<AppState, ISearchCustomer>(
    (state) => state.customer.search,
  );

  useEffect(() => {
    if (setIsLoadingSearch) {
      setIsLoadingSearch(true);
    }
    setTimeout(() => {
      getCustomerByName(search.name, setIsLoadingSearch, addToast);
    }, 3000);
  }, [search.name]);

  return (
    <Container>
      <Input
        type="text"
        labelText="Pesquisar pelo nome do cliente:"
        icon={FaSearch}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === 'Enter' &&
          actions.setSearch({ name: e.currentTarget.value })
        }
      />
      <div>
        <FaInfoCircle size={12} />
        <div>
          <span>
            Pressione a tecla <b>&#34;Enter&#34;</b> para realizar a pesquisa
          </span>
        </div>
      </div>
    </Container>
  );
};

export default SearchCustomer;

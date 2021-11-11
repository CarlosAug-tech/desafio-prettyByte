import React, { useState } from 'react';
import CustomerList from '../../components/CustomerList';
import SearchCustomer from '../../components/SearchCustomer';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  return (
    <Container>
      <Content>
        <SearchCustomer setIsLoadingSearch={setIsLoadingSearch} />
        <CustomerList isLoadingSearch={isLoadingSearch} />
      </Content>
    </Container>
  );
};

export default Home;

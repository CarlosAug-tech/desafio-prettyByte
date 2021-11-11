import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {
  getCustomers,
  removeCustomer,
} from '../../controllers/CustomerController';
import { ICustomer } from '../../store/modules/Customer/type';
import { AppState } from '../../store/storeTypes';

import Modal from '../Modal';
import LoadingContainer from '../Loading';

import { Container, TableCustomer, MessageError } from './styles';
import { useToast } from '../../hooks/toast';

interface ICustomerListProps {
  isLoadingSearch?: boolean;
}

const CustomerList: React.FC<ICustomerListProps> = ({
  isLoadingSearch = false,
}) => {
  const { addToast } = useToast();

  const [customerId, setCustomerId] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const customers = useSelector<AppState, ICustomer[]>(
    (state) => state.customer.customers,
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getCustomers(setIsLoading, addToast);
    }, 3000);
  }, []);

  const toggleModal = (id: number) => {
    setCustomerId(id);
    setIsActive(!isActive);
  };

  return (
    <>
      {isLoading || isLoadingSearch ? (
        <LoadingContainer isLoading={isLoading || isLoadingSearch} />
      ) : (
        <>
          {customers.length > 0 ? (
            <>
              <Container>
                <TableCustomer>
                  <thead>
                    <tr>
                      <th>Nome:</th>
                      <th>Sobrenome:</th>
                      <th>Idade:</th>
                      <th>Editar:</th>
                      <th>Remover:</th>
                      <th>Ficha:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.length > 0 &&
                      customers.map((item: ICustomer) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.lastName}</td>
                          <td>{item.yearsOld}</td>
                          <td>
                            <div>
                              <Link
                                to={{
                                  pathname: `/editCustomer/${item.id}`,
                                }}
                              >
                                <FaEdit size={18} />
                              </Link>
                            </div>
                          </td>
                          <td>
                            <div>
                              <button
                                type="button"
                                onClick={() =>
                                  removeCustomer(Number(item.id), addToast)
                                }
                              >
                                <FaTrash size={18} />
                              </button>
                            </div>
                          </td>
                          <td>
                            <div>
                              <button
                                type="button"
                                onClick={() => toggleModal(Number(item.id))}
                              >
                                <span>Ver Ficha</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </TableCustomer>
                <Link to="/addCustomer">
                  <FaPlus />
                </Link>
              </Container>
              {isActive && (
                <Modal
                  isActive={isActive}
                  setIsActive={setIsActive}
                  customerId={customerId}
                />
              )}
            </>
          ) : (
            <MessageError>
              <strong>Não foi possivel encontrar nenhum registro!</strong>
            </MessageError>
          )}
        </>
      )}
    </>
  );
};

export default CustomerList;

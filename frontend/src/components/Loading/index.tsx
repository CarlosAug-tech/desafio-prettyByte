import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

interface ILoadingProps {
  isLoading: boolean;
}

const LoadingContainer: React.FC<ILoadingProps> = ({ isLoading = false }) => (
  <Container isLoading={isLoading}>
    <FaSpinner size={16} />
  </Container>
);

export default LoadingContainer;

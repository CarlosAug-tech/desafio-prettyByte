import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  background: ${({ theme: { colors } }) => colors.secondaryBackground};
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`;

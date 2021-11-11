import styled from 'styled-components';

export const Container = styled.button`
  align-self: center;
  min-width: 120px;
  margin: 20px auto;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background: ${({ theme: { colors } }) => colors.thirdBackground};
`;

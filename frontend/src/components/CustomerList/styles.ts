import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  position: relative;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    top: -10px;
    right: 0;
    position: absolute;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.thirdBackground};

    > svg {
      color: #fff;
    }
  }
`;

export const TableCustomer = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th,
  tbody td {
    padding: 10px;
    border: 1px solid ${({ theme: { colors } }) => colors.primaryColor};
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }

  thead th {
    text-align: center;
  }

  tbody,
  td {
    &:nth-child(3) {
      text-align: right;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      > button {
        border: 0;
        background: transparent;

        > svg {
          color: #fa8072;
        }

        > span {
          color: ${({ theme: { colors } }) => colors.primaryColor};
          position: relative;

          &:hover {
            &::after {
              width: 100%;
            }
          }

          &::after {
            content: '';
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 50%;
            position: absolute;
            background: ${({ theme: { colors } }) => colors.primaryColor};
            transform: translateX(-50%);
            transition: width 0.4s ease;
          }
        }
      }

      > a {
        color: #2196f3;
      }
    }
  }
`;

export const MessageError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;

  > strong {
    color: ${({ theme: { colors } }) => colors.primaryColor};
    font-size: 18px;
  }
`;

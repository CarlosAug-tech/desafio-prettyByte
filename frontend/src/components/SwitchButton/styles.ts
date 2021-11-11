import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;

  > label {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 20px;

    > input {
      width: 0;
      height: 0;
      opacity: 0;

      &:checked + span {
        background-color: #2196f3;

        & > svg {
          left: 34px;
        }
      }

      &:focus + span {
        box-shadow: 0 0 1px #2196f3;
      }

      &:checked + span::before {
        transform: translateX(28px);
      }
    }

    > span {
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      border-radius: 28px;
      background-color: #ccc;
      transition: all 0.4s;

      &::before {
        content: '';
        width: 16px;
        height: 16px;
        left: 3px;
        bottom: 3px;
        position: absolute;
        border-radius: 50%;
        background: white;
        transition: all 0.4s;
      }

      & > svg {
        z-index: 2;
        left: 6px;
        top: 4px;
        position: absolute;
        font-size: 10px;
        transition: all 0.4s;
      }
    }
  }
`;

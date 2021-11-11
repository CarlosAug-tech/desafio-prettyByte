import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
  position: relative;

  > div:nth-child(2) {
    cursor: pointer;
    right: 10px;
    top: 18px;
    margin: 0;
    position: absolute;

    > svg {
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }

    &:hover {
      > div {
        opacity: 1;
        visibility: visible;
      }
    }

    > div {
      width: 250px;
      padding: 5px;
      left: 50%;
      top: 25px;
      position: absolute;
      border-radius: 4px;
      transform: translateX(-50%);
      text-align: center;
      visibility: hidden;
      opacity: 0;
      color: #fff;
      background: ${({ theme: { colors } }) => colors.thirdBackground};
      transition: all 0.4s ease;

      > span {
        font-size: 10px;
      }

      &::before {
        content: '';
        width: 0;
        height: 0;
        top: -10px;
        left: 50%;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid
          ${({ theme: { colors } }) => colors.thirdBackground};
        transform: translateX(-50%);
      }
    }
  }
`;

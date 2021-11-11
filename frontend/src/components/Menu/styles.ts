import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 0 20px;
  position: fixed;
  background: ${({ theme: { colors } }) => colors.thirdBackground};

  & ~ div {
    padding-top: 100px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 80px;
  margin: auto;

  > div {
    display: flex;
    align-items: center;
    color: #fff;

    > strong {
      margin-left: 3px;
    }
  }

  > ul {
    display: flex;
    align-items: center;

    > li {
      & + li {
        padding-left: 5px;
        margin-left: 5px;
      }

      > a {
        position: relative;
        color: #fff;

        &.active {
          &::after {
            width: 100%;
          }
        }

        &::after {
          content: '';
          width: 0;
          height: 2px;
          left: 50%;
          bottom: -2px;
          position: absolute;
          background: #fff;
          transition: width 0.4s ease;
          transform: translateX(-50%);
        }

        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`;

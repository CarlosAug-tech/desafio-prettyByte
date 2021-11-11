import styled, { css } from 'styled-components';

interface IContainerProps {
  isActive: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  min-height: 300px;
  padding: 20px;
  position: relative;
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.secondaryBackground};

  > h3 {
    margin: 10px 0;
    text-align: center;
    font-size: 18px;
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }

  > strong {
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    top: -20px;
    right: -20px;
    position: absolute;
    border: 0;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.thirdBackground};

    > svg {
      color: #fff;
    }
  }
`;

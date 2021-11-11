import styled, { css } from 'styled-components';

interface ILoadingPropsStyle {
  isLoading: boolean;
}

export const Container = styled.div<ILoadingPropsStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;

  svg {
    color: ${({ theme: { colors } }) => colors.primaryColor};

    ${(props) =>
      props.isLoading &&
      css`
        animation: loadingSpinner 2s infinite linear;
      `}
  }

  @keyframes loadingSpinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

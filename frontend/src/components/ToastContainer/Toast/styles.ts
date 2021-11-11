import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface IContainerProps {
  type: 'success' | 'error';
  hasDescription: boolean;
}

const toastVariations = {
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  display: flex;
  width: 300px;
  padding: 16px;
  position: relative;
  border-radius: 10px;
  ${(props: IContainerProps) => toastVariations[props.type]}
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  > strong {
    font-size: 18px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  > button {
    right: 10px;
    top: 5px;
    position: absolute;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  & + div {
    margin-top: 20px;
  }

  > input {
    width: 100%;
    padding: 16px 16px 16px 32px;
    border: 1px solid ${({ theme: { colors } }) => colors.primaryColor};
    border-radius: 4px;
    color: ${({ theme: { colors } }) => colors.primaryColor};
    background: ${({ theme: { colors } }) => colors.secondaryBackground};

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: -10px;
      left: 4px;
      padding: 3px 5px;
      font-size: 12px;
      color: ${({ theme: { colors } }) => colors.thirdBackground};
      background: ${({ theme: { colors } }) => colors.secondaryBackground};
    }

    &:focus ~ svg,
    &:not(:placeholder-shown) ~ svg {
      color: ${({ theme: { colors } }) => colors.thirdBackground};
    }
  }

  > label {
    top: 16px;
    left: 33px;
    position: absolute;
    color: ${({ theme: { colors } }) => colors.primaryColor};
    transition: all 0.4s ease;
    pointer-events: none;
  }

  > svg {
    top: 16px;
    left: 12px;
    position: absolute;
    color: ${({ theme: { colors } }) => colors.primaryColor};
    transition: all 0.4s ease;
  }
`;

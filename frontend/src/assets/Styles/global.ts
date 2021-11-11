import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background: ${({ theme: { colors } }) => colors.primaryBackground};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 14px 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    padding: 20px;
    background-color: ${({ theme: { colors } }) => colors.secondaryBackground};
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

    > h3 {
      text-align: center;
      margin-bottom: 20px;
      color: ${({ theme: { colors } }) => colors.primaryColor};
    }
  }

`;

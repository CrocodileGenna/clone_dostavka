import styled from '@emotion/styled';

export const GlobalStyle = styled.div`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: lightgray;
    padding: 40px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
  h2,
  h3,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
`;

export const Container = styled.div`
  margin: 30px auto 0;
  max-width: 1200px;

  @media screen and (min-width: 760px) {
    padding: 16px;
    // margin: 40px auto 0;
  }
  @media screen and (min-width: 1200px) {
    margin: 50px auto 0;
  }
`;

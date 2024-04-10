import App from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  font-size: calc(12px + (100vw + 200vh)/1500);
  box-sizing: border-box;

}
        
body {
  font-family: 'Zilla Slab', serif;
  font-weight: 300;
  color: #383636;
  }

strong {
  font-weight: 500;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  color: #383636;
}

h2 {
  font-family: 'Zilla Slab', serif;
  color: #383636;
}

h3 {
  font-family: 'Open Sans', sans-serif;
  color: #383636;
}


a,
button {
  text-decoration: none;
  color: #383636;
}
`;

const theme = {
  width: {
    default: "clamp(70%, 1400px, 98%)",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

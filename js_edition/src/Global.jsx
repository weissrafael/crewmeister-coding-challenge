import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-text: #001027;
    --secondary-text: #6b6b78;
    --white: #ffffff;
    --black: #000000;
  }

  body {
    font-family: "Lato", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
  }
`
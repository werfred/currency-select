import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'


export const GlobalStyles = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;

    --color-black: #181818;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  body {
    overflow-x: hidden;
    position: relative;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.2;
  }
`

import { createGlobalStyle } from 'styled-components';
import { colorPrimary, font } from '../index';
import { colorBase } from '../index';

export const GlobalStyle = createGlobalStyle`



@font-face {
  font-family: "Ubuntu";
  src: url('/src/assets/fonts/Ubuntu-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Ubuntu";
  src: url('/src/assets/fonts/Ubuntu-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Ubuntu";
  src: url('/src/assets/fonts/Ubuntu-Medium.ttf');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Ubuntu";
  src: url('/src/assets/fonts/Ubuntu-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url('/src/assets/fonts/Roboto-Black.ttf');
  font-weight: 900;
  font-style: normal;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: Ubuntu, sans-serif;
  font-weight: 400;
  font-size: ${font.md};
  color: ${colorBase[300]};
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: ${colorBase[200]};
  color: ${colorBase[500]};
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid ${colorPrimary.default};
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

p:not(:last-of-type) {
  margin-bottom: 2rem;
}

img {
  max-width: 100%;
}

pre {
  white-space: pre-wrap;
}

`;

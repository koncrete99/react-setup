import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Medium.ttf');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Black.ttf');
  font-weight: 900;
  font-style: normal;
}

:root {
  --black-0: #fff;
  --black-50: #eee;
  --black-100: #ddd;
  --black-150: #ccc;
  --black-200: #bbb;
  --black-250: #aaa;
  --black-200: #999;
  --black-300: #888;
  --black-400: #777;
  --black-700: #666;
  --black-750: #555;
  --black-800: #444;
  --black-850: #333;
  --black-900: #222;
  --black-950: #111;
  --black-1000: #000;

  --primary-50: #f6faf3;
  --primary-100: #e9f5e3;
  --primary-200: #d3eac8;
  --primary-300: #afd89d;
  --primary-400: #82bd69;
  --primary-500: #61a146;
  --primary-600: #4c8435;
  --primary-700: #3d692c;
  --primary-800: #345427;
  --primary-900: #2b4522;
  --primary-950: #13250e;

  --xxxs: .3rem;
  --xxs: .5rem;
  --xs: 1rem;
  --sm: 1.5rem;
  --md: 2rem;
  --lg: 2.5rem;
  --xl: 3rem;
  --xxl: 5rem;
  --xxxl: 10rem;
  --xxxxl: 20rem;

  --font-xxs: .8rem;
  --font-xs: 1rem;
  --font-sm: 1.3rem;
  --font-md: 1.6rem;
  --font-lg: 2rem;
  --font-xl: 3rem;
  --font-xxl: 4rem;
  --font-xxxl: 5rem;
  --font-xxxxl: 6rem;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.9);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.5);
  
  --image-grayscale: 0;
  --image-opacity: 100%;

}

::-moz-selection {
  color: var(--black-0);
  background-color: var(--primary-700);
}

::selection {
  color: var(--black-0);
  background-color: var(--primary-700);
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
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: var(--font-md);
  color: var(--black-900);
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
  background-color: var(--black-200);
  color: var(--black-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
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
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyle;
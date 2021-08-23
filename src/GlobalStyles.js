import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 *, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

 html {
  scroll-behavior:smooth;
 }
 
 
 body {
  background-color: #fff;
  color: #122620;
  font-family: 'Mukta', sans-serif;
  line-height: 1.5;
 }

`

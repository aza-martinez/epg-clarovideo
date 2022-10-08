import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      font-size: 16px;
   }
   html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
      box-sizing: border-box;
      scroll-behavior: smooth;
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
   }
   #body {
      -webkit-text-size-adjust: 100%;
      background: #ffffff ;
   }
   * {
      font-family: 'Roboto', sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      vertical-align: baseline;
      &::before,
      &::after {
         box-sizing: border-box;
      }
   }
`;

export default GlobalStyle;

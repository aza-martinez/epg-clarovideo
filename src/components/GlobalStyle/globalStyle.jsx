import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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

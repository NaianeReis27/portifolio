import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
  :root {
  --chocolate-color: #82351B;
  --yellow-color: #ffe594;
  --white-color: #F9F9F9;
  }
  #root
  {
   height: 100vh;
   background: #FFD7CD;
  }

  html,
  body{
    min-width: 100%;
    margin: 0;
    padding: 0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  canvas{
    height: 500px;
    z-index: 2;
  }

`;

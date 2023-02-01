import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
  
  #root
  {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   background: rgb(255,253,254);
   background: radial-gradient(circle, rgba(255,253,254,1) 25%, rgba(246,205,236,1) 100%);
  }

  html,
  body{
    
    margin: 0;
    padding: 0;
  }

  canvas{
    height: 500px;
    z-index: 2;
  }

  .App{
    overflow: hidden;
  }

`;

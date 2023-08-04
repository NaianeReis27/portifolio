import styled from "styled-components";

export const Picture = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
    .picture{
      width: 300px;
      height: 300px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        position: absolute;
        width: 100%;
      }
      div{
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: var(--yellow-color);
        border-radius: 50%;
        z-index: -1;
        top:18px;
      }
    }
    
  
`;

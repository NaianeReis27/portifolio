import styled from "styled-components";

export const Banner = styled.div`
  div {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
    margin: 0 auto;
  }
  display: flex;
  width: 100%;
  height: 400px;
  position: relative;
  width: inherit;
  figure {
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 100%;
      
    }
    .detail{
      position: relative;
      top:5px;
    }
  }
`;

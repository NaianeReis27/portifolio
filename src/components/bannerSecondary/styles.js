import styled from "styled-components";

export const Banner = styled.div`
  padding: 100px 30px;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  background-image: url("../../../public/icecream.jpg");
  background-size: cover;
  background-position: center;
  .paper {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 55px;
    padding: 30px 20px 20px;
    width: 80%;
    position: absolute;
    background-color: #fdfdfe;
    h2 {
      text-align: center;
      padding: 35px;
      font-size: 40px;
    }
    
    div {
      margin: 0 auto;
      width: 80%;
      min-height: 500px;
      background-color: #fdfdfe;
      opacity: 0.8;
      background-size: 40px 40px;
      background-image: repeating-linear-gradient(
        0deg,
        #c7c9f9,
        #c7c9f9 1px,
        #fdfdfe 1px,
        #fdfdfe
      );
      p {
        position: relative;
        top: 4px;
        font-size: 30px;
        line-height: 40px;
        word-wrap: break-word;
      }
    }
  }
`;

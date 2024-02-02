import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #FAFAFA;
  }

  p {
    font-size: 16px;
    color: #FAFAFA;
    margin: 10px 0;
    text-align: justify;
    text-justify: inter-word;
    word-break: break-word;
    hyphens: auto;
  }

  a {
    font-size: 20px;
    color: #FAFAFA;
    text-decoration: none;
    display: block;
  } 

  a.remover {
    color: #FAFAFA60;
    text-decoration: none;
    display: block;
  }

  hr {
    color: #FAFAFA60;
    margin: 20px 0;
  }

`;

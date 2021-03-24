import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap');
  body {
    margin: 0;
    padding:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    overflow-y: overlay;
    width: 100vw; 
    padding-left: 0px !important;
    }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

`;
export const theme = {
    white: "#fffffb",
    darkBlue: "#185785",
    orange: "#f3a52e",
    lightBlue: "#dde3e6",
    lightOrange: "#f3d7b6",
    black:"#111010",
    creamWhite: "#f2f2f2"
}
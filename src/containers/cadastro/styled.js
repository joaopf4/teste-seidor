import styled from 'styled-components';
import {theme} from "../../theme";


export const Cadastro = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: 100vh;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  header {
    height: 8vh;
    background-color: ${theme.darkBlue};
    color: ${theme.white};
    width: 100%;
    display: flex;
    h1{
        margin: auto;
        width: fit-content;
    }
  }
  form {
    display: flex;
    height: 60vh;
    width: 50vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    text-align: left;
    box-shadow: 5px 5px 30px #ddd, 0px 10px 20px #ccc;
    border-radius: 18px;
    padding: 30px;
    label {
        align-self: flex-start;
        margin-bottom: 4px;
    }
  }
  `
export const FormContainer = styled.div`
    padding-top: 150px;
`

export const Input = styled.div `
  width: 100%;
  height: 40px;
  border: 2px solid #111010;
  box-shadow: rgba(17, 16, 16, 1) 4px 4px;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0px 0px 22px 0px;
  display: flex;
  align-items: inherit;
  background-color: white;
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.3rem; 
  }
  p {
    font-size:1.2rem;
    cursor: pointer;
    color: #111010;
  }
`
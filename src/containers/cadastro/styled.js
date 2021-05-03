import styled from "styled-components";
import { theme } from "../../theme";

export const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  padding-bottom: 40px;
  background-color: white;
  border-radius: 8px;
  color: ${theme.black};
  header {
    height: 8vh;
    background-color: ${theme.darkBlue};
    color: ${theme.white};
    width: 100%;
    display: flex;
    @media (max-width: 540px) {
      font-size: 2.5vw;
      height: 10vh;
      padding: 10px;
    }
    h1 {
      margin: auto;
      width: fit-content;
    }
  }
  h2 {
    margin: 40px 0;
  }
  h3 {
    width: 70%;
  }
  form {
    display: flex;
    width: 70vw;
    max-width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: left;
    box-shadow: 5px 5px 30px #ddd, 0px 10px 20px #ccc;
    border-radius: 18px;
    padding: 30px;
    @media (max-width: 540px) {
      height: fit-content;
      width: 80vw;
    }
    label {
      align-self: flex-start;
      margin-bottom: 4px;
      font-weight: 600;
    }
  }
`;
export const FormContainer = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  @media (max-width: 540px) {
    padding-top: 40px;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 40px;
  border: 2px solid ${theme.black};
  box-shadow: ${theme.black} 4px 4px;
  padding: 0 10px;
  margin: 0px 0px 22px 0px;
  display: flex;
  align-items: inherit;
  background-color: white;
  :last-of-type {
    margin-bottom: 40px;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.3rem;
  }
  p {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
export const Button = styled.button`
  width: fit-content;
  height: 40px;
  border: 2px solid #111010;
  box-shadow: rgba(17, 16, 16, 1) 4px 4px;
  outline: none;
  padding: 0 20px;
  display: flex;
  align-items: inherit;
  font-weight: 600;
  background-color: white;
  font-size: 1.3rem;
  :hover {
    cursor: pointer;
    background-color: ${theme.lightBlue};
  }
  :active {
    transform: translateY(3px);
    transition: 0.15s;
    box-shadow: rgba(17, 16, 16, 1) 1px 1px;
  }
`;
export const TabelaFuncs = styled.table`
  border-collapse: collapse;
  width: 60%;
  th {
    padding: 12px 6px;
    text-align: left;
    background-color: ${theme.darkBlue};
    color: ${theme.white};
    border: 1px solid #ddd;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  td {
    padding: 10px 0 10px 6px;
    border: 1px solid #ddd;
  }
`;

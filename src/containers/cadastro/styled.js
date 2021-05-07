import styled from "styled-components";
import { theme } from "../../theme";

export const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  padding-bottom: 40px;
  justify-content: center;
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

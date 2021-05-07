import styled from "styled-components";
import { theme } from "../../theme";

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
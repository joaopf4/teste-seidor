import styled from 'styled-components';
import {theme} from "../../theme";

export const TabelaFuncs = styled.table `
  border-collapse: collapse;
  width: 60%;
  th{
    padding: 12px 6px;
    text-align: left;
    background-color: ${theme.darkBlue};
    color: ${theme.white};
    border: 1px solid #ddd;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  td {
    padding: 10px 0 10px 6px;
    border: 1px solid #ddd;
  }
`
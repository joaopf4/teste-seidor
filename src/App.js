
import React from 'react';
import CadastroFunc from './containers/cadastro';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <CadastroFunc />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;

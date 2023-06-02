import React from "react";
import "./App.css"
import Cadastro from "./Componentes/cadastro";
import Listagem from "./Componentes/Listagem.js"
import'react-toastify/dist/ReactToastify.css';
import{ToastContainer}from"react-toastify";
function App() {

  
   

  // Como funciona objeto em javascript
  const usuario = {
    //chave: valor
    nome:"Egmar",
    idade: 54,
    status:true,
    endereco: {
      rua: "Londres",
      numero: 139,
      complemento:"ap 20"
    },
    vacinas_covid19:["Pfizer", "Pfizer", "Pfize", "J&J"]
  }

  const qnt_vacina = usuario.vacinas_covid19.length - 1

  const usuarios_padrao = [
    
      {nome: "Egmar", status: true, email: "egmar.afonso@gmail.com",},
      {nome: "azenha", status: false, email: "azenha.rafael@gmail.com",},
      {nome: "Doni", status: true, email: "doni.pacheco@gmail.com",},
      {nome: "Felipe", status: true, email: "felipe.felipe@gmail.com"}

    
  ]

  const [usuarios, alteraUsuarios] = React.useState(usuarios_padrao);
  const [editando, alteraEditando] = React.useState(null);

  
  return (
    <div className="container">

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauserOnHover
        theme="dark"
        />

      <div className="d-flex justify-content-around">
        
        
        <Listagem alteraEditando={alteraEditando} usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>
        <Cadastro editando={editando} usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

        

      </div >
      
    </div>
  );
}



export default App;

import React from "react";
import "./App.css"
import Cadastro from "./Componentes/cadastro";
import Listagem from "./Componentes/Listagem.js"

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
    
      {nome: "Egmar", status: true},
      {nome: "azenha", status: false},
      {nome: "Doni", status: true},
      {nome: "Felipe", status: true}

    
  ]

  const [usuarios, alteraUsuarios] = React.useState(usuarios_padrao);

  
  return (
    <div className="container">

      <div className="d-flex justify-content-around">
        
        
        <Listagem usuarios={usuarios}/>
        <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

        

      </div >
      
    </div>
  );
}



export default App;

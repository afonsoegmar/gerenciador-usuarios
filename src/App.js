import React from "react";
import "./App.css"
import supabase from './supabase';

import Cadastro from "./Componentes/cadastro";
import Listagem from "./Componentes/Listagem.js"
import'react-toastify/dist/ReactToastify.css';
import{ToastContainer}from"react-toastify";


function App() {

   const [usuarios, alteraUsuarios] = React.useState([]);
   
   function buscaTodos(){
    supabase.from("usuarios").select()
    .then(response =>{
      console.log("conexão bem sucedida!");
      console.log(response)
      alteraUsuarios(response.data);
    })
    .catch(response =>{
      console.log("Deu erro na conexão");
      console.log(response)
    })
   }

   React.useEffect(()=>{
    buscaTodos();
   },[])
  
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
        
        
        <Listagem usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>
        <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

        

      </div >
      
    </div>
  );
}



export default App;

import "./App.css"
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

  const usuarios = [
    
      {nome: "Egmar", status: true},
      {nome: "azenha", status: false},
      {nome: "Doni", status: true},
      {nome: "Felipe", status: true}

    
  ]

  console.log(usuarios)
  //console.log(usuario)
  //console.log(usuario.endereco.rua, usuario.endereco.complemento)
  console.log(Object.keys(usuario))
  return (
    <div className="container">

      <div className="d-flex justify-content-around">
        
        
        <Listagem usuarios={usuarios}/>
        <div className="caixa">
          <h2> Cadastro</h2>

        </div>

      </div >
      
    </div>
  );
}



export default App;

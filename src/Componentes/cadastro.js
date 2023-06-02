import React from 'react';
import{toast} from 'react-toastify'

// import { Container } from './styles';

function Cadastro(props) {
  const [nome, alteraNome] = React.useState("");
  const [status, alteraStatus] = React.useState(false);
  const [email, alteraEmail] = React.useState(false);
  
  
 
  



  function salvar(e){
    e.preventDefault()
   
    const usuario = {
      nome:nome,
      status:status,
      email: email,
     
    }
    if(verifica()){
      props.alteraUsuarios([ ...props.usuarios, usuario])
      
    }

    
  }

  function veriEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
  }
  function verifica(){
    if(!nome){
      toast('X.Digite um Nome!')
      return;
    }
    if(nome.length < 3){
      toast('Não Aceitamos Nomes Com menos de 3 Caracteres.')
      return;
    }
    if(!email){
      toast('X. Digite um E-mail')
      return;
    }
    if(!veriEmail(email)){
     toast('X! Digite um e-mail válido') 
     return;
    }
    return true;


  }
 

 
  return (
    
    
      <div className="caixa">
          <h2> Cadastro</h2>


          <form onSubmit={(e)=>salvar(e)}>

          <div className="mb-3 form-floating">
                        <input onChange={e=>alteraNome(e.target.value)} className="form-control" id="txtNome" placeholder="None"/>
                        <label htmlFor="txtNome" className="form-label">Nome</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input onChange={e=>alteraEmail(e.target.value)} className="form-control" id="txtNome" placeholder="None"/>
                        <label htmlFor="txtNome" className="form-label">Email</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input checked={status} onChange={e=>alteraStatus(e.target.checked)} type="checkbox" className="form-check-input" id="cboxStatus"/>
                        <label className="form-check-label" htmlFor="cboxStatus">Ativo</label>
                    </div>



              <button type="submit" className="btn btn-primary">Salvar</button>

            </form>
          </div>

        
    
  )
}

export default Cadastro;
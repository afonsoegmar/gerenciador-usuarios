import React from 'react';

// import { Container } from './styles';

function Cadastro(props) {
  const [nome, alteraNome] = React.useState("");
  const [status, alteraStatus] = React.useState(false);
  
 



  function salvar(e){
    e.preventDefault()
   
    const usuario = {
      nome:nome,
      status:status
    }

    props.alteraUsuarios([ ...props.usuarios, usuario])
  }
  return (
    <div>
      <div className="caixa">
          <h2> Cadastro</h2>


          <form onSubmit={(e)=>salvar(e)}>
            <div class="mb-3">
              <label for="txtbox" class="form-label">Nome</label>
              <input  onChange={e => alteraNome(e.target.value)} class="form-control" />
              
            </div>

             

              <div class="mb-3 form-check">
                <input checked = {status}onChange={e => alteraStatus(e.target.checked)} type="checkbox" class="form-check-input" id="cboxStatus"/>
                <label class="form-check-label" for="cboxStatus">Ativo</label>
              </div>

              <button type="submit" class="btn btn-primary">Salvar</button>

            </form>

        </div>
    </div>
  );
}

export default Cadastro;
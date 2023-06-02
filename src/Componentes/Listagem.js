
function Listagem(props){
    return(
        <div className={"caixa"}>
          <h2> Listagem</h2>

          {
            props.usuarios.map( item =>
              <div style={{border:"1px solid #CCC"}}>
              <p> Nome: {item.nome} </p>
              <p> status: {item.status == true ?"Ativo" :"Banido"} </p>
              <p>email:{item.email}</p>
              </div>
              
            )
          }

         

        </div>

    )
}
export default Listagem;
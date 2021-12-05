import React from 'react';
import { data } from '../../db.jsx';
import { Title, Digite, Container } from './style.jsx'

const InputSelect = (props) => {
  const arr = props.arr;
  // console.log(props.arr);
  const arrFuncionarios = [
    {nome: "joão"},
    {nome: "Luan"},
    {nome: "Natan"}
  ];

  function funcionarios(){
    return arrFuncionarios.map((arrFuncionarios) => {
      return(
        <option>
          { arrFuncionarios.nome }
        </option>
      )
    })
  }



  function vaga(){
    let newArr = data.map((data) => {
        return data.vaga
      });
    
    for(let i = 0; i< newArr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[j] == newArr[i]){
          arr.splice(j, 1);
        }
      } 
    }
 
    return arr.map((arr)=>{
      return(
        <option value={arr}>{arr}</option>
      )
    })
  }


  return(
    <>
    <Container>
      <Title>
        {props.dados}
      </Title>
      
      <Digite 
        id={props.id} 
        onChange={e => props.funcao(
          {
            nome : props.id == 1 ? e.target.value : props.infos.nome,
            model : props.id == 2 ? e.target.value : props.infos.model,
            placa : props.id == 3 ? e.target.value : props.infos.placa,
            funcionario : props.id == 4 ? e.target.value : props.infos.funcionario,
            vaga : props.id == 5 ? e.target.value : props.infos.vaga
          }
        )}
      >
        <option selected disabled>
          {props.title}
        </option>

        {props.title == "Vaga" ? vaga() : funcionarios()}


      </Digite>
    </Container>
    </>
  );
};

export default InputSelect;
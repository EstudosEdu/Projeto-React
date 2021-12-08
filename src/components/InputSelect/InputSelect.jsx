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
        if(arr[j] === newArr[i]){
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
        {props.title}
      </Title>
      
      <Digite 
        onChange={(e) => props.funcao(
          {
            id: props.infos.id,
            nome : props.number === 1 ? e.target.value : props.infos.nome,
            model : props.number === 2 ? e.target.value : props.infos.model,
            placa : props.number === 3 ? e.target.value : props.infos.placa,
            funcionario : props.number === 4 ? e.target.value : props.infos.funcionario,
            vaga : props.number === 5 ? e.target.value : props.infos.vaga
          }
        )}
      >
        <option selected disabled>
        {props.edit ? `Vaga ${props.place}` : `${props.place}`}
        </option>

        {props.title === "Vaga" ? vaga() : funcionarios()}


      </Digite>
    </Container>
    </>
  );
};

export default InputSelect;
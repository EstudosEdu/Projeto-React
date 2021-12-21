import React from 'react';
import { Title, Digite, Container } from './style.jsx'

const InputSelect = (props) => {
  const data = props.datas
  const arrFuncionarios = props.todosFuncionarios
  const arr = props.arr;
  
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
    let newArr = typeof data !== 'undefined' && data.map((data) => {
      return data.Vaga
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
        {props.edit ?
            <option selected disabled>
              {props.place}
            </option>
          :
            <option selected disabled>
              {props.tipo === "Add1" && arr[0]}
              {props.tipo === "Add" && arrFuncionarios[0].nome}
            </option>
        }

        {props.title === "Vaga" ? vaga() : funcionarios()}


      </Digite>
    </Container>
    </>
  );
};

export default InputSelect;
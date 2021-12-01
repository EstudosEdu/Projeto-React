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
        <option>{arr}</option>
      )
    })
  }
  


  return(
    <>
    <Container>
      <Title>
        {props.dados}
      </Title>
      
      <Digite id={props.id}>
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
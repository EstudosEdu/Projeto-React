import React, {useState} from 'react';
import { ContainerGeral, ContTitle, Title, Add } from './style.jsx'
import Input from '../../Input/Input.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import InputSelect from '../../InputSelect/InputSelect.jsx';
import { create } from '../../../utils/functionsDB.js';
import { data } from '../../../db.jsx';
import { Redirect } from 'react-router-dom'



const Adicionar = () => {
  const [arr] = useState([])
  for(let i = 1; i<= 30; i++){arr.push(i)}
  
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

  const arrFuncionarios = [
    {nome: "joão"},
    {nome: "Luan"},
    {nome: "Natan"}
  ];

  const [ infos, setInfos ] = useState({
  nome: "",
  model: "",
  placa: "",
  vaga: arr[0],
  funcionario: arrFuncionarios[0].nome});

  const [redirect, setRedirect] = useState(null);

  if(redirect){
    return <Redirect to="/list"/>
  }
  

  return(
    <>
      <ContainerGeral>
        <ContTitle>
          <Title>
            ESTACIONAMENTO
          </Title>
        </ContTitle>

        <Add>Adicionar</Add>

        <div>
          < Input 
            dados="Nome do Proprietario:"
            number={1}
            maximoCaracter={"55"}
            funcao={setInfos}
            infos={infos}
            />

          < Input 
            dados="Modelo do Veiculo:"
            number={2}
            maximoCaracter={"20"}
            funcao={setInfos}
            infos={infos}
            />

          < Input 
            dados="Placa do Veiculo:"
            number={3}
            maximoCaracter={"7"}
            funcao={setInfos}
            infos={infos}
            />

          < InputSelect 
            title="Funcionarios"
            arr={arr}
            number={4}
            funcao={setInfos}
            infos={infos}
            tipo="Add"
            todosFuncionarios={arrFuncionarios}
          />

          < InputSelect 
            title="Vaga"
            datas={data}
            arr={arr}
            number={5}
            funcao={setInfos}
            infos={infos}
            tipo="Add1"
          />

        </div>

        <Bottao 
          nome="GUARDAR"
          func={create}
          info={infos}
          redirect={redirect}
          setredirect={setRedirect}
        />
      </ContainerGeral>
    </>
  );
};

export default Adicionar
import React, {useState, useEffect} from 'react';
import { ContainerGeral, ContTitle, Title, Add } from '../Layout/Adicionar/style.jsx';
import Input from '../Input/Input.jsx';
import InputSelect from '../InputSelect/InputSelect.jsx';
import { update } from '../../utils/functionsDB.js';
import { Redirect } from 'react-router-dom';
import '../Bottao/btn_style.css';
import Axios from 'axios';


const Editar = (props) => {
  const [data, setData] = useState()
  useEffect(() =>{
    Axios.get('http://localhost:8001/')
    .then((res) => {
      setData(res.data);
    })
  }, []);
  
  const [ infos, setInfos ] = useState({
    id: props.location.state.id,
    nome: props.location.state.Proprietario,
    placa: props.location.state.Placa,
    model: props.location.state.Modelo,
    vaga: props.location.state.Vaga,
    funcionario: props.location.state.Funcionario
  });

  
  const arr = []
  for(let i = 1; i<= 30; i++){arr.push(i)}

  const [redirect, setRedirect] = useState(null);

  if(redirect){
    return <Redirect to="/list"/>
  }

  const arrFuncionarios = [
    {nome: "joão"},
    {nome: "Luan"},
    {nome: "Natan"}
  ];

  return (
    <>
      <ContainerGeral>
        <ContTitle>
          <Title>ESTACIONAMENTO</Title>
        </ContTitle>

        <Add>Editar</Add>

        <div>
          <Input
            dados="Nome do Proprietario:"
            number={1}
            maximoCaracter={'55'}
            funcao={setInfos}
            infos={infos}
            edit={true}
            place={props.location.state.Proprietario}
          />

          <Input
            dados="Modelo do Veiculo:"
            number={2}
            maximoCaracter={'20'}
            funcao={setInfos}
            infos={infos}
            edit={true}
            place={props.location.state.Modelo}
          />

          <Input
            dados="Placa do Veiculo:"
            number={3}
            maximoCaracter={'7'}
            funcao={setInfos}
            infos={infos}
            edit={true}
            place={props.location.state.Placa}
          />

          <InputSelect
            dados="Nome do Funcionario:"
            dados1="Funcionario"
            title="Funcionarios"
            arr={arr}
            number={4}
            infos={infos}
            funcao={setInfos}
            edit={true}
            place={props.location.state.Funcionario}
            todosFuncionarios={arrFuncionarios}
          />

          <InputSelect
            dados="Vaga Alocada:"
            dados1="1"
            title="Vaga"
            datas={data}
            arr={arr}
            number={5}
            infos={infos}
            funcao={setInfos}
            edit={true}
            place={props.location.state.Vaga}
          />
        </div>

        <button
          className="link"
          onClick={() => {
            update(infos).then((red) => {
              setRedirect(red)
            })
          }}
        >
          Enviar
        </button>
        
        <button
          className="link edit"
          onClick={() => setRedirect(true)}
        >
          Voltar
        </button>

      </ContainerGeral>
    </>
  )
};

export default Editar
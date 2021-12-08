import React, {useState} from 'react';
import { ContainerGeral, ContTitle, Title, Add } from '../Layout/Adicionar/style.jsx';
import Input from '../Input/Input.jsx';
import Bottao from '../Bottao/Bottao.jsx';
import InputSelect from '../InputSelect/InputSelect.jsx';
import { update } from '../../utils/functionsDB.js';
import { data } from '../../db.jsx';
import { Redirect } from 'react-router-dom'



const Editar = (props) => {
  
  const [ infos, setInfos ] = useState({
    id: props.location.state.id,
    nome: props.location.state.nome,
    placa: props.location.state.placa,
    model: props.location.state.model,
    vaga: props.location.state.vaga,
    funcionario: props.location.state.funcionario
  });

  
  const arr = []
  for(let i = 1; i<= 30; i++){arr.push(i)}

  const [redirect, setRedirect] = useState(null);

  if(redirect){
    return <Redirect to="/list"/>
  }

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
            place={props.location.state.nome}
          />

          <Input
            dados="Modelo do Veiculo:"
            number={2}
            maximoCaracter={'20'}
            funcao={setInfos}
            infos={infos}
            edit={true}
            place={props.location.state.model}
          />

          <Input
            dados="Placa do Veiculo:"
            number={3}
            maximoCaracter={'7'}
            funcao={setInfos}
            infos={infos}
            edit={true}
            place={props.location.state.placa}
          />

          <InputSelect
            dados="Nome do Funcionario:"
            dados1="Funcionario"
            title="Funcionarios"
            arr={arr}
            number={4}
            infos={infos}
            funcao={setInfos}
            place={props.location.state.funcionario}
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
            place={props.location.state.vaga}
          />
        </div>

        {/* <Bottao 
          nome="GUARDAR"
          func={update}
          info={infos}
          redirect={redirect}
          setredirect={setRedirect}
          // link={"/list"}
        /> */}

        <button
          onClick={() => {
            update(infos).then((red) => {
              setRedirect(red)
            })
          }}
        >
          Enviar
        </button>
        
        <button
          onClick={() => setRedirect(true)}
        >
          Voltar
        </button>

      </ContainerGeral>
    </>
  )
};

export default Editar
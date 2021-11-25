import React, {useState} from 'react';
import { ContainerGeral, ContTitle, Title, Add } from './style.jsx'
import Input from '../../Input/Input.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import InputSelect from '../../InputSelect/InputSelect.jsx';
import { create } from '../../../utils/functionsDB.js';
import { data } from '../../../db.jsx';


const Adicionar = () => {
  const [ infos, setInfos ] = useState({
  nome: "",
  model: "",
  placa: ""})

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
            id={1}
            maximoCaracter={"55"}
            funcao={setInfos}
            infos={infos}
            />

          < Input 
            dados="Modelo do Veiculo:"
            id={2}
            maximoCaracter={"20"}
            funcao={setInfos}
            infos={infos}
            />

          < Input 
            dados="Placa do Veiculo:"
            id={3}
            maximoCaracter={"7"}
            funcao={setInfos}
            infos={infos}
            />

          < InputSelect 
            dados="Nome do Funcionario:" 
            dados1="Funcionario"
            title="Funcionarios"
            id={4}
            />

          < InputSelect 
            dados="Vaga Alocada:" 
            dados1="1"
            title="Vaga"
            datas={data}
            id={5}
            />

        </div>

        <Bottao 
          nome="GUARDAR"
          func={create}
          info={infos}
          // link={"/list"}
        />
      </ContainerGeral>
    </>
  );
};

export default Adicionar
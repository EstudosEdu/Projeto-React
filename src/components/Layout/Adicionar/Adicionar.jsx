import React from 'react';
import { ContainerGeral, ContTitle, Title, Add } from './style.jsx'
import Input from '../../Input/Input.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import InputSelect from '../../InputSelect/InputSelect.jsx';
import { create } from '../../../utils/functionsDB.js';
import { data } from '../../../db.js'


const Adicionar = () => {

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
            id={"input-nome"}
            maximoCaracter={"55"}
            />

          < Input 
            dados="Modelo do Veiculo:"
            id={"input-Modelo"}
            maximoCaracter={"20"}
            />

          < Input 
            dados="Placa do Veiculo:"
            id={"input-placa"}
            maximoCaracter={"7"}
            />

          < InputSelect 
            dados="Nome do Funcionario:" 
            dados1="Funcionario"
            title="Funcionarios"
            data={data}
            id={"input-Funcionarios"}
            />

          < InputSelect 
            dados="Vaga Alocada:" 
            dados1="1"
            title="Vaga"
            datas={data}
            id={"input-Vaga"}
            />

        </div>

        <Bottao nome="GUARDAR" onCreate={()=>create()} />
      </ContainerGeral>
    </>
  );
};

export default Adicionar
import React from 'react';
import { ContainerGeral, ContTitle, Title, Add } from './style.jsx'
import Input from '../../components/Input/Input.jsx';
import Bottao from '../../components/Bottao/Bottao.jsx';
import InputSelect from '../../components/InputSelect/InputSelect.jsx';


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
            dados="Nome do Proprietario:"/>
          < Input 
            dados="Modelo do Veiculo:"/>
          < Input 
            dados="Placa do Veiculo:"/>
          < InputSelect 
            dados="Nome do Funcionario:" 
            dados1="Funcionario"
            title="Funcionarios"/>
          < InputSelect 
            dados="Vaga Alocada:" 
            dados1="1"
            title="Vaga"/>
        </div>

        <Bottao nome="GUARDAR"/>
      </ContainerGeral>
    </>
  );
};

export default Adicionar
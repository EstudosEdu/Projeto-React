import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input/Input.jsx'
import Bottao from '../../components/Bottao/Bottao.jsx'


const Inicial = () => {
  const ContainerGeral = styled.section`
    width: 60%;
  `

  const ContTitle = styled.span`
    text-align: center;
  `

  const Title = styled.h1`
    font-family: 'Roboto';
    font-weight: 600;
  `;

  const Add = styled.h3`
    font-family: 'Roboto';
    margin: 2rem 0rem 2rem .5rem;
    font-weight: 600;
    font-size: 22px;
  `;

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
          < Input dados="Nome do Proprietario:"/>
          < Input dados="Modelo do Veiculo:"/>
          < Input dados="Placa do Veiculo:"/>
          < Input dados="Nome do Funcionario:"/>
          < Input dados="Vaga Alocada:"/>
        </div>

        <Bottao/>
      </ContainerGeral>
    </>
  )
}

export default Inicial
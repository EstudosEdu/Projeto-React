import React from 'react';
import {
  ContainerG,
  ContainerFundo,
  TitleCentral,
  ContLineInfo,
  TitleLine,
  InfoLine
} from './style.jsx';

const Modal = (props) => {
  return(
    <>
      <ContainerFundo>
        <ContainerG>
          <TitleCentral>Visualizar</TitleCentral>

          <ContLineInfo>
            <TitleLine>Nome do Proprietario:</TitleLine>
            <InfoLine>{props.dado.nome}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Modelo do Veiculo:</TitleLine>
            <InfoLine>{props.dado.model}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Placa do Veiculo:</TitleLine>
            <InfoLine>{props.dado.placa}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Nome do Funcionario:</TitleLine>
            <InfoLine>{props.dado.funcionario}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Vaga Alocada:</TitleLine>
            <InfoLine>Vaga {props.dado.vaga}</InfoLine>
          </ContLineInfo>
          
          <button onClick={() => props.func(false)}>Fechar</button>
        </ContainerG>
      </ContainerFundo>
    </>
  )
}

export default Modal
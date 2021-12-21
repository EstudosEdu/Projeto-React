import React from 'react';
import {
  ContainerG,
  ContainerFundo,
  TitleCentral,
  ContLineInfo,
  TitleLine,
  InfoLine
} from './style.jsx';
import '../Bottao/btn_style.css';

const Modal = (props) => {
  return(
    <>
      <ContainerFundo>
        <ContainerG>
          <TitleCentral>Visualizar</TitleCentral>

          <ContLineInfo>
            <TitleLine>Nome do Proprietario:</TitleLine>
            <InfoLine>{props.dado.Proprietario}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Modelo do Veiculo:</TitleLine>
            <InfoLine>{props.dado.Modelo}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Placa do Veiculo:</TitleLine>
            <InfoLine>{props.dado.Placa}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Nome do Funcionario:</TitleLine>
            <InfoLine>{props.dado.Funcionario}</InfoLine>
          </ContLineInfo>

          <ContLineInfo>
            <TitleLine>Vaga Alocada:</TitleLine>
            <InfoLine>Vaga {props.dado.Vaga}</InfoLine>
          </ContLineInfo>
          
          <button className="link" onClick={() => props.func(false)}>Fechar</button>
        </ContainerG>
      </ContainerFundo>
    </>
  )
}

export default Modal
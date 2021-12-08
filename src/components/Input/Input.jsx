import React from 'react';
import { Title, Digite, Container } from './style.jsx';

const Input = (props) => {
  return(
    <>
      <Container>
        <Title>
          {props.dados}
        </Title>
        <Digite 
          type="text" 
          placeholder={props.edit ? props.place : "Digite seu nome:"}
          maxLength={props.maximoCaracter}

          
          onChange={(e) => props.funcao(
          {
            id: props.infos.id,
            nome : props.number == 1 ? e.target.value : props.infos.nome,
            model : props.number == 2 ? e.target.value : props.infos.model,
            placa : props.number == 3 ? e.target.value : props.infos.placa,
            funcionario : props.number == 4 ? e.target.value : props.infos.funcionario,
            vaga : props.number == 5 ? e.target.value : props.infos.vaga
          })
        }

        />
      </Container>
    </>
  );
};

export default Input;
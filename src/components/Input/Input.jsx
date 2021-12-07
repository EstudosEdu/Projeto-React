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
          placeholder="Digite seu nome"
          id={props.id}
          maxLength={props.maximoCaracter}
          onChange={(e) => props.funcao(
          {
            nome : props.id == 1 ? e.target.value : props.infos.nome,
            model : props.id == 2 ? e.target.value : props.infos.model,
            placa : props.id == 3 ? e.target.value : props.infos.placa,
            funcionario : props.id == 4 ? e.target.value : props.infos.funcionario,
            vaga : props.id == 5 ? e.target.value : props.infos.vaga
          })
        }

        
        />
      </Container>
    </>
  );
};

export default Input;
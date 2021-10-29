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
        />
      </Container>
    </>
  );
};

export default Input;
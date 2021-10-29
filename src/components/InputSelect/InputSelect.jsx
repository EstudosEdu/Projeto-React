import React from 'react';
import { data } from '../../db.jsx';
import { Title, Digite, Container } from './style.jsx'

const InputSelect = (props) => {
  
  return(
    <>
    <Container>
      <Title>
        {props.dados}
      </Title>
      
      <Digite id={props.id}>
        <option selected disabled>
          {props.title}
        </option>
        {data.map((data)=>{
          return (
          <option>
            { props.title === "Funcionarios"? data.funcionario : data.vaga }
          </option>
          )
        })}
      </Digite>
    </Container>
    </>
  );
};

export default InputSelect;
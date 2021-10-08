import React from 'react';
import { Title, Digite, Container } from './style.jsx'

const InputSelect = (props) => {
  
  return(
    <>
    <Container>
      <Title>
        {props.dados}
      </Title>
      
      <Digite>
        <option selected disabled>
          {props.title}
        </option>
        <option >
          {props.dados1}
        </option>
        <option >
          {props.dados1}
        </option>
      </Digite>
    </Container>
    </>
  );
};

export default InputSelect;
import React from 'react';
import { Btn } from './style.jsx'
 
const Bottao = (props) => {


  return(
    <>
      <Btn>
        {props.nome}
      </Btn>
    </>
  );
};

export default Bottao;
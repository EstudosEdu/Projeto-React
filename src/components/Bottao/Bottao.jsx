import React from 'react';
import styled from 'styled-components';



const Bottao = () => {
  const Btn = styled.button`
    padding: 10px 50px;
    background: var(--back-btn);
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 400;
  `;

  return(
    <>
      <Btn>GUARDAR</Btn>
    </>
  )
}

export default Bottao
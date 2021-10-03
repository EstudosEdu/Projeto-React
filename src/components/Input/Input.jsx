import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const Title = styled.p`
    color: #343F4B;
    font-size: 16px;
    font-family: 'Roboto';
    margin-bottom: 1px;
  `;

  const Digite = styled.input`
    border: none;
    border-bottom: 2px solid #e8e8e8;
    padding: 0px 0px 7px 0px;
    outline: none;
    font-size: 14px;
    width: 100%;
    font-family: 'Roboto';
    color: #777777;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  `;

  return(
    <>
      <Container>
        <Title>
          {props.dados}
        </Title>
        <Digite 
          type="text" 
          placeholder="Digite seu nome" 
        />
      </Container>
    </>
  );
}

export default Input;
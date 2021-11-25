import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { liberou } from '../../utils/functionsDB.js'
 
const Bottao = (props) => {

  return(
    <>
      <button onClick={() => props.func(props.info)}>
        Guardar
      </button>
      {/* <Link 
      to={props.link}
      className="link" 
      onClick={props.onCreate}>
        {props.nome}
      </Link>
      <button onClick={props.onCreate} className="link" >{props.nome}</button> */}
    </>
  );
};

export default Bottao;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
 
const Bottao = (props) => {

  return(
    <>
      <Link 
      to={props.link} 
      className="link" 
      onClick={props.onCreate}>
        {props.nome}
      </Link>
      {/* <button onClick={props.onCreate} className="link" >{props.nome}</button> */}
    </>
  );
};

export default Bottao;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Bottao = props => {
  
  function btnAdd(){
     return <button
     onClick={() =>
       props.func(props.info).then(i => {
         if (i) {
           props.setredirect(true)
         }
       })
     }
   >
     {props.nome}
   </button>
  }

  function btnList(){
    return <Link to="/">
      <button>{props.nome}</button>
    </Link>
  }

  return(
      <>
        {props.nome == "GUARDAR" ? btnAdd() : btnList()}
      </>
  )
}

export default Bottao

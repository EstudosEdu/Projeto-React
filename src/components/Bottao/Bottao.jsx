import React from 'react';
import { Link } from 'react-router-dom';
import './btn_style.css';


const Bottao = props => {
  
  function btnAdd(){
     return <button
     className="link"
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
      <button className="link">{props.nome}</button>
    </Link>
  }

  return(
      <>
        {props.nome === "GUARDAR" ? btnAdd() : btnList()}
      </>
  )
}

export default Bottao

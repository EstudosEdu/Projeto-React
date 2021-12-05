import React from 'react'
import './style.css'

const Bottao = props => {
  return (
    <>
      <button
        onClick={() =>
          props.func(props.info).then(i => {
            if (i) {
              props.setredirect(true)
            }
          })
        }
      >
        Guardar
      </button>
    </>
  )
}

export default Bottao

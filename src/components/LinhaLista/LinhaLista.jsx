import React from 'react';
import ImgSair from '../../assets/box-arrow-in-right.svg';
import ImgLapis from '../../assets/pencil.svg';
import ImgLupa from '../../assets/search.svg';
import {
  ContImgs,
  ImgsIcons,
  ImgsIconsPencil,
  ContGeralImgs,
  ContGeral,
  ContTitleList,
  NumberVaga,
  NameCar,
  ContLinhas
} from './style.jsx';import { deletar } from '../../utils/functionsDB.js';
import { Link } from 'react-router-dom';

const LinhaLista = (props) => {

  return (
    <>
      <ContLinhas>
        <ContGeral>
          <ContTitleList>
            <NameCar>{props.dados.Modelo}</NameCar>
            <NumberVaga>Vaga {props.dados.Vaga}</NumberVaga>
          </ContTitleList>
          <ContGeralImgs>
            <ContImgs>
                <Link to={{ pathname: "/edit", state: props.dados }}>
                  <ImgsIconsPencil src={ImgLapis}  alt=""/>
                </Link>
            </ContImgs>
            <ContImgs>
              <ImgsIcons
                src={ImgLupa}
                onClick={() => {
                  props.setModal(true)
                  props.setDadoModal(props.dados)
                }}
                alt=""
              />
            </ContImgs>
            <ContImgs>
              <ImgsIcons
                src={ImgSair}
                onClick={() =>  {
                  let protecao = window.confirm(`Deseja remover o veiculo "${props.dados.model}" da lista?`);
                  if(protecao){
                    deletar(props.dados.id)
                    props.setEstado(!props.estado)
                  }
                }
              }
                alt=""
              />

            </ContImgs>
          </ContGeralImgs>
        </ContGeral>
      </ContLinhas>
    </>
  )
}

export default LinhaLista;
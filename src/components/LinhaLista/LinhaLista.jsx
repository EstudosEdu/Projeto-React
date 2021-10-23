import React from 'react';
import ImgSair from '../../assets/box-arrow-in-right.svg';
import ImgLapis from '../../assets/pencil.svg';
import ImgLupa from '../../assets/search.svg';
import { 
  ContImgs, 
  ImgsIcons, 
  ContGeralImgs, 
  ContGeral, 
  ContTitleList, 
  NumberVaga,
  NameCar,
  ContLinhas
} from './style.jsx';

const LinhaLista = () => {
  return(
    <>
      <ContLinhas>
        <ContGeral>
          <ContTitleList>
            <NameCar>Corolla</NameCar>
            <NumberVaga>Vaga 1</NumberVaga>
          </ContTitleList>
          <ContGeralImgs>
            <ContImgs>
              <ImgsIcons src={ImgLapis} alt=""/>
            </ContImgs>
            <ContImgs>
              <ImgsIcons src={ImgLupa} alt=""/>
            </ContImgs>
            <ContImgs>
              <ImgsIcons src={ImgSair} alt=""/>
            </ContImgs>
          </ContGeralImgs>
        </ContGeral>
      </ContLinhas>
    </>
  )
}

export default LinhaLista;
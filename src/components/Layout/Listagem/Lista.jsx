import React, { useState } from 'react';
import { Title, Add, ContainerGeral} from '../Adicionar/style.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import LinhaLista from '../../LinhaLista/LinhaLista.jsx';
import { data } from '../../../db.jsx';
import { Link } from 'react-router-dom';

const Lista = () => {
  const [datas, setDatas] = useState(data)

  return(
    <>
      <ContainerGeral>
        <div>
          <Title>
            ESTACIONAMENTO
          </Title>
          <Add>
            Lista de Veiculo:
          </Add>
        </div>
        
        {datas.map((datas) => (
          <LinhaLista dados={datas} setDados={setDatas}/>
        ))}
        <br />
        <br />
        <span>
          <Bottao nome="Adicionar"/>
          
        </span>
      
      </ContainerGeral>
    </>
  )
}

export default Lista;
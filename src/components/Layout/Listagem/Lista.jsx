import React, { useState } from 'react';
import { Title, Add, ContainerGeral} from '../Adicionar/style.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import LinhaLista from '../../LinhaLista/LinhaLista.jsx';
import { data } from '../../../db.jsx';

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

        <span>
          <Bottao nome="Adicionar" link={"/"}/>
        </span>
        
        {datas.map((datas) => (
          <LinhaLista dados={datas}/>
        ))}
      
      </ContainerGeral>
    </>
  )
}

export default Lista;
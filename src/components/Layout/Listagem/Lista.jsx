import React from 'react';
import { Title, Add, ContainerGeral} from '../Adicionar/style.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import LinhaLista from '../../LinhaLista/LinhaLista.jsx';

const Lista = () => {

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
          <Bottao nome="Adicionar"/>
        </span>

        <LinhaLista />

      </ContainerGeral>
    </>
  )
}

export default Lista;
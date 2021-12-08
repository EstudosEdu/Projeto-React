import React, { useState } from 'react';
import { Title, Add, ContainerGeral} from '../Adicionar/style.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import LinhaLista from '../../LinhaLista/LinhaLista.jsx';
import { data } from '../../../db.jsx';
import Modal from '../../modal/Modal.jsx';
import '../../Bottao/btn_style.css';

const Lista = () => {

  const [datas, setDatas] = useState(data);

  const [modal, setModal] = useState(null);
  
  const [dadoModal, setDadoModal] = useState('');
  
  
  if(modal){
    return <Modal dado={dadoModal} mod={modal} func={setModal}/>
  }
  

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
        
        <Bottao nome="Adicionar"/>
        
        {datas.map((datas) => (
          <LinhaLista  modal={Modal} setModal={setModal} dadoModal={dadoModal} setDadoModal={setDadoModal} dados={datas} setDados={setDatas} setaData={setDatas}/>
        ))}
      </ContainerGeral>
    </>
  )
}

export default Lista;
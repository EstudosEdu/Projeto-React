import React, { useState, useEffect } from 'react';
import { Title, Add, ContainerGeral} from '../Adicionar/style.jsx';
import Bottao from '../../Bottao/Bottao.jsx';
import LinhaLista from '../../LinhaLista/LinhaLista.jsx';
import Modal from '../../modal/Modal.jsx';
import '../../Bottao/btn_style.css';
import Axios from 'axios';

const Lista = () => {
  const [datas, setDatas] = useState();
  const [estado, setEstado] = useState(false);

  useEffect(() =>{
    Axios.get('http://localhost:8001/')
    .then((res) => {
      setDatas(res.data);
    })
  }, [estado]);


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
        
        {typeof datas !== 'undefined' &&
          datas.map((datas) => (
            <LinhaLista  
              modal={Modal} 
              setModal={setModal} 
              dadoModal={dadoModal} 
              setDadoModal={setDadoModal} 
              dados={datas} 
              setDados={setDatas} 
              setaData={setDatas}
              estado={estado}
              setEstado={setEstado}
            />
          ))
        }

        {/*datas.map((datas) => (
          <LinhaLista  modal={Modal} setModal={setModal} dadoModal={dadoModal} setDadoModal={setDadoModal} dados={datas} setDados={setDatas} setaData={setDatas}/>
        ))*/}
      </ContainerGeral>
    </>
  )
}

export default Lista;
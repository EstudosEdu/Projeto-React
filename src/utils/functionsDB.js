// Create
// getAll 
// update 
// delete

// chamar arrow function no jsx assim = ()=> nomeDaFunção
// em js chama assim nomeDaFunção()

import { data } from '../db.jsx';
let res = false;
let red = false;

// create 
export const create = async (dado) => {
  let nome = dado.nome
  let modelo = dado.model
  let placa = dado.placa
  let vaga = dado.vaga
  let funcionario = dado.funcionario

  return await verificaPlaca(nome, modelo, placa, vaga, funcionario);
};

const verificaPlaca =  async (nome, modelo, placa, vaga, funcionario) => {
  let regexPlaca1 = /([A-Z]{3})([0-9]{4})/gi;
  let regexPlaca2 = /([A-Z]{3})([0-9]{1})([A-Z]{1})([0-9]{2})/gi;

  let resul1 = regexPlaca1.test(placa)
  let resul2 = regexPlaca2.test(placa)

  if (resul1) {
    return await verificaGeral(nome, modelo, placa, vaga, funcionario);
  } else if (resul2) {
    return await verificaGeral(nome, modelo, placa, vaga, funcionario);
  } else {
    alert('Modelo de Placa INVALIDA!!!')
  }
}

const verificaGeral = async (nome, modelo, placa, vaga, funcionario) => {
  res = false
  if(
    ((nome && modelo) != '' || null)
    && (vaga != "Vaga") 
    && (funcionario != "Funcionarios")
  ){
    
    data.push(
      {
        id: data.length + 1,
        nome: nome, 
        placa: placa, 
        model: modelo,
        vaga: Number(vaga),
        funcionario: funcionario
      },
    )
    res = true
    console.log(data);
  }else{
    alert('Preencha todas as informações!!!!')
  }
  return(res);
}

// =================================================================================================
// delete 
export const deletar = async (props) => {
  data.filter((v, i) => {
    if(v.vaga == props){
      data.splice(i, 1)
    }
  })
  
  return data
}

// =================================================================================================
// update 

export const update = async (dado) => {
  red = false;
  for(let i = 0; i < data.length; i++){
    if(data[i].id == dado.id){
      data[i].id = dado.id
      data[i].nome = dado.nome
      data[i].placa = dado.placa
      data[i].model = dado.model
      data[i].vaga = Number(dado.vaga)
      data[i].funcionario = dado.funcionario
    }
  }

  red = true;
  return red;
}
// Create
// getAll 
// update 
// delete

// chamar arrow function no jsx assim = ()=> nomeDaFunção
// em js chama assim nomeDaFunção()

import { data } from '../db.jsx';
let res = false;

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
        nome: nome, 
        placa: placa, 
        model: modelo,
        vaga: Number(vaga),
        funcionario: funcionario
      },
    )
    console.log(data);
    res = true
  }else{
    alert('Preencha todas as informações!!!!')
  }
  return(res);
}





// delete 
export const deletar = (props) => {
  alert('Em breve')
  // return data.map((i, index, arr) => {
  //   let sla = data[index].nome
  //   if(sla == props){
  //     data.splice(index, 1)
  //   }
  // })
}
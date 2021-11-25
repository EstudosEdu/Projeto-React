// Create
// getAll 
// update 
// delete

// chamar arrow function no jsx assim = ()=> nomeDaFunção
// em js chama assim nomeDaFunção()

import { data } from '../db.jsx'
export let liberou = false

// create 
export const create = (dado) => {
  let nome = dado.nome
  let modelo = dado.model
  let placa = dado.placa

  verificaPlaca(nome, modelo, placa);
};

const verificaPlaca = (nome, modelo, placa) => {
  let regexPlaca1 = /([A-Z]{3})([0-9]{4})/gi
  let regexPlaca2 = /([A-Z]{3})([0-9]{1})([A-Z]{1})([0-9]{2})/gi

  let resul1 = regexPlaca1.test(placa)
  let resul2 = regexPlaca2.test(placa)

  if (resul1) {
    verificaGeral(nome, modelo, placa);
    console.log('modelo 1');
  } else if (resul2) {
    console.log('modelo 2');
    verificaGeral(nome, modelo, placa);
  } else {
    alert('Modelo de Placa INVALIDA!!!')
  }
}

const verificaGeral = (nome, modelo, placa) => {
  if(
    ((nome && modelo) != '' || null)
    // && (inputVaga != "Vaga") 
    // && (inputFuncionarios != "Funcionarios")
  ){
    
    data.push(
      {
        nome: nome, 
        placa: placa, 
        model: modelo
        // vaga: Number(inputVaga), 
        // funcionario: inputFuncionarios
      },
    )
    console.log(data)
    liberou = true
    
  }else{
    alert('Preencha todas as informações!!!!')
  }
}

// delete 
export const deletar = (props) => {
  return data.map((i, index, arr) => {
    let sla = data[index].nome
    if(sla == props){
      data.splice(index, 1)
    }
  })
}
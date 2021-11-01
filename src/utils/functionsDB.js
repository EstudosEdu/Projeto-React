// Create
// getAll 
// update 
// delete

// chamar arrow function no jsx assim = ()=> nomeDaFunção
// em js chama assim nomeDaFunção()

import { data } from '../db.jsx'


// create 
export const create = () => {
  let inputNome = document.querySelector('#input-nome').value;
  let inputModelo = document.querySelector('#input-Modelo').value;
  let inputPlaca = document.querySelector('#input-placa').value;
  let inputVaga = document.querySelector('#input-Vaga').value;
  let inputFuncionarios = document.querySelector('#input-Funcionarios').value;


  verificaPlaca(inputNome, inputModelo, inputPlaca, inputVaga, inputFuncionarios);
};

const verificaPlaca = (inputNome, inputModelo, inputPlaca, inputVaga, inputFuncionarios) => {
  let regexPlaca1 = /([A-Z]{3})([0-9]{4})/gi
  let regexPlaca2 = /([A-Z]{3})([0-9]{1})([A-Z]{1})([0-9]{2})/gi

  let resul1 = regexPlaca1.test(inputPlaca)
  let resul2 = regexPlaca2.test(inputPlaca)

  if (resul1) {
    verificaGeral(inputNome, inputModelo, inputVaga, inputFuncionarios);
  } else if (resul2) {
    verificaGeral(inputNome, inputModelo, inputVaga, inputFuncionarios);
  } else {
    alert('Modelo de Placa INVALIDA!!!')
  }
}

const verificaGeral = (inputNome, inputModelo, inputVaga, inputFuncionarios) => {
  if(
    ((inputNome && inputModelo) != '' || null)
    && (inputVaga != "Vaga") 
    && (inputFuncionarios != "Funcionarios")
  ){
    
    data.push(
      {
        nome: inputNome, 
        placa: "aaa1113", 
        model: inputModelo, 
        vaga: Number(inputVaga), 
        funcionario: inputFuncionarios
      },
    )
    console.log(data)
    
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


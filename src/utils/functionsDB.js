// Create
// getAll 
// update 
// delete

// chamar arrow function no jsx assim = ()=> nomeDaFunção
// em js chama assim nomeDaFunção()

import { data } from '../db.jsx';
let res = false;
let red = false;


// funções publicas
const verificaPlaca =  async (placa) => {
  let resul1 = /([A-Z]{3})([0-9]{4})/gi.test(placa); /*padrão aaa1111 */
  let resul2 = /([A-Z]{3})([0-9]{1})([A-Z]{1})([0-9]{2})/gi.test(placa); /*padrão aaa1a11 */

  if(resul1) return "modelo-placa-1";
  if(resul2) return "modelo-placa-2";
  else return false;
}

const verificaGeral = async (nome, modelo, vaga, funcionario) => {
  if(((nome && modelo) !== '' || null) && (vaga !== "Vaga") && (funcionario !== "Funcionarios")) return true;
}

// create 
export const create = async (dado) => {
  res = false
  let nome = dado.nome;
  let modelo = dado.model;
  let placa = dado.placa;
  let vaga = dado.vaga;
  let funcionario = dado.funcionario;

  await verificaPlaca(placa)
    .then((resposta) => {
      if(resposta === "modelo-placa-1") {
         verificaGeral(nome, modelo, vaga, funcionario)
          .then((res) => res ?  addBanco(nome, modelo, placa, vaga, funcionario) : alert('Preencha todas as informações!!!!'));
      }

      if(resposta === "modelo-placa-2") {
         verificaGeral(nome, modelo, vaga, funcionario)
          .then((res) => res ?  addBanco(nome, modelo, placa, vaga, funcionario) : alert('Preencha todas as informações!!!!'));
      }

      if(resposta === false) alert("Modelo de Placa Invalido!!!");
    });
  return res;
};

const addBanco = async (nome, modelo, placa, vaga, funcionario) => {
  data.push(
    {
      id: data.length + 1,
      nome: nome, 
      placa: placa, 
      model: modelo,
      vaga: Number(vaga),
      funcionario: funcionario
    },
  );
  res = true;
}


// =================================================================================================
// delete 
export const deletar = async (props) => {
  data.filter((v, i) => {
    if(v.vaga === props){
      data.splice(i, 1)
    }
    return data
  })
  
  return data
}


// =================================================================================================
// update 
export const update = async (dado) => {
  red = false;
  await verificaPlaca(dado.placa)
    .then((resposta) => {
      if(resposta === "modelo-placa-1") {
         verificaGeral(dado.nome, dado.model, dado.vaga, dado.funcionario)
          .then((res) => res ?  updateBanco(dado) : alert('Preencha todas as informações!!!!'));
      }

      if(resposta === "modelo-placa-2") {
         verificaGeral(dado.nome, dado.model, dado.vaga, dado.funcionario)
          .then((res) => res ?  updateBanco(dado) : alert('Preencha todas as informações!!!!'));
      }

      if(resposta === false) alert("Modelo de Placa Invalido!!!");
    });
  return red;
}

const updateBanco = (dado) => {

  for(let i = 0; i < data.length; i++){
    if(data[i].id === dado.id){
      data[i].id = dado.id
      data[i].nome = dado.nome
      data[i].placa = dado.placa
      data[i].model = dado.model
      data[i].vaga = Number(dado.vaga)
      data[i].funcionario = dado.funcionario
    }
  }

  red = true;
}
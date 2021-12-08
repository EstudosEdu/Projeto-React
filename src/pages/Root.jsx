import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Lista from '../components/Layout/Listagem/Lista.jsx';
import Add from '../components/Layout/Adicionar/Adicionar.jsx';
import Edit from  '../components/Editar/Editar.jsx';


const Root = () => {
  return (
    //definindo rotas dos components e etc...
    <Router>

      <Switch>
        <Route path="/edit" component={Edit} />
        <Route path="/list" component={Lista} />
        <Route path="/" component={Add} />

      </Switch>
    </Router>
  )
}

export default Root;
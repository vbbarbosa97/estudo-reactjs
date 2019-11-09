import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* 
O BrowserRouter é um reteador que permite usar as rotas na url com /
O Switch basicamente garante que uma rota seja chamada por vez
O Route representa cada pagina
*/

/* Importando os componentes */
import Main from './pages/Main';
import Repository from './pages/Repository';

/*
O exact diz para o react que esse componente deve ser carregado somente
quando a url for exatamente igual a url informada
 */
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} /> 
                <Route path="/repository/:repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
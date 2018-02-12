import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Test from './components/Test/Test'
//import NavBar from './components/NavBar/NavBar';
import App from './App'

const router = () => {
    <Switch>
        <Route exact path='/' component = {App}/>
        <Route path='/Test' component = {Test}/>
    </Switch>
}

export default router
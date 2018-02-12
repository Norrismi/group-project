import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test').then(response =>{
      console.log(response);
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <NavBar/>
     
      </div>
    );
  }
}

export default App;

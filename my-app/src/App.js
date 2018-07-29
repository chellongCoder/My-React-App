import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const possible = "abcdef0123456789";
var size = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '#000000',
    };
  }
  changeColor() {
    var text = "";
    for (var i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.setState({counter : `#${text}`});
  }
  componentDidMount() {
    setInterval(()=>{
      this.changeColor();
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <div style={{background : this.state.counter, width: 100, alignItems : 'center', margin: 'auto'}}>
           counter : {this.state.counter}
         </div>
      </div>
    );
  }
}

export default App;

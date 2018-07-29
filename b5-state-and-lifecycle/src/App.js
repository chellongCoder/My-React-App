import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import LayoutDemo from './components/layoutDemo';
import Form from './components/Form';
class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            second: 0,
        };
    }
    inCrementCounter() {
        this.setState(
            (preState, props) =>( {
                second : preState.second + 1,
            })
        );
    }
    componentDidMount() {
        this.timeID = setInterval(()=>this.inCrementCounter(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Couter: {this.state.second}
                </p>
                <LayoutDemo/>
                <Form/>
            </div>
        );
    }
}

export default App;

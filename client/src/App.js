import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                username: "Caleb",
                todo: "Go to work",
                isDone: false
            },
                {
                    username:"JP",
                    todo:"Plan interview",
                    isDone: false
                }]
        }
    }

    render() {
        fetch('/api/todos/testuser')
            .then(data => data.json())
            .then(response => this.setState({data: response}));

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <TodoList arr={this.state.data}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;

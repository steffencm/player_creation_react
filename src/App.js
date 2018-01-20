import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import placeholder from'./placeholder.svg';
import getAllClasses from './api/class.js'


function ClassOverview(props){
    return (
        <div className="col">
            <div className="card">
                <img className="card-img-top rounded-circle" src={placeholder} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Create</a>
              </div>
            </div>
        </div>
    );
}


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            classes: getAllClasses(),
        }
    }


    render() {
        let classes = []
        this.state.classes.forEach(function(element){
            console.log(element);
            classes.push(ClassOverview(element))
        });
        return (
        <div className="row">{classes}</div>
     );
    }
}

export default App;

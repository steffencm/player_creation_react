import React, { Component } from 'react';
import './ClassChoice.css';
import placeholder from'./placeholder.svg';
import getAllClasses from './api/class.js'


function ClassOverview(props){
    return (
        <div className="col-4">
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

function ClassRow(props){
    let classes = []
    console.log(props);
    props.rowClasses.forEach(function(element){
        classes.push(ClassOverview(element))
    });
    return (
        <div className="row">{classes}</div>
    );
    
}



class ClassChoice extends Component {

    constructor(props){
        super(props);
        this.state = {
            classes: getAllClasses(),
        }
    }


    render() {
        let rows = []
        let loops = Math.ceil(this.state.classes.length/4)
        let thisLoop = 0;
        for(let i = 0; i < loops; i++){
            console.log(thisLoop*i);
            console.log(thisLoop*i+4);
            rows.push(ClassRow({rowClasses: this.state.classes.slice(thisLoop*i, thisLoop*i+3)}));
            thisLoop+=4;
        };
        return (
            <div className="classGrid">{rows}</div>
        );


    }
}

export default ClassChoice;

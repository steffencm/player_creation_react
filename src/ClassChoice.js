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
                <h5 className="card-title">{props.classDetail.title}</h5>
                <p className="card-text">{props.classDetail.description}</p>
                <div className="row">
                    <div className="col">
                        <a href="#" className="btn btn-primary" onClick={() => props.onClick(props.classDetail.id)}>Select</a>
                    </div>
                    <div className="col">
                        <a href="#" className="btn btn-primary">More Information</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}

function ClassRow(props){
    let classes = [];
    props.rowClasses.forEach(function(element){
        classes.push(ClassOverview({classDetail: element, onClick: (classId) => props.onClick(classId)}));
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
            rows.push(ClassRow({rowClasses: this.state.classes.slice(thisLoop*i, thisLoop*i+3), onClick:(classId) => this.props.onClick(classId)}));
            thisLoop+=4;
        };
        return (
            <div className="classGrid jumbotron">
            <h1 className="jumbotron-heading">Choose your class</h1>
            {rows}
            </div>
        );


    }
}

export default ClassChoice;

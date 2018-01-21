import  React, { Component } from 'react';
import placeholder from'./placeholder.svg';
import './GenericCardChoice.css';


function GenericCard(props){
    return (
        <div className="col-4">
            <div className="card">
                <img className="card-img-top rounded-circle" src={placeholder} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{props.detail.title}</h5>
                <p className="card-text">{props.detail.description}</p>
                <div className="row">
                    <div className="col">
                        <a href="#" className="btn btn-primary" onClick={() => props.onClick(props.detail.id)}>Select</a>
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

function CardRow(props){
    let detailList = [];
    props.row.forEach(function(element){
        detailList.push(GenericCard({detail: element, onClick: (id) => props.onClick(id)}));
    });
    return (
        <div className="row">{detailList}</div>
    );
    
}



class GenericCardChoice extends Component {

    render() {
        let rows = []
        let loops = Math.ceil(this.props.choices.length/4)
        let thisLoop = 0;
        for(let i = 0; i < loops; i++){
            rows.push(CardRow({row: this.props.choices.slice(thisLoop*i, thisLoop*i+3), onClick:(id) => this.props.onClick(id)}));
            thisLoop+=4;
        };
        return (
            <div className="classGrid jumbotron">
            <h1 className="jumbotron-heading">{this.props.heading}</h1>
            {rows}
            </div>
        );


    }
}

export default GenericCardChoice;

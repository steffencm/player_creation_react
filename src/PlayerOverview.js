import  React, { Component } from 'react';


function ChildStat(props){
    return (
        <div className="childStat">
            <p>
                <strong>{props.display}: </strong>
                {props.modifier}
            </p>
        </div>
    );
}

class StatsBlock extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.stats.id,
            display: props.stats.display,
            modifier: props.stats.modifier,
            children: props.stats.children,
         }

     };

    render(){
        let children = []
        this.state.children.forEach((child)=>{
            console.log(child);
            children.push(ChildStat(child));
        });
        return (
            <div className="topLevelState">
                    <h4>
                        <strong>{this.state.display}: </strong>
                        {this.state.modifier} 
                    </h4>
                    {children}
            </div>
        );
    }
}

class PlayerStats extends Component{

    constructor(props){
        super(props);
        this.state = {
            stats: props.stats,
        }
    }

    renderStatsBlock(statsBlock){
        return <StatsBlock stats={statsBlock} />;
    }

    render(){
        let topLevelStats = []
        this.state.stats.forEach((statBlock)=>{
            console.log(statBlock)
            topLevelStats.push(this.renderStatsBlock(statBlock));
        });
        return(
            <div className="stats">
                <h1>Stats</h1>
                {topLevelStats}
            </div>
            
        );
   }
}

function ChoiceRow(props){
    return (
        <div className="choiceRow">
            <p>
                <h4>
                    <strong>{props.title}: </strong>
                    {props.choice}
                </h4>
            </p>
        </div>
     );
}

class PlayerChoices extends Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            choices: props.choices,
        }
    }

    render(){
        let choice_rows = [];
        let objValues = this.state.choices;
        Object.keys(this.state.choices).forEach(function(key,index) {
            console.log(objValues);
            console.log(key);
            choice_rows.push(ChoiceRow({title: key, choice: objValues[key]}));
        });
        return(
            <div className="choices">
                <h1>Choices</h1>
                <div className="choicesList">
                    {choice_rows}
                </div>
            </div>
        );
    }
}

class PlayerOverview extends Component {

    constructor(props){
        super(props);
        this.state = {
            choices: props.choices,
            stats: props.stats,
        }
    }

    render() {
      return(
        <div className="playerOverview">
            <PlayerChoices choices={this.state.choices}/>    
            <PlayerStats stats={this.state.stats}/>
        </div>
      );
    }
}

export default PlayerOverview;

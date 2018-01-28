import React, { Component } from 'react';
import getAllClasses from './api/class.js'
import getAllRaces from './api/race.js'
import Player from './models/Player.js';
import PlayerOverview from './PlayerOverview.js';
import GenericCardChoice from './GenericCardChoice';
import update from 'immutability-helper';

class CreationWorkflow extends Component {

    constructor(props){
        super(props);
        this.state = {
            workflowStage: "raceSelection",
            player: new Player()
       }
   }

    renderChoiceScreen(stage){
        switch(stage){
            case "raceSelection":
                return <GenericCardChoice onClick={(race) => this.selectRace(race)} choices={getAllRaces()} heading="Choose Your Race"/>;
                break;
            case "classSelection":
                return <GenericCardChoice onClick={(klass) => this.selectClass(klass)} choices={getAllClasses()} heading="Choose Your Class"/>;
                break;
       }
   }

   renderPlayer(player){
       return <PlayerOverview choices={player.choices} stats={player.stats} />;
   };


   selectRace(race){
       this.state.player.choices.Race = race;
       const newState = update(this.state, {
             player: {$set: this.state.player},
             workflowStage: {$set: "classSelection"}
       });
       this.setState(newState);
   }

   selectClass(klass){
       this.state.player.choices.Class = klass;
       const newState = update(this.state, {
             player: {$set: this.state.player},
       });
       this.setState(newState);
       
   }
   
    render(){
        return (
            <div className="creationWorkflow">
                <div className="row">
                    <div className="col-9"> 
                        {this.renderChoiceScreen(this.state.workflowStage)}
                    </div>
                    <div className="col-3">
                        {this.renderPlayer(this.state.player)}
                    </div>
                </div>
            </div>
        );
   }

}

export default CreationWorkflow;

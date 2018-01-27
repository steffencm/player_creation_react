import React, { Component } from 'react';
import GenericCardChoice from './GenericCardChoice';
import LandingPage from './LandingPage';
import update from 'immutability-helper';
import getAllClasses from './api/class.js'
import getAllRaces from './api/race.js'
import Player from './models/Player.js';
import PlayerOverview from './PlayerOverview.js'


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            workflowStage: "raceSelection",
            player: new Player(),
        }
    }

    renderContent(stage){
        console.log(this.state);
        switch(stage){
            case "callToAction":
                return <LandingPage onClick={() => this.startWorkflow()}/>;
                break;
            case "raceSelection":
                return <GenericCardChoice onClick={(raceId) => this.selectRace(raceId)} choices={getAllRaces()} heading="Choose Your Race"/>;
                break;
            case "classSelection":
                return <GenericCardChoice onClick={(classId) => this.selectClass(classId)} choices={getAllClasses()} heading="Choose Your Class"/>;
                break;
            case "playertest":
                return <PlayerOverview choices={this.state.player.choices} stats={this.state.player.stats}/>;
                break;
       }
   }

   startWorkflow(){
       this.setState({workflowStage: "raceSelection"});
   };

   selectRace(raceId){
       this.state.player.choices.race = raceId;
       const newState = update(this.state, {
             player: {$set: this.state.player},
             workflowStage: {$set: "classSelection"}
       });
       this.setState(newState);
   }

   selectClass(classId){
       this.state.player.choices.class = classId;
       const newState = update(this.state, {
             player: {$set: this.state.player},
             workflowStage: {$set: "playertest"},
       });
       this.setState(newState);
       
   }

    render(){
        return (
          <div>
            <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Dungeons and Dragons Player Creation</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Create New Character <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Saved Characters</a>
                    </li>
                  </ul>
                  <form className="form-inline mt-2 mt-md-0">
                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                  </form>
                </div>
              </nav>
            </header>

            <main role="main" className="container">
                {this.renderContent(this.state.workflowStage)} 
            </main>

            <footer className="footer">
              <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
              </div>
            </footer>
         </div>
         );
    }
}

export default App;

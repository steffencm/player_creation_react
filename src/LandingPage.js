import React, { Component } from 'react';


class LandingPage extends Component {

    render(){
        return (
            <main role="main" className="inner cover">
                <h1 className="cover-heading">Create your new hero.</h1>
                <p className="lead">Start your next campaign on the right foot by creating your new hero with this interactive player creation system</p>
                <p className="lead">
                  <a href="#" onClick={() => this.props.onClick()} className="btn btn-lg btn-secondary">Start Creating!</a>
                </p>
          </main>
        ); 
   }

}
 
export default LandingPage;

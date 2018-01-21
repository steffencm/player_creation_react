import React, { Component } from 'react';
import ClassChoice from './ClassChoice';


class App extends Component {

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
                      <a className="nav-link" href="#">Create New Character <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Saved Characters</a>
                    </li>
                  </ul>
                  <form class="form-inline mt-2 mt-md-0">
                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                  </form>
                </div>
              </nav>
            </header>

            <main role="main" className="container">
                <ClassChoice />
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

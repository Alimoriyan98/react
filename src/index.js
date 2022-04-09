import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from 'react-router-dom';

import './index.css';

import HComponent from './components/home';
import CPComponent from './components/car-price';
import BGComponent from './components/background';
import RTComponent from './components/religious-times';
import SNComponent from './components/social-network/';
import MComponent from './components/metronome';
import LComponent from './components/loan';
import CCComponent from './components/currency-converter';

function App() {

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/react-project/'>
                    React Project
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to='/react-project/car-price'>
                            Car Price
                        </Link>
                        <Link className="nav-item nav-link" to='/react-project/background'>
                            Change Color
                        </Link>
                        <Link className="nav-item nav-link" to='/react-project/religious-times'>
                            Religious times
                        </Link>
                        <Link className="nav-item nav-link" to='/react-project/social-network'>
                            Social Network
                        </Link>
                        <Link className="nav-item nav-link" to='/react-project/metronome'>
                            Metronome
                        </Link>
                        <Link className="nav-item nav-link" to='/react-project/loan'>
                            loan
                        </Link>
                        <Link className="nav-item nav-link" to='/react-project/currency-converter'>
                            Currency converter
                        </Link>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path='/react-project/'>
                    <HComponent />
                </Route>
                <Route exact path='/react-project/car-price'>
                    <CPComponent />
                </Route>
                <Route path='/react-project/background'>
                    <BGComponent />
                </Route>
                <Route path='/react-project/religious-times'>
                    <RTComponent />
                </Route>
                <Route path='/react-project/social-network'>
                    <SNComponent />
                </Route>
                <Route path='/react-project/metronome'>
                    <MComponent />
                </Route>
                <Route path='/react-project/loan'>
                    <LComponent />
                </Route>
                <Route path='/react-project/currency-converter'>
                    <CCComponent />
                </Route>
            </Switch>

        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


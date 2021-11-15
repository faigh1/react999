import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Reference from './components/pages/Reference';
import Script from './components/pages/Script';
import Youtube from './components/pages/Youtube';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Referdetail from './components/pages/Referdetail';

function App(){
    return (
        <Router>
            <Route path="/" exact component={Main}/>
            <Route path="/About" component={About}/>
            <Route path="/Reference" component={Reference}/>
            <Route path="/Referdetail" component={Referdetail}/>
            <Route path="/Script" component={Script}/>
            <Route path="/Youtube" component={Youtube}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Portfolio" component={Portfolio}/>
            {/* <Route path="/Referdetail" component={Referdetail}/> */}
        </Router>
    )
}

export default App;
import React from 'react'; 
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import NavBar from '../components/mainscreen/NavBar';
import Footer from '../components/mainscreen/Footer';
import People from '../components/startwars/People';
import Planet from '../components/startwars/Planet';
import Home from '../components/mainscreen/Home';
import About from '../components/mainscreen/About';
 
const AppRouter = () => {  
    return ( 
            <Router>
                <NavBar />
                <Switch >
                    <Route exact path="/Home" component={Home} /> 
                    <Route exact path="/Planets" component={Planet}/>      
                    <Route exact path="/Peoples" component={People}/>
                    <Route exact path="/About" component={About}/>
                    <Redirect from="/" to="/Home" />
                </Switch>
                <Footer />
            </Router> 
    )
}

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Favorites from './Favorites'

const Nav = () => {
    return (
        <Router>
        
       
        <nav>
        <div className="nav-wrapper">
         
          
          <Link to="/Favorites" >fav</Link> 
          
         
        </div>
       </nav>
       <Route
            path="/favorites"
            render={props => <Favorites movies={this.state.favorites} />}
          />
        </Router>
    )
}
export default Nav;

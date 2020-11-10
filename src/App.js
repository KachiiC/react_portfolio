import React from "react";
// CSS
import "./App.css"
import navbar_menu from "Components/SiteNavbar/navbar-menu";
// Router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SiteNavbar from "Components/SiteNavbar";
// Page Data
import Home from 'Pages/Home'

const App = () => {

  const displayPageList = navbar_menu.map((single_menu) => (
    <Route path={`/${single_menu.path}`}>
      {single_menu.page}
    </Route>
  ))
  
  return (
      <Router>
        <SiteNavbar />
        <main>
          <Switch>
            {displayPageList}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
  );
}

export default App;

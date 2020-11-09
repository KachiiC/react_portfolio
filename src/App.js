import React from "react";
// CSS
import navbar_menu from "Components/SiteNavbar/navbar-menu";
// Router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SiteNavbar from "Components/SiteNavbar";
// Page Data

const App = () => {

  const displayPageList = navbar_menu.map((single_menu) => (
    <Route path={`/${single_menu.name}`}>
      {single_menu.page}
    </Route>
  ))
  
  return (
      <Router>
        <SiteNavbar />
          <Switch>
            {displayPageList}
          </Switch>
      </Router>
  );
}

export default App;

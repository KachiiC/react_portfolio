import React from "react";
// CSS
import "./App.css"
import NavbarData from "Data/Navbar/NavBarData";
// Router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Page Data
import Home from 'Pages/Home'
// Components
import SiteNavbar from "Components/SiteNavbar";
import PageContainer from 'Components/PageContainer'

const App = () => {

  const displayPageList = NavbarData.map((single_menu, index) => (
    <Route path={`/${single_menu.path}`} key={index}>
      {single_menu.page}
    </Route>
  ))
  
  return (
      <Router>
        <SiteNavbar />
        <PageContainer>
          <Switch>
            {displayPageList}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </PageContainer>
      </Router>
  );
}

export default App;

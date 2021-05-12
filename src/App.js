import React from "react";
// CSS
import "./App.css"
import PageData from "Data/PagesData";
// Router
import { BrowserRouter , Switch, Route} from "react-router-dom";
// Page Data
import About from 'Pages/About'
// Components
import SiteNavbar from "Components/SiteNavbar";
import PageContainer from 'Components/PageContainer'

const App = () => {

  const displayPageList = PageData.map((single_menu, index) => (
    <Route path={`/${single_menu.path}`} key={index}>
        {single_menu.page}
    </Route>
  ))
  
  return (
      <BrowserRouter>
        <SiteNavbar />
        <PageContainer>
          <Switch>
            {displayPageList}
            <Route path="/">
                <About />
            </Route>
          </Switch>
        </PageContainer>
      </BrowserRouter>
  );
}

export default App;

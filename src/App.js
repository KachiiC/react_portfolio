import React from "react";
// CSS
import "./App.css"
import PageData from "Data/PagesData";
// Router
import { BrowserRouter , Switch, Route} from "react-router-dom";
// Page Data
import About from 'Pages/About'
// Components
import SiteNavbar from "Components/PageContainer/SiteNavbar";
import PageContainer from 'Components/PageContainer'

const App = () => {

  const displayPageList = PageData.map((menu, index) => (
    <Route path={`/react_portfolio/${menu.title}`} key={index}>
        {menu.page}
    </Route>
  ))
  
  return (
    <BrowserRouter>
      <SiteNavbar data={PageData} />
      <PageContainer>
        <Switch>
          {displayPageList}
          <Route path="/">
              <About />
          </Route>
        </Switch>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App;

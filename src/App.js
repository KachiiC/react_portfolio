import React from "react";
// CSS
import "./App.css"
// import 'antd/dist/antd.css'
// ROUTER
import { BrowserRouter , Switch, Route} from "react-router-dom";
// DATA
import PageData from "Data/PagesData";
import About from 'Pages/About'
// COMPONENTS
import SiteNavbar from "Components/PageContainer/SiteNavbar";
import PageContainer from 'Components/PageContainer'

const App = () => {

  const displayPageList = PageData.map((menu, index) => {
    return 'page' in menu ? (
      <Route path={`/react_portfolio/${menu.title}`} key={index}>
          {menu.page}
      </Route>
    )
    : (
      menu.menu_list.map((sub_menu) => (
        <Route path={`/react_portfolio/${sub_menu.title}`} key={index}>
          {sub_menu.page}
        </Route>
      ))
    )

  })
  
  return (
    <BrowserRouter>
      <SiteNavbar data={PageData} />
      <PageContainer>
        <Switch>
          {displayPageList}
          <Route path="/">
              {About}
          </Route>
        </Switch>
      </PageContainer>
    </BrowserRouter>
  )
}

export default App;

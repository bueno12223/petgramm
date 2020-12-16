/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import Home from './pages/home'
import Detail from './pages/detail'
import Logo from './components/Logo'
import { NavBar } from './components/navBar'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/detail/:id' render={(props) => <Detail {...props} />} />
        <Route exact path='/pet/:id' render={(props) => <Home {...props} />} />
      </Switch>
      <NavBar />
    </BrowserRouter>
  )
}
export default App

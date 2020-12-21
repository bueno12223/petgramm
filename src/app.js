/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import Home from './pages/home'
import { Favs } from './pages/favs'
import { NotUser } from './pages/notUser'
import { UserLoged } from './pages/UserLoged'
import Detail from './pages/detail'
import Logo from './components/Logo'
import { NavBar } from './components/navBar'
import { Context } from './hooks/useContext'

export const App = () => {
  const { isAuth, activeAuth } = useContext(Context)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path='/home' render={(props) => <Home {...props} />} />
        <Route exact path='/detail/:id' render={(props) => <Detail {...props} />} />
        <Route exact path='/pet/:id' render={(props) => <Home {...props} />} />
        <Route exact path='/favs' component={Favs} />
        <Route exact path='/user' render={() => isAuth ? <UserLoged /> : <NotUser activeAuth={activeAuth} />} />
      </Switch>
      <NavBar />
    </BrowserRouter>
  )
}

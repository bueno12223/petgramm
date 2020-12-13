/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './containers/photoCardWithQuery'
import Home from './pages/home'
import Logo from './components/Logo'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        {
        detailId
          ? <Route exact path='/' render={() => <PhotoCardWithQuery id={detailId} />} />
          : <>
            <Route exact path='/' render={(props) => <Home {...props} />} />
            <Route exact path='/pet/:id' render={(props) => <Home {...props} />} />
          </>
      }
      </Switch>
    </BrowserRouter>
  )
}
export default App

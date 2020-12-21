import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './app'
import { Provider } from './hooks/useContext'
const client = new ApolloClient({
  uri: 'https://petgram-vercel-ten.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  , document.getElementById('app'))

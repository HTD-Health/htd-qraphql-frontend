import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import App from './Router'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://htd-academy-api.herokuapp.com/',
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <SemanticToastContainer position={'bottom-right'}/>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)

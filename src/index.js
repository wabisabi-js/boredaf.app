import React from 'react'
import ReactDOM from 'react-dom'
import { BoredState } from './BoredContext'
import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'
import Main from './app'

const Global = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: #DADDF2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h2 {
      color: #E45471;
      font-size: 30px;
      margin: 0;
      line-height: 1.5;
    }
    h1 {
      color: #41495D;
      line-height: 1.5;
      font-size:28px;
      margin: 0;

    }
    p {
      color: #889097;
      line-height: 1.5;
      margin: 0;
    }
  }

  #root {
    height: 100%;
    display: flex;
    align-items: flex-end;

    @media only screen and (min-width: 901px) {
      margin: 40px;
    }
  }
`

function App() {
  return (
    <BoredState>
      <Main />
      <Global />
    </BoredState>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

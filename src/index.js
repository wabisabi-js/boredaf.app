import React from 'react'
import ReactDOM from 'react-dom'
import { BoredState } from './BoredContext'
import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'
import Main from './app'
import * as serviceWorker from './serviceWorker'

const Global = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: #DADDF2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h1 {
      color: #E45471;
      font-size: 30px;
      margin: 0;
      line-height: 1.5;
    }

    h2 {
      color: #41495D;
      line-height: 1.5;
      font-size:28px;
      margin: 0;

    }
    p, a {
      color: #889097;
      line-height: 1.5;
      margin: 0;
    }

    a:hover, a:focus {
      color: #222;
      outline: none;
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
serviceWorker.register()

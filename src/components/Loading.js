import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bounce = keyframes`
  0%, 80%, 100% {
    background: #0b9af5;
    transform: scale(0);
  } 40% {
    background: #EAF6FF;
    transform: scale(1.0);
  }
`

const LoadingSpinner = styled.div`
  margin: 30px auto 0;
  width: 100%;
  text-align: center;

  div {
    width: 8px;
    height: 8px;
    margin-right: 8px;

    border-radius: 50%;
    display: inline-block;
    animation: ${Bounce} 2s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }
`
const Loading = () => (
  <LoadingSpinner>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </LoadingSpinner>
)

export default Loading

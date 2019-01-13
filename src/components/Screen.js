import React from 'react'
import styled from 'styled-components'
import screenHeader from '../images/screen-header.svg'

const ScreenContainer = styled.div`
  max-width: 375px;
  min-height: 500px
  background: #f3f7ff;
  margin: 0 auto;
`

const Screen = ({ children }) => (
  <ScreenContainer>
    <img src={screenHeader} alt="Screen Header" />
    {children}
  </ScreenContainer>
)

export default Screen

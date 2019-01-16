import React, { Fragment } from 'react'
import styled from 'styled-components'
import BotSVG from './Bot'
import { format } from 'date-fns'

const Bubble = styled.div`
  min-height: 20px;
  max-width: 200px;
  padding: 1em;
  margin-bottom: 1em;
  align-self: ${props => (props.primary ? 'flex-end' : 'flex-start')};
  background: ${props => (props.primary ? '#4153B8' : 'white')}
  color: ${props => (props.primary ? 'white' : '#54556C')}
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`
const BotSpeaking = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const UserSpeaking = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const SVG = styled.div`
  transform: translateY(50%);
  margin-left: 7px;
`

const DateWrapper = styled.span`
  font-size: 16px;
  color: #aeb8c0;
  align-self: flex-end;
  transform: translateY(-100%);
  margin: 0 25px;
`

const Chat = ({ children, messages }) => (
  <Fragment>
    {messages.map(({ user, bot, time }, i) => (
      <Fragment key={i}>
        <UserSpeaking>
          <Bubble>{user}</Bubble>
          <DateWrapper>{time}</DateWrapper>
        </UserSpeaking>
        <BotSpeaking>
          <DateWrapper>{time}</DateWrapper>
          <Bubble primary>{bot}</Bubble>
          <SVG>
            <BotSVG />
          </SVG>
        </BotSpeaking>
      </Fragment>
    ))}

    <ButtonsContainer>{children}</ButtonsContainer>
  </Fragment>
)

export default Chat

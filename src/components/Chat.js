import React, { Fragment } from 'react'
import styled from 'styled-components'
import BotSVG from './Bot'
import { SrOnly } from './Elements'

const Bubble = styled.div`
  min-height: 20px;
  max-width: 200px;
  padding: 1em;
  margin-bottom: 8px;
  align-self: ${props => (props.primary ? 'flex-end' : 'flex-start')};
  background: ${props => (props.primary ? '#4153B8' : 'white')};
  color: ${props => (props.primary ? 'white' : '#54556C')};
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
`

const Speaking = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.justifyEnd ? 'flex-start' : 'flex-end')};
  width: 100%;
`

const SVG = styled.div`
  display: flex;
  margin-right: 7px;
`

const BubbleWrapper = styled.div``

const DateWrapper = styled.div`
  font-size: 14px;
  color: #aeb8c0;
  margin-bottom: 16px;
  padding: 0 4px;
  text-align: ${props => (props.textRight ? 'right' : 'left')};
`

const List = styled.ul`
  padding-left: 0;
  margin: 0;
`

const Chat = ({ children, messages }) => {
  const ariaAttr = i =>
    i === messages.length - 1 ? { 'aria-live': 'polite' } : {}

  return (
    <Fragment>
      <List aria-label="Conversation messages">
        {messages.map(({ user, bot, time }, i) => (
          <Fragment key={i}>
            <Speaking>
              <BubbleWrapper>
                <Bubble>{user}</Bubble>
                <DateWrapper textRight>
                  <SrOnly>Sent at</SrOnly> {time}
                </DateWrapper>
              </BubbleWrapper>
            </Speaking>
            <Speaking {...ariaAttr(i)} justifyEnd>
              <SVG>
                <BotSVG />
              </SVG>
              <BubbleWrapper>
                <Bubble primary>{bot}</Bubble>
                <DateWrapper>
                  <SrOnly>Sent at</SrOnly> {time}
                </DateWrapper>
              </BubbleWrapper>
            </Speaking>
          </Fragment>
        ))}
      </List>

      <ButtonsContainer>{children}</ButtonsContainer>
    </Fragment>
  )
}

export default Chat

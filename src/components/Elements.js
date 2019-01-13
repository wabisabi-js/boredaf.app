import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  background: #fbfbfd;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
  border-radius: 30px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    margin: 20px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 10px;
  }
`

export const Welcome = styled.div`
  max-width: 300px;
  margin-top: 60px;

  @media only screen and (max-width: 900px) {
    order: 2;
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }
`

export const Mobile = styled.div`
  display: flex;
  max-width: 375px;
  min-height: 500px
  padding: 50px 20px 20px;
  flex-direction: column;
  background: #fff
  border-radius: 50px;
  z-index: 3;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);
`

export const MobileBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const Bubble = styled.div`
  min-height: 50px;
  max-width: 200px;
  padding: 1em;
  margin-bottom: 1em;
  align-self: ${props => (props.primary ? 'flex-end' : 'flex-start')};
  background: ${props => (props.primary ? '#0b9af5' : 'white')}
  color: ${props => (props.primary ? 'white' : '#54556C')}
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`
export const BotSpeaking = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const ChatContainer = styled.div`
  position: relative;
  flex: 1;
  margin-left: 50px;
  align-items: center;
  justify-content: center;
  display: flex;

  @media only screen and (max-width: 900px) {
    margin-left: 0;
  }
`

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
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
    margin: 20px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
    margin: 10px;
  }
`

export const WelcomeCard = styled.div`
  max-width: 300px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    order: 2;
    text-align: center;
    max-width: 100%;
    margin-top: 20px;
  }
`

export const Mobile = styled.div`
  max-width: 375px;
  height: 500px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 50px 20px 20px;
  background: #fff;
  border-radius: 50px;
  z-index: 3;
  position: relative;
  box-shadow: 0 32px 44px 0 rgba(64, 68, 90, 0.2);

  @media only screen and (max-width: 900px) {
    padding-top: 30px;
    margin: auto;
  }
`

export const MobileBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  z-index: 0;
  transform: translateX(-25%);

  @media only screen and (max-width: 900px) {
    left: 50%;
    width: auto;
    max-height: 500px;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 600px) {
    left: 0;
    transform: translateX(-10%);
    width: 120%;
  }
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
  width: 100%;
`

export const ChatContainer = styled.div`
  position: relative;
  margin-left: 50px;
  z-index: 1;

  @media only screen and (max-width: 900px) {
    margin-left: 0;
  }
`

export const SrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

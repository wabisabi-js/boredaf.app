import styled from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'

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
  min-width: 320px;
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
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

export const Overlay = styled(DialogOverlay)`
  z-index: 99;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`

export const Button = styled.button`
  color: #889097;
  line-height: 1.5;
  margin: 0;
  border: none;
  appearance: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #222;
    outline: none;
  }
`

export const Input = styled.input`
  padding: 10px;
  width: 80%;
  margin: 20px 0;
  display: block;
  box-shadow: 0px 0px 0px 2px rgba(65, 83, 184, 0.7);
  border: none;
  transition: all 200ms ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 2px rgba(65, 83, 184, 0.7);
  }

  ::-webkit-input-placeholder {
    color: rgba(136, 144, 151, 0.7);
    font-style: italic;
  }
  ::-moz-placeholder {
    color: rgba(136, 144, 151, 0.7);
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: rgba(136, 144, 151, 0.7);
    font-style: italic;
  }
`

export const SubmitButton = styled.button`
  padding: 10px 14px;
  color: white;
  background: rgba(65, 83, 184, 1);
  border: none;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

export const ModalContent = styled(DialogContent)`
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`
